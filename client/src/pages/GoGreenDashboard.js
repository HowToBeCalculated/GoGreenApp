// TO DO IMPLEMENT DASHBOARD 
import React, {useState, useParams, useEffect, useContext} from 'react';
import { Container, Typography, Box, Pagination, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Chart from '../components/GoGreenChart.js'
import OutlinedCard from '../components/GoGreenStatCard';
import {List, Collapse, ListItem, ListItemButton, ListItemIcon, Paper} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import GoGreenBarChart from '../components/GoGreenBarChart';
import UserContext from './user-context.js';
import GoGreenDataGrid from '../components/GoGreenDataGrid.js';

const flexFormat_menu = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' };
const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };

const columns = [
    { field: 'id', 
      headerName: 'Item', 
      headerAlign: 'center', 
      align : 'center', 
      flex: 0.5,
      headerClassName: 'header-styling',
      align: 'center' 
    },
    {
      field: 'category',
      headerName: 'Category',
      headerAlign: 'center',
      fontWeight : 'bold',
      align : 'center',
      flex: 1,
      headerClassName: 'header-styling',
      align: 'center', 
      editable: true,
    },
    {
        field: 'subcategory',
        headerName: 'Subcategory',
        headerAlign: 'center',
        align : 'center',
        fontWeight : 'bold',
        flex: 2,
        headerClassName: 'header-styling',
        align: 'center', 
        editable: true,
    },
    {
      field: 'parameter',
      headerName: 'Parameter',
      headerAlign: 'center',
      align : 'center',
      fontWeight : 'bold',
      flex: 1,
      headerClassName: 'header-styling',
      align: 'center', 
      editable: true,
    },
    {
      field: 'targetValue',
      headerName: 'Target',
      headerAlign: 'center',
      align : 'center',
      fontWeight : 'bold',
      type: 'number',
      flex: 1,
      headerClassName: 'header-styling',
      align: 'center', 
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

  // 21.25 is avg per month since 0.7/day and 255kg per year
const data = [
  {
    "name": "January",
    "actual": 30,
    "target": 25,
    "avg": 22.25
  },
  {
    "name": "Feburary",
    "actual": 28,
    "target": 24,
    "avg": 22.25
  },
  {
    "name": "March",
    "actual": 25,
    "target": 22,
    "avg": 22.25
  },
  {
    "name": "April",
    "actual": 30,
    "target": 19,
    "avg": 22.25
  },
  {
    "name": "May",
    "actual": 24,
    "target": 18,
    "avg": 22.25
  },
  {
    "name": "June",
    "actual": 20,
    "target": 22,
    "avg": 22.25
  },
  {
    "name": "July",
    "actual": 23,
    "target": 19,
    "avg": 22.25
  }
]



// reusable element for the chart for each category
export const ChartComponent = () => {

  return(
    <div>
    <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: 240,
    }}
    >
    <Typography>Insert Header</Typography>
    <GoGreenBarChart/>
  </Paper>
  </div>
  );

}



// could make the data grid so that we have an entry for each category exactly 
// i.e. so that there is no need to add another row
const GoGreenDashboard = () => {
  //const { user_id } = useParams();
  const [isDashboard, setIsDashboard] = useState(true);
  const [dashboardData, setDashboardData] = useState([]);
  const user = useContext(UserContext);
  console.log('current user is: ', user);

  //fetch data from the database
  useEffect(() => {
    // insert fetch query for the database - for now we set to manual data 
    setDashboardData(rows);
  });

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
            <GoGreenDataGrid route={dashboardData}  columns={columns}  />
            {/* <DataGrid 
            initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            columns={columns} 
            rows={dashboardData} 
            checkboxSelection/> */}
        </Box>)}
        {isDashboard &&
        <Box height={400} width={600}>
            <Typography
                sx={{ color:"secondary", fontSize : '20px', marginBottom : '10px', marginTop : '20px', marginLeft : '20px'}}>
                Dashboard
            </Typography>
            <Grid container spacing={4}>
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
            <Grid item xs={12} >
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
            <Chart/>
            </Paper>
            </Grid>
            <Grid item xs={6} >
              <ChartComponent/>
            </Grid>
            <Grid item xs={6} >
            <ChartComponent/>
            </Grid>
            <Grid item xs={6}>
              <ChartComponent/>
            </Grid>
            <Grid item xs={6}>
              <ChartComponent/>
            </Grid>
            </Grid>
        </Box>}
    </Container>
  )
}

export default GoGreenDashboard;