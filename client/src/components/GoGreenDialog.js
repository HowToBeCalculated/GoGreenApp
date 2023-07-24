import React, {useState} from 'react';
import {Button, Select, MenuItem, InputLabel, FormControl, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';

const buttonStyle =  {transform: 'translateX(-50%)', color : "#FFFFFF", fontFamily : "Poppins"};

//to remove?
const categoryActivity = [
    {
      label: "Domestic Flight",
      value: 1,
      parameter: ['km', 'm']
    },
    {
      label: "International Flight",
      value: 2,
      parameter: ['km', 'm']
    },
    {
      label: "Car",
      value: 3,
      parameter: ['km', 'm']
    },
    {
    label: "Electricy",
    value: 3,
    parameter: ['kWh']
    },
    {
    label: "Meat",
    value: 3,
    parameter: ['USD']
    }
  ]

  const parameters = ['km', 'm', 'USD', 'kwH', 'l'];


const GoGreenDialog = () => {
    let item;
    let parameter;

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange= (e) => {
        e.preventDefault();
    }

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
                    value={item}
                    label="Activity"
                    onChange={handleChange}
                >
                 {categoryActivity.map((a) => { return (<MenuItem value={a.value}>{a.label}</MenuItem>);})}
                </Select>
                </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            type="date"
            fullWidth
            variant="outlined"
          />
          <FormControl fullWidth>
                <InputLabel id="activity-input-2">Parameter</InputLabel>
                <Select
                    id="parameter"
                    value={parameter}
                    label="Parameter"
                    onChange={handleChange}
                >
                 {parameters.map((p) => { return (<MenuItem value={p}>{p}</MenuItem>);})}
                </Select>
                </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="parameter_value"
            label="Parameter Value"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button sx={buttonStyle} variant="contained" onClick={handleClose}>Cancel</Button>
          <Button sx={buttonStyle} variant="contained" onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GoGreenDialog