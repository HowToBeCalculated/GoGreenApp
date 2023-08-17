// TO DO IMPLEMENT FOOTPRINT
import React, {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid, Paper, Container, TextField, Button } from '@mui/material';
import GoGreenDialog from '../components/GoGreenDialog.js';
import GoGreenPieChart from '../components/GoGreenPieChart.js';
import GoGreenDataGrid from '../components/GoGreenDataGrid.js';
import UserContext from './user-context.js';

//define the columns that we are using in the Datagrid 
const columns = [
  {field: 'history_id',
  headerName: 'ID',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  flex: 0.5},
  {field: 'subcategory',
  headerName: 'Subcategory',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  flex: 3},
  {field: 'category',
  headerName: 'Category',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  flex: 2},
  {field: 'activity_date',
  headerName: 'DATE',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  flex: 2},
  {field: 'param_name',
  headerName: 'PARAMETER',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  flex: 2},
  {field: 'param_value',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  headerName: 'PARAMETER VALUE',
  flex: 2},
  {field: 'emission',
  headerAlign: 'center',
  headerClassName: 'header-styling',
  align: 'center',
  headerName: 'EMISSION',
  flex: 2}
]

const styled = {mt: 5, color: '#55BDB3', fontFamily : "Poppins", ':hover': {color:"primary"}}

const GoGreenFootprint = () => {
  const [footprintData, setFootprintData] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const [total, setTotal] = useState(0);
  const [breakdown, setBreakdown] = useState({});

  // fetch data from DB for current user
  useEffect(()=> {
    //fetch query
    fetch(`http://localhost:5000/allactivities?username=${user}`)
    .then(res => res.json())
    .then(resJson => {
      if (resJson.success === 'true') {
        setFootprintData(resJson['content']);
        setTotal(resJson['total']);
        setBreakdown(resJson['breakdown']);
      }}
      )},[footprintData]);

  
  return (
    <div>
    <Container sx={{mb: 10}}>
      <Typography variant='h4' sx={styled}>Data Entry</Typography>
        <Grid container spacing={3} sx={{mb: 3}}>
          <Grid item xs={3}>
            <Paper sx={{padding: 3, height: 250, width: 300}}>
              <Typography variant='h7' sx={{fontFamily : "Poppins"}}>
                Your Carbon Footprint
              </Typography>
              <br/>
              <Typography sx={{fontSize: 50, color:'#55BDB3', fontFamily : "Poppins"}}>
                {total} Kg
              </Typography>
            </Paper>
          </Grid >
          <Grid item xs={6}>
              <GoGreenPieChart breakdown={breakdown}/>
          </Grid>
        </Grid>
        <Box component="form" noValidate>
        <GoGreenDialog />
      </Box>
        <GoGreenDataGrid route={footprintData} columns={columns}/>
      </Container>
      </div>
  );
}

export default GoGreenFootprint;
