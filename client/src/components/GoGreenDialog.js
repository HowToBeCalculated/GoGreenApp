import React, {useState, useContext} from 'react';
import {Button, Select, MenuItem, InputLabel, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography} from '@mui/material';
import UserContext from '../pages/user-context';

const buttonStyle =  {transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"};
const token = process.env.CLIMATIQ;

//to remove?
const categoryActivity = [
    {
      label: "International rail passenger train",
      apicode: "passenger_train-route_type_international_rail-fuel_source_na",
      value: 0,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "International long-haul flight - without RF effect",
      apicode: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_na-rf_excluded-distance_uplift_included",
      value: 1,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Automobile",
      apicode: "passenger_vehicle-vehicle_type_automobile-fuel_source_na-distance_na-engine_size_na",
      value: 2,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Regular Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 3,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Bus",
      apicode: "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
      value: 4,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 5,
      param_used: "distance",
      parameter: ['km', 'm']
    },
    {
      label: "Dairy products",
      apicode: "consumer_goods-type_dairy_products",
      value: 6,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (beef)",
      apicode: "consumer_goods-type_meat_products_beef",
      param_used: "money",
      value: 7,
      parameter: ['usd']
    },
    {
      label: "Meat products (pork)",
      apicode: "consumer_goods-type_meat_products_pork",
      value: 8,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (poultry)",
      value: 9,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Fish products",
      apicode: "consumer_goods-type_fish_products",
      value: 10,
      param_used: "money",
      parameter: ['usd']
    },
    {
      label: "Meat products (not elsewhere specified)",
      apicode: "consumer_goods-type_meat_products_not_elsewhere_specified",
      value: 11,
      param_used: "money",
      parameter: ['usd']
    },
    {
    label: "Electricity supplied from grid",
    apicode: "electricity-supply_grid-source_supplier_mix",
    value: 12,
    param_used: "energy",
    parameter: ['kWh']
    },
    {
    label: "Water supply",
    apicode: "water_supply-type_na",
    value: 13,
    param_used: "volume",
    parameter: ['l']
    }
  ]

  const parameters = ['km', 'm', 'usd', 'kwH', 'l'];


const GoGreenDialog = () => {
    const [user, setUser] = useContext(UserContext);
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

    // post updates to the database
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
            window.alert('There was an issue creating your activtiy. Please try again.');
            console.log('Error creating new activity.');
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
        console.log('we are here: ', resJson.co2e);
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
      } else {
        inputs.category = 'Household';
      }

      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      };
      
      console.log("we have made it here");
      post_updates(options);
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
        ADD ENTRY
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New activity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter actitivty details below.
          </DialogContentText>
          <FormControl fullWidth>
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
          <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <FormControl fullWidth>
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