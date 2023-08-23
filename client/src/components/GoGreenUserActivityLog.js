import {React, useState, useEffect, useContext} from "react";
import {
  Container,
  Typography,
  Box,
  Pagination,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import UserContext from "../pages/user-context";

//activity item
function ActivityItem({activity}) {
    console.log('received: ', activity);
    return (
        <>
          <ListItem key={activity.activity_id}sx={{ margin: '10px 0 0 0', paddingBottom: '0px', paddingLeft: "40px"}}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={activity.activity}
              secondary={activity.activity_date}
              primaryTypographyProps={{
                fontSize: 15,
              }}
            />
            {activity.points}
          </ListItem>
          </>
        
        );
}

const GoGreenUserActivityLog = ({activities}) => {
  console.log('we have received the following information: ', activities);


  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        marginTop: "40px",
        marginRight: "20px",
        marginLeft: "20px",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "13px", padding:"40px" }}>Home &gt; Profile &gt; Activity Log</Typography>
      <Typography variant="h6" marginTop="0px" fontWeight="bold" paddingLeft="40px">
        Activity Log
      </Typography>

      <Grid item xs={12} md={12} lg={12} xl={12}>
        <List>
        {activities.map((activity) => {
         return (<>
          <ListItem key={activity.activity_id}sx={{ margin: '10px 0 0 0', paddingBottom: '0px', paddingLeft: "40px"}}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary={activity.activity}
              secondary={activity.activity_date}
              primaryTypographyProps={{
                fontSize: 15,
              }}
            />
            + {activity.points} Points
          </ListItem>
          </>);
      })}
      </List>
      </Grid>
    </Box>
  );
};

export default GoGreenUserActivityLog;