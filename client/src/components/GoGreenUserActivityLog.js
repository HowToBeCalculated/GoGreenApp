import React from "react";
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
//import { IconDashboard } from '@tabler/icons';
import "react-pro-sidebar/dist/css/styles.css";
import GoGreenProfileSidebar from "./GoGreenProfileSidebar";
import GoGreenUserSettings from "./GoGreenUserSettings";
import GoGreenFriends from "./GoGreenFriends";
import GoGreenAppBar from "./GoGreenAppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";

const GoGreenUserActivityLog = () => {
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
          <ListItem sx={{ margin: '10px 0 0 0', paddingBottom: '0px', paddingLeft: "40px"}}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary="You have updated your targets."
              secondary="Just now"
              primaryTypographyProps={{
                fontSize: 15,
              }}
            />
          </ListItem>

          <ListItem sx={{ margin: '0px 0 0 0' , paddingLeft: "40px"}}>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText
              primary="You have updated your password."
              secondary="2 hours ago"
              primaryTypographyProps={{
                fontSize: 15,
              }}
            />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
};

export default GoGreenUserActivityLog;
