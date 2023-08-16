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
import tp1 from "./transport1.jpg";
import tp2 from "./transport2.jpg";

function GoGreenTransportation() {
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
          TRANSPORTATION
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
          Unlock a Greener Commute: <br />
          Transform Your Transportation Habits and Lead the Way to a Sustainable
          Future!
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
            src={tp1}
            alt="tp1"
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
                REDUCING YOUR TRANSPORTATION FOOTPRINT
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
                Transportation is now the largest source of carbon emissions in
                the United States. In many U.S. cities and towns, the personal
                automobile is the single greatest polluter because emissions
                from millions of vehicles on the road add up. To reduce
                greenhouse gas emissions, individuals can use cleaner modes of
                transportation to get around, from public transit to biking and
                walking.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.c2es.org/content/reducing-your-transportation-footprint/"
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
                6 TRANSPORTATION TIPS TO HELP YOU CUT YOUR CARBON FOOTPRINT
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
                Humans have to radically reduce greenhouse gas emissions to
                avoid catastrophic environmental consequences. As a result, many
                environmental advocates and scientists are calling for less
                global travel overall, at least until varieties that don’t harm
                the planet can be widely deployed.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.globalcitizen.org/en/content/carbon-footprint-transportation-tips/"
                sx={{ color: "#404040", marginTop: "10px", marginLeft: "20px" }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box display="flex" justifyContent="left" flex="0" marginLeft={"25px"}>
          <img
            src={tp2}
            alt="pc1"
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

export default GoGreenTransportation;
