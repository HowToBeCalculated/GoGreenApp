import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Typography,
  Grid,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";

const linksArray = [
  "home",
  "profile",
  "dashboard",
  "footprint",
  "practice",
  "community",
];
const friendsData = [
  {
    id: 1,
    name: "Friend 1",
    avatar: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
];

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#DCDCDC", // Change the divider color
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          color: "white", // Change the color of the scroll button
          "&.Mui-disabled": {
            color: "white", // Change the color of the disabled scroll button
          },
        },
      },
    },
  },
});

const GoGreenAppBar = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{position: "sticky"}}>
        <Toolbar>
          <Grid sx={{ placeItems: "center" }} container>
            <Grid
              item
              xs={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Rakkas",
                  color: "#258B81",
                  fontWeight: "bold",
                  fontSize: "24px",
                  lineHeight: "28px",
                  margin: "auto",
                }}
              >
                Go
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Rakkas",
                  color: "#258B81",
                  fontWeight: "bold",
                  fontSize: "24px",
                  lineHeight: "28px",
                  marginTop: "-10px",
                }}
              >
                Green
              </Typography>
            </Grid>
            <Grid item xs={0.25} />
            <Grid item xs={8.25}>
              <Tabs
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#DCDCDC", // Change the divider color
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  },
                }}
              >
                {linksArray.map((link) => (
                  <Tab 
                  key={link} 
                  label={link}
                  component={NavLink}
                  to={`/${link}`}
                  activeClassName="Mui-selected"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold"}} 
                     />
                ))}
                  
                {/*                 
                <Tab
                  label="Profile"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="Dashboard"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="Footprint"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="Practice"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                />
                <Tab
                  label="Community"
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                /> */}
              </Tabs>
            </Grid>
            <Grid item xs={0.5} />
            <Grid item xs={2}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{ marginLeft: "auto" }}
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                />
                <Typography
                  sx={{
                    marginLeft: "15px",
                    fontSize: "15px",
                    color: "#F5F5F5",
                    fontWeight: "bold",
                  }}
                >
                  Dante Lucca
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GoGreenAppBar;
