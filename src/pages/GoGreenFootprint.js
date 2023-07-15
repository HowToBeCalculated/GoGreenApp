// TO DO IMPLEMENT FOOTPRINT
import React, {useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Typography, Grid, Paper, Container, TextField, Button } from '@mui/material';
import GoGreenDialog from '../components/GoGreenDialog.js';
import GoGreenPieChart from '../components/GoGreenPieChart';

//define the columns that we are using in the Datagrid 
const columns = [
  {field: 'id',
  headerName: 'ID',
  width: 90},
  {field: 'item',
  headerName: 'ITEM',
  width: 200},
  {field: 'date',
  headerName: 'DATE',
  width: 200},
  {field: 'parameter',
  headerName: 'PARAMETER',
  width: 200},
  {field: 'parameter_value',
  headerName: 'PARAMETER VALUE',
  width: 200},
  {field: 'emissions',
  headerName: 'EMISSIONS',
  width: 120}
]

const data = [{
  id: 1,
  item: 'Domestic Flight',
  date: '01/01/2023',
  parameter: 'km',
  parameter_value: 1050,
  emissions: '2000'
},
{
  id: 2,
  item: 'International Flight',
  date: '01/09/2023',
  parameter: 'km',
  parameter_value: 10300,
  emissions: '4500'
},
{
  id: 3,
  item: 'Electricity',
  date: '05/02/2023',
  parameter: 'kWh',
  parameter_value: 300,
  emissions: '150'
}]

const styled = {mt: 5, color: '#55BDB3', fontFamily : "Poppins", ':hover': {color:"primary"}}

const GoGreenFootprint = () => {
  const [footprintData, setFootprintData] = useState([]);

  // fetch data from DB 
  useEffect(()=> {
    //fetch query
    setFootprintData(data);
  },[]);

  //define search functionality 
  const search = () => {
    console.log('search');
    //fetch filtered data from DB and display 
    //setFootprintData(filtered_data); 
  }
  
  
  return (
    <div>
    <Container sx={{mb: 10}}>
      <Typography variant='h4' sx={styled}>Data Entry</Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper sx={{padding: 3, height: 250, width: 300}}>
              <Typography variant='h7' sx={{fontFamily : "Poppins"}}>
                Your Carbon Footprint
              </Typography>
              <br/>
              <Typography sx={{fontSize: 50, color:'#55BDB3', fontFamily : "Poppins"}}>
                88.03 Kg
              </Typography>
            </Paper>
          </Grid >
          <Grid item xs={6}>
              <GoGreenPieChart/>
          </Grid>
        </Grid>
        <Box component="form" noValidate onSubmit={search}>
        <TextField 
          id="search" 
          label="Enter search term" 
          name="search"
          variant="standard"
          sx={{marginTop: 5}}/>
        <Button type='submit' variant="contained" style={{ left: '5%', transform: 'translateX(-50%)', marginTop: 50, color : "#FFFFFF", fontFamily : "Poppins"}}>
          Search
        </Button>
        <GoGreenDialog />
      </Box>
      <DataGrid 
      sx={{mt:2}}
      pageSize={10}
      pageSizeOptions={[5, 10]}
      columns={columns} 
      rows={footprintData}
      autoHeight />
      </Container>
      </div>
  );
}

export default GoGreenFootprint;