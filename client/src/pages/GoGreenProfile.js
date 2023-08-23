// TO DO IMPLEMENT PROFILE
import {React, useState, useEffect, useContext} from "react";
import { Container, Typography, Box, Pagination, Grid } from "@mui/material";
//import { IconDashboard } from '@tabler/icons';
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "../components/GoGreenProfileSidebar";
import GoGreenUserProfileDetails from "../components/GoGreenUserProfileDetails";
import UserContext from "./user-context";
import { useNavigate } from 'react-router-dom';

//const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };
const GoGreenProfile = () => {

  const [userInfo, setUserInfo] = useState({});
  const [points, setPoints] = useState(0);
  const [user, setUser] = useContext(UserContext);
  let navigate = useNavigate();

  //retrieve the activity log for the currently logged in user 
  useEffect(()=> {
    if (user === null){
      window.alert('Please make sure the user is logged in.');
      let path = '/'
      navigate(path);
    } else {
    fetch(`http://localhost:5000/profile?username=${user}`)
    .then(res => res.json())
    .then(resJson => {
      if (resJson.success === 'true') {
        // set vars that we need
        setPoints(resJson['Points']);
        setUserInfo(resJson['Info']);
      }}
      )}},[userInfo]);


  return (
    <Grid container spacing={7}>
      <Grid item xs={11} md={3} lg={3} xl={3}>
        <GoGreenProfileSidebar name={userInfo.fullname ? userInfo.fullname: userInfo.username} />
      </Grid>
      <Grid item xs={11.5} md={8.5} lg={8.5} xl={8.5}>
        <GoGreenUserProfileDetails info={userInfo} points={points}/>
      </Grid>
    </Grid>
  );
};

export default GoGreenProfile;