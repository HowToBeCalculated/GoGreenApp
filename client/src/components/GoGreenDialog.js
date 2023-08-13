import React, {useState, useContext} from 'react';
import {Button, Select, MenuItem, InputLabel, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';
import UserContext from '../pages/user-context';

const buttonStyle =  {transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"};

//to remove?
const categoryActivity = [
    {
      label: "International rail passenger train",
      apicode: "passenger_train-route_type_international_rail-fuel_source_na",
      value: 0,
      parameter: ['km', 'm']
    },
    {
      label: "International long-haul flight - without RF effect",
      apicode: "passenger_flight-route_type_international-aircraft_type_na-distance_long_haul_gt_3700km-class_na-rf_excluded-distance_uplift_included",
      value: 1,
      parameter: ['km', 'm']
    },
    {
      label: "Automobile",
      apicode: "passenger_vehicle-vehicle_type_automobile-fuel_source_na-distance_na-engine_size_na",
      value: 2,
      parameter: ['km', 'm']
    },
    {
      label: "Regular Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 3,
      parameter: ['km', 'm']
    },
    {
      label: "Bus",
      apicode: "passenger_vehicle-vehicle_type_bus-fuel_source_na-distance_na-engine_size_na",
      value: 4,
      parameter: ['km', 'm']
    },
    {
      label: "Taxi",
      apicode: "passenger_vehicle-vehicle_type_taxi-fuel_source_na-distance_na-engine_size_na",
      value: 5,
      parameter: ['km', 'm']
    },
    {
      label: "Dairy products",
      apicode: "consumer_goods-type_dairy_products",
      value: 6,
      parameter: ['usd']
    },
    {
      label: "Meat products (beef)",
      apicode: "consumer_goods-type_meat_products_beef",
      value: 7,
      parameter: ['usd']
    },
    {
      label: "Meat products (pork)",
      apicode: "consumer_goods-type_meat_products_pork",
      value: 8,
      parameter: ['usd']
    },
    {
      label: "Meat products (poultry)",
      value: 9,
      parameter: ['usd']
    },
    {
      label: "Fish products",
      apicode: "consumer_goods-type_fish_products",
      value: 10,
      parameter: ['usd']
    },
    {
      label: "Meat products (not elsewhere specified)",
      apicode: "consumer_goods-type_meat_products_not_elsewhere_specified",
      value: 11,
      parameter: ['usd']
    },
    {
    label: "Electricity supplied from grid",
    apicode: "electricity-supply_grid-source_supplier_mix",
    value: 12,
    parameter: ['kWh']
    },
    {
    label: "Water supply",
    apicode: "water_supply-type_na",
    value: 13,
    parameter: ['liter']
    }
  ]

  const parameters = ['km', 'm', 'USD', 'kwH', 'l'];


const GoGreenDialog = () => {
    const [user, setUser] = useContext(UserContext);
    const [inputs, setInputs] = useState({
    username : "", 
    label: "",
    parameter : "", 
    category : "",
    subcategory: "",
    parameter_value: 0,
    date : ""
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
  
    // ADD new activity
    const handleSubmit = (e) => {
      e.preventDefault(); 
      inputs.username = user;
      inputs.subcategory = inputs.label;
      console.log('in add function inputs are: ', inputs);
      if (inputs.label < 6) {
        inputs.category = 'Transport';
      } else if (inputs.label < 5 && inputs.label > 12) {
        inputs.category = 'Food';
      } else {
        inputs.category = 'Utilities';
      }

      console.log('inputs after adding categories: ', inputs);

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
                 {categoryActivity.map((a) => { return (<MenuItem key={a} value={a.value}>{a.label}</MenuItem>);})}
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
                 {parameters.map((p) => { return (<MenuItem key={p} value={p}>{p}</MenuItem>);})}
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