import {
    Box,
    IconButton,
    Typography,
    createTheme,
    useTheme,
    Avatar,
    ListItemButton,
    ListItemIcon,
    List,
    ListItem,
    ListItemText,
    Divider,
    Tabs,
    Tab,
  } from "@mui/material";
  import { useContext } from "react";
  import InputBase from "@mui/material/InputBase";
  import { useState } from "react";
  import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
  import "react-pro-sidebar/dist/css/styles.css";
  import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
  import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
  import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
  import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
  import userprofile from "../pages/user.png";
  import { Link, NavLink } from "react-router-dom";
  
  const data = [
    { icon: <PersonOutlineRoundedIcon />, label: "Profile" },
    { icon: <HistoryRoundedIcon />, label: "ActivityLog" },
  ];
  
  const array = ["Profile", "ActivityLog"];
  const GoGreenProfileSidebar = ( {name}) => {

    return (
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "0px",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          marginLeft: "50px",
          marginRight: "20px",
          marginTop: "40px",
          paddingBottom: "40px",
          width: "100%",
          textDecoration: "none",
  
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" marginTop="40px">
          <Box
            width="100px"
            height="100px"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
              marginTop: '30px'
            }}
          >
            <img
              alt="profile-user"
              width="100px"
              height="100px"
              src={userprofile}
              style={{ cursor: "pointer", borderRadius: "50%"}}
            />
          </Box>
        </Box>
  
        <Box textAlign="center">
          <Typography
            variant="h6"
            color="secondary"
            fontWeight="bold"
            sx={{ m: "20px 0 0 0" }}
          >
            {name}
          </Typography>
        </Box>
  
        <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
  
        {data.map((item) => (
          <NavLink
            key={item.label}
            to={`/${item.label}`}
            activeClassName="Mui-selected"
            style={{ textDecoration: 'none' }}
            
            sx={{
              py: 0,
              minHeight: 50,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#202020", 
              fontWeight: "bold", 
              "&:hover": {
                color: "grey", 
                textDecoration: "none",
              },
              "&.Mui-selected": {
                fontWeight: "bold", 
                textDecoration: "none", 
                
              },
            }}
          >
            <ListItemButton
              sx={{
                color: "#202020",
                marginLeft: "20px",
                padding: "10px",
              
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                  marginLeft: "10px",
                  padding: "0px",
                  
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: 14,
                  margin: "0px",
                  padding: "0px",
                  color: "inherit",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              />
            </ListItemButton>
          </NavLink>
        ))}
      </Box>
    );
  };
  
  export default GoGreenProfileSidebar;
  
  