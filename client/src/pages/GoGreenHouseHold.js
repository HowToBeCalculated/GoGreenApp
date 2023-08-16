import React from "react";
import footprint from "./footprint.jpg";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SanitizerOutlinedIcon from "@mui/icons-material/SanitizerOutlined";
import hh1 from "./household1.jpg";
import hh2 from "./household2.jpg";
import hh3 from "./household3.jpg";
import hh4 from "./household4.jpg";
import hh5 from "./household5.jpg";

function GoGreenHousehold() {
  return (
    <div>
      <Box position={"relative"} width="100%" height="35vh">
        <Typography
          variant="h3"
          fontWeight="bold"
          fontSize="50px"
          sx={{
            position: "absolute",
            top: "100px",
            left: "200px",
            lineHeight: "70px",
            color: "#404040",
          }}
        >
          HOUSEHOLD
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#404040"
          fontSize="16px"
          sx={{
            position: "absolute",
            top: "195px",
            left: "200px",
            lineHeight: "25px",
          }}
        >
          Transform Your Living Space into a Green Oasis: <br />
          Redefine Your Home Practices and Contribute to a Cleaner Planet! 
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        paddingBottom={"100px"}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="right"
          flex="0"
          maxHeight="800px"
          maxWidth={"1300px"}
          marginRight={"25px"}
        >
          <img
            src={hh3}
            alt="hh3"
            style={{
              maxHeight: "700px",
              width: "auto",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          />
        </Box>
        <Box flex="2" display="flex" justifyContent="left">
          <Card
            sx={{
              width: 400,
              height: 700,
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                marginTop="25px"
                marginLeft={"15px"}
                fontWeight={"bold"}
              >
                REDUCING YOUR CARBON FOOTPRINT AT HOME
              </Typography>

              <Divider
                sx={{
                  width: "20%",
                  marginTop: "30px",
                  marginLeft: "15px",
                  backgroundColor: "#55BDB3",
                  height: "2px",
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
                marginTop="40px"
                marginLeft={"15px"}
              >
                Simple things you can do at any time to reduce your personal and household emissions of carbon dioxide (CO2), the leading greenhouse gas contributor to climate change.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.mass.gov/service-details/reduce-your-carbon-footprint-at-home"
                sx={{ color: "#404040", marginTop: "10px", marginLeft: "20px" }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        paddingBottom={"150px"}
        paddingTop={"80px"}
      >
        <Box
          flex="2"
          display="flex"
          alignItems={"center"}
          justifyContent="right"
          maxHeight="800px"
          marginLeft={"25px"}
        >
          <Card
            sx={{
              width: 400,
              height: 700,
              backgroundColor: "#F5F5F5",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "right",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                marginTop="25px"
                marginLeft={"15px"}
                fontWeight={"bold"}
              >
                HOW TO REDUCE YOUR CARBON FOOTPRINT AT HOME
              </Typography>

              <Divider
                sx={{
                  width: "20%",
                  marginTop: "30px",
                  marginLeft: "15px",
                  backgroundColor: "#55BDB3",
                  height: "2px",
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
                marginTop="40px"
                marginLeft={"15px"}
              >
                Discover practical ways to reduce your carbon footprint within your household, from energy consumption to waste management.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.constellation.com/energy-101/energy-innovation/how-to-reduce-your-carbon-footprint.html#home"
                sx={{ color: "#404040", marginTop: "10px", marginLeft: "20px" }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box display="flex" justifyContent="left" flex="0" marginLeft={"25px"}>
          <img
            src={hh5}
            alt="hh"
            style={{
              maxHeight: "700px",
              maxWidth: "1300px",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default GoGreenHousehold;
