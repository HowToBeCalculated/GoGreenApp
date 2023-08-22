// TO DO IMPLEMENT PROFILE
import React from "react";
import { Container, Typography, Box, Pagination, Grid } from "@mui/material";
//import { IconDashboard } from '@tabler/icons';
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "../components/GoGreenProfileSidebar";
import GoGreenUserSettings from "../components/GoGreenUserSettings";
import GoGreenFriends from "../components/GoGreenFriends";
import GoGreenGroups from "../components/GoGreenGroups";
import GoGreenAppBar from "../components/GoGreenAppBar";

//const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };
const GoGreenSettings = () => {
  return (

    <Grid container spacing={7}>
      <Grid item xs={11} md={3} lg={3} xl={3}>
        <GoGreenProfileSidebar />
      </Grid>
      <Grid item xs={11.5} md={8.5} lg={8.5} xl={8.5}>
        <GoGreenUserSettings />
      </Grid>
      {/* <Grid  sx={{width: "25%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "column"}}>
        <GoGreenFriends />
        <GoGreenGroups />
      </Grid> */}
    </Grid>


  );
};

export default GoGreenSettings;


