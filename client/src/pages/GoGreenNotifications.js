// TO DO IMPLEMENT PROFILE
import React from "react";
import { Container, Typography, Box, Pagination, Grid } from "@mui/material";
//import { IconDashboard } from '@tabler/icons';
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "../components/GoGreenProfileSidebar";
import GoGreenUserNotifications from "../components/GoGreenUserNotifications";
import GoGreenFriends from "../components/GoGreenFriends";
import GoGreenGroups from "../components/GoGreenGroups";
import GoGreenAppBar from "../components/GoGreenAppBar";

//const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };
const GoGreenNotifications = () => {
  return (

    <Grid container spacing={0}>
      <Grid  sx={{width: "30%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "row"}}>
        <GoGreenProfileSidebar />
      </Grid>
      <Grid  sx={{width: "69%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "row"}}>
        <GoGreenUserNotifications />
      </Grid>
      {/* <Grid  sx={{width: "25%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "column"}}>
        <GoGreenFriends />
        <GoGreenGroups />
      </Grid> */}
      
    </Grid>


  );
};

export default GoGreenNotifications;


