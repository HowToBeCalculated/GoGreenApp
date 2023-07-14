// TO DO IMPLEMENT DASHBOARD 
import React, {useState} from 'react';
import { Container, Typography, Box, Pagination, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Chart from '../components/GoGreenChart.js'
import OutlinedCard from '../components/GoGreenStatCard';
import {List, Collapse, ListItem, ListItemButton, ListItemIcon} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';


const flexFormat_menu = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' };
const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };

const columns = [
    { field: 'id', headerName: 'Item', headerAlign: 'center', align : 'center', width: 90 },
    {
      field: 'category',
      headerName: 'Category',
      headerAlign: 'center',
      fontWeight : 'bold',
      align : 'center',
      width: 115,
      editable: true,
    },
    {
        field: 'activity',
        headerName: 'Activity',
        headerAlign: 'center',
        align : 'center',
        fontWeight : 'bold',
        width: 115,
        editable: true,
    },
    {
      field: 'parameter',
      headerName: 'Parameter',
      headerAlign: 'center',
      align : 'center',
      fontWeight : 'bold',
      width: 115,
      editable: true,
    },
    {
      field: 'targetValue',
      headerName: 'Target',
      headerAlign: 'center',
      align : 'center',
      fontWeight : 'bold',
      type: 'number',
      width: 90,
      editable: true,
    }
  ];

const rows = [
    { id: 1, category: 'Transport', activity: 'Taxi', parameter: 'money', targetValue : 35 },
    { id: 2, category: 'Transport', activity: 'Car', parameter: 'money', targetValue : 35 },
    { id: 3, category: 'Transport', activity: 'Flight', parameter:'distance', targetValue : 35 },
    { id: 4, category: 'Food', activity: 'Meat', parameter: 'money', targetValue : 16 },
    { id: 5, category: 'Food', activity: 'Dairy', parameter: null },
    { id: 6, category: 'Transport', activity: 'Bus', parameter: 'money', targetValue : 150 },
    { id: 7, category: 'Household', activity: 'Electricity', parameter: 'money', targetValue : 44 },
    { id: 8, category: 'Household', activity: 'Water', parameter: 'money', targetValue : 36 },
    { id: 9, category: 'Transport', activity: 'Train', parameter: 'money', targetValue : 65 },
  ];

// could make the data grid so that we have an entry for each category exactly 
// i.e. so that there is no need to add another row
const GoGreenDashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  return (
    <Container style={flexFormat}>
        <Box sx={{ width: '100%', maxWidth: 200, bgcolor: "secondary" }}>
        <nav aria-label={<GridViewRoundedIcon />}>
        <List>
            <ListItem disablePadding>
            <ListItemButton onClick={()=>setIsDashboard(true)}>
                <ListItemIcon>
                    <GridViewRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton onClick={()=>setIsDashboard(false)}>
                <ListItemIcon>
                    <InboxRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Set goals"/>
            </ListItemButton>
            </ListItem>
        </List>
        </nav>
        </Box>
        {!isDashboard && (<Box height={400} width={600}>
            <Typography 
            sx={{ color:"secondary", fontSize : '20px', marginBottom : '10px', marginTop : '20px', marginLeft : '20px'}}> 
            Goal Setting 
            </Typography>
            <DataGrid 
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            columns={columns} 
            rows={rows} 
            checkboxSelection/>
        </Box>)}
        {isDashboard &&
        <Box height={400} width={600}>
            <Typography
                sx={{ color:"secondary", fontSize : '20px', marginBottom : '10px', marginTop : '20px', marginLeft : '20px'}}>
                Dashboard
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Transport'} value={721000} change={11.01}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Food'} value={367000} change={9.15}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Household'} value={1156} change={-0.56}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Personal Care'} value={239000} change={-1.48}/>
                </Grid>
            </Grid>
            <Chart/>
        </Box>}
    </Container>
  )
}

export default GoGreenDashboard;