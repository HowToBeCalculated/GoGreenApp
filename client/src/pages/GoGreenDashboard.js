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
import GoGreenSetGoal from '../components/GoGreenSetGoal.js';
import {all_months} from '../components/subcategories';

const flexFormat_menu = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'left' };
const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };

const columns = [
    { field: 'goal_id', 
      headerName: 'ID', 
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
      field: 'param_name',
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
      field: 'param_value',
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


// 21.25 is avg per month since 0.7/day and 255kg per year

// reusable element for the chart for each category
export const ChartComponent = ({inputData}) => {
  console.log('inputs: ', inputData)
  //console.log('inputs: ', inputData.name)
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
    <Typography>{inputData.name ? inputData.name : 'Not available'}</Typography>
    <GoGreenBarChart inputData={inputData}/>
  </Paper>
  </div>
  );

}



// could make the data grid so that we have an entry for each category exactly 
// i.e. so that there is no need to add another row
const GoGreenDashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  const [timeseriesData, setTimeseriesData] = useState([
    {"month" : '1', "value" : 0},
    {"month" : '2', "value" : 0},
    {"month" : '3', "value" : 0},
    {"month" : '4', "value" : 0},
    {"month" : '5', "value" : 0},
    {"month" : '6', "value" : 0},
    {"month" : '7', "value" : 0}
  ]);
  const [performanceData, setPerformanceData] = useState([
    {"name": "Transport", "actual": 0, "target":0},
    {"name": "Food", "actual": 0, "target":0},
    {"name": "Household", "actual": 0, "target":0},
    {"name": "Personal Care", "actual": 0, "target":0},
  ]);
  const [goalsData, setGoalsData] = useState([]);
  const [target, setTarget] = useState(0);
  const [user, setUser] = useContext(UserContext);
  // get date and current month
  const date = new Date(); 
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  //console.log('current user is: ', user);
  //console.log('current month is: ', month, ' and year ', year);

  //fetch data from the database
  useEffect(()=> {
    //fetch query
    fetch(`http://localhost:5000/allgoals?username=${user}&month=${month}&year=${year}`)
    .then(res => res.json())
    .then(resJson => {
      if (resJson.success === 'true') {
        setGoalsData(resJson['content']);
        setPerformanceData(resJson['performance']);
        setTimeseriesData(resJson['timeseries']);
        setTarget(resJson['overall_target']);
      }}
      )},[]);
    

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
            Monthly Goal Setting 
            </Typography>
            <GoGreenSetGoal/>
            <GoGreenDataGrid route={goalsData}  columns={columns}  />
        </Box>)}
        {isDashboard &&
        <Box height={400} width={600}>
            <Typography
                sx={{ color:"secondary", fontSize : '20px', marginBottom : '10px', marginTop : '20px', marginLeft : '20px'}}>
                Dashboard for {all_months[parseInt(month)-1]["name"]}
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Transport'} value={performanceData[0]['actual']} change={performanceData[0]['change']}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Household'} value={performanceData[1]['actual']} change={performanceData[1]['change']}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Food'} value={performanceData[2]['actual']} change={performanceData[2]['change']}/>
                </Grid>
                <Grid item xs={3} >
                    <OutlinedCard stat={'Personal Care'} value={performanceData[3]['actual']} change={performanceData[3]['change']}/>
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
            <Chart inputData={timeseriesData} target={target}/>
            </Paper>
            </Grid>
            <Grid item xs={6} >
              <ChartComponent inputData={performanceData[0]}/>
            </Grid>
            <Grid item xs={6} >
            <ChartComponent inputData={performanceData[1]}/>
            </Grid>
            <Grid item xs={6}>
              <ChartComponent inputData={performanceData[2]}/>
            </Grid>
            <Grid item xs={6}>
              <ChartComponent inputData={performanceData[3]}/>
            </Grid>
            </Grid>
        </Box>}
    </Container>
  )
}

export default GoGreenDashboard;