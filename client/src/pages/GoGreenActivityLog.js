// TO DO IMPLEMENT PROFILE
import {React, useEffect, useContext, useState} from "react";
import { Container, Typography, Box, Pagination, Grid } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "../components/GoGreenProfileSidebar";
import GoGreenUserActivityLog from "../components/GoGreenUserActivityLog";
import UserContext from "./user-context";

const GoGreenActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useContext(UserContext);

  //retrieve the activity log for the currently logged in user 
  useEffect(()=> {
    fetch(`http://localhost:5000/profile?username=${user}`)
    .then(res => res.json())
    .then(resJson => {
      if (resJson.success === 'true') {
        // set vars that we need
        setActivities(resJson['Activities']);
        console.log('after update: ', activities)
      }}
      )},[]);
  
  return (
    <Grid container spacing={7}>
    
      <Grid item xs={11} md={3} lg={3} xl={3}>
        <GoGreenProfileSidebar />
        
      </Grid>

      
      <Grid item xs={11.5} md={8.5} lg={8.5} xl={8.5}>
        <GoGreenUserActivityLog activities={activities}/>
       
      </Grid>
    </Grid>


  );
};

export default GoGreenActivityLog;