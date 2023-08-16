import React, {useState, useContext} from 'react';
import {Button, Select, MenuItem, InputLabel, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from '@mui/material';
import UserContext from '../pages/user-context';
import {categoryActivity} from '../components/subcategories';

const buttonStyle =  {transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"};
const token = process.env.CLIMATIQ;

const GoGreenDialog = ({type}) => {
    const [user, setUser] = useContext(UserContext);
    //const url_used = ((type !== "goal") ? `http://localhost:5000/newactivity` : `http://localhost:5000/newgoal`);
    const [emission, setEmission] = useState(0);
    const [inputs, setInputs] = useState({
    username : "", 
    label: 0,
    parameter : "", 
    category : "",
    subcategory: "",
    parameter_value: 0,
    apicode: "",
    param_used: "",
    date : "", 
    emission : 0
  });

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

     // update inputs as user changes the information on the add reviews pop up
   const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value,
    }));  
    };

    // post updates to the database (activity)
    async function post_updates (header) {
      fetch(`http://localhost:5000/newactivity`, header)
      .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
      }).then(update => {
        if (update.success !== 'true') {
            //inform user that the information provided was not found in the database
            window.alert('There was an issue adding your item. Please try again.');
            console.log('Error creating new item.');
        }})
      .catch(e => {
        console.log(e);
      });

    }

    // post updates to the database (goal)
    async function post_updates_goal (header) {
      fetch(`http://localhost:5000/newgoal`, header)
      .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
      }).then(update => {
        if (update.success !== 'true') {
            //inform user that the information provided was not found in the database
            window.alert('There was an issue adding your item. Please try again.');
            console.log('Error creating new item.');
        }})
      .catch(e => {
        console.log(e);
      });

    }

     // post request to Climatiq API to get access to emissions value
     async function post_climatiq (header) {
      await fetch(`https://beta4.api.climatiq.io/estimate`, header)
      .then(data => {
      if (!data.ok) {
        console.log("we received: ", data)
        window.alert('Error accessing Climatiq API.');
        throw Error(data.status);
      } else {
        return data.json()
      }}).then(resJson => {
        inputs.emission = resJson.co2e
        setEmission(resJson.co2e);
      })
      .catch(e => {
        console.log(e);
      });
    }

    // set emission using climatiq API
    async function set_emission() {

      const options_emissions = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer W88ACMB4GX46VBPMB6DQ8HZHZ7TJ`
        },
        body: JSON.stringify(
          {
            emission_factor: {
              activity_id: inputs.apicode,
                  data_version: "^1"
            },
            parameters: {
              [inputs.param_used] : parseFloat(inputs.parameter_value),
              [inputs.param_used + '_unit']: inputs.parameter
            }
          })
        ,
        };
      
      console.log('request: ', options_emissions);
      await post_climatiq(options_emissions);
      console.log('after call we have emission: ', inputs.emission);
      
      // we only proceed with posting if emissions are not 0
      if (inputs.emission > 0) {
        //set category
      if (inputs.label < 6) {
        inputs.category = 'Transport';
      } else if (inputs.label > 5 && inputs.label < 12) {
        inputs.category = 'Food';
      } else if (inputs.label > 11 && inputs.label < 14){
        inputs.category = 'Household';
      } else {
        inputs.category = 'Personal Care';
      }

      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      };
      
      if (type !== "goal") {
        post_updates(options);
      } else {
        post_updates_goal(options);
      }
      
      }
    }
  
    // ADD new activity
    const handleSubmit = (e) => {
      e.preventDefault(); 
      inputs.username = user;
      inputs.subcategory = categoryActivity[inputs.label]['label'];
      inputs.apicode = categoryActivity[inputs.label]['apicode'];
      inputs.param_used = categoryActivity[inputs.label]['param_used'];
      set_emission();
      setOpen(false);
  }


  //OPEN Q: should we remove the SEARCH button since we already have the datagrid functionality
  return (
    <div>
      <Button variant="contained" position="relative"
        style={{ left: '95%',  transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"}}
        onClick={handleClickOpen}>
        {(type !== "goal") ? "ADD ENTRY" : "SET GOAL"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{(type !== "goal") ? "New activity" : "Set new goal"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter actitivty details below.
          </DialogContentText>
          <FormControl fullWidth sx={{mt: 2, mb: 1}}>
                <InputLabel id="activity-input">Item</InputLabel>
                <Select
                    id="item"
                    name="label"
                    value={inputs.label}
                    label="Activity"
                    onChange={handleChange}
                >
                 {categoryActivity.map((a) => { return (<MenuItem key={a.value} value={a.value}>{a.label}</MenuItem>);})}
                </Select>
                </FormControl>
          {(type !== "goal") && (<TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />)}
          <FormControl fullWidth sx={{mb: 2, mt: 2}}>
                <InputLabel id="activity-input-2">Parameter</InputLabel>
                <Select
                    id="parameter"
                    name="parameter"
                    value={inputs.parameter}
                    label="Parameter"
                    onChange={handleChange}
                >
                 {categoryActivity[inputs.label]['parameter'].map((p) => { return (<MenuItem key={inputs.label + p} value={p}>{p}</MenuItem>);})}
                </Select>
                </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="parameter_value"
            label="Parameter Value"
            name="parameter_value"
            value={inputs.parameter_value}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={buttonStyle} variant="contained" onClick={handleClose}>Cancel</Button>
          <Button sx={buttonStyle} variant="contained" onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GoGreenDialog