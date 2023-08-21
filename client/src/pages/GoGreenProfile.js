// TO DO IMPLEMENT PROFILE
import React from "react";
import { Container, Typography, Box, Pagination, Grid } from "@mui/material";
//import { IconDashboard } from '@tabler/icons';
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "../components/GoGreenProfileSidebar";
import GoGreenUserProfileDetails from "../components/GoGreenUserProfileDetails";
import GoGreenFriends from "../components/GoGreenFriends";
import GoGreenGroups from "../components/GoGreenGroups";

//const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };
const GoGreenProfile = () => {
  return (


    // <GoGreenAppBar />



    <Grid container spacing={0}>
      <Grid  sx={{width: "20%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "row"}}>
        <GoGreenProfileSidebar />
      </Grid>
      <Grid  sx={{width: "50%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "row"}}>
        <GoGreenUserProfileDetails/>
      </Grid>
      <Grid  sx={{width: "25%", height: "50%", margin: 0, padding: 0, display: "flex", flexDirection: "column"}}>
        <GoGreenFriends />
        <GoGreenGroups />
      </Grid>
    </Grid>

// sx={{background: 'yellow'}} sx={{background: 'brown'}}



    // <Box
    //   sx={{
    //     display: 'flex',
    //     maxWidth: '100%',
    //     gap: '50px',
      
    //   }}
    // >
    //   <GoGreenProfileSidebar />
    //   <GoGreenUserSettings selectedItem="Profile" />
    //   <GoGreenFriends />
    // </Box>
  );
};

export default GoGreenProfile;