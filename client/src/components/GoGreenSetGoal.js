import React, {useState, useContext} from 'react';
import {Button, Select, MenuItem, InputLabel, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from '@mui/material';
import UserContext from '../pages/user-context';
import {categoryActivity} from '../components/subcategories';

const buttonStyle =  {transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"};
const token = process.env.CLIMATIQ;

const GoGreenSetGoal = () => {
    const [user, setUser] = useContext(UserContext);
    const [emission, setEmission] = useState(0);
    const [inputs, setInputs] = useState({
    username : "", 
    label: 0,
    parameter : "", 
    category : "",
    subcategory: "",
    target_value: 0
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

    // post updates to the database
    async function post_updates (header) {
      fetch(`http://localhost:5000/newgoal`, header)
      .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
      }).then(update => {
        if (update.success !== 'true') {
            //inform user that the information provided was not found in the database
            window.alert('There was an issue creating your goal. Please try again.');
            console.log('Error creating new goal.');
        }})
      .catch(e => {
        console.log(e);
      });
    }
  
    // ADD new goal
    const handleSubmit = (e) => {
      e.preventDefault(); 
      inputs.username = user;
      inputs.subcategory = categoryActivity[inputs.label]['label'];
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
        
      post_updates(options);
      setOpen(false);
  }


  return (
    <div>
      <Button variant="contained" position="relative"
        style={{ left: '95%',  transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"}}
        onClick={handleClickOpen}>
        NEW GOAL
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Set Goal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter goal details below.
          </DialogContentText>
          <FormControl fullWidth sx={{mb: 2, mt: 2}}>
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
          <FormControl fullWidth sx={{mb: 1}}>
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
            id="target_value"
            label="Target"
            name="target_value"
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

export default GoGreenSetGoal