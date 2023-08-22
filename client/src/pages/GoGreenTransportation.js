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
import tp1 from "./transport2.jpg";
import tp2 from "./transports3.jpg";

function GoGreenTransportation() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        justifyContent={"left"}
        alignItems={"left"}
        sx={{
          paddingBottom: "90px",
          paddingLeft: "10px",
          paddingRight: "10px",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          fontSize="50px"
          sx={{
            position: "relative",
            marginTop: "100px",
            marginLeft: "200px",
            lineHeight: "70px",
            color: "#404040",
          }}
        >
          TRANSPORTATION
        </Typography>

        <Typography
          fontWeight="bold"
          color="#404040"
          fontSize="16px"
          sx={{
            position: "relative",
            marginTop: "20px",
            marginLeft: "200px",
            lineHeight: "25px",
          }}
        >
          Unlock a Greener Commute: <br />
          Transform Your Transportation Habits and Lead the Way to a Sustainable
          Future!
        </Typography>
      </Grid>

          {/* first article */}
      <Grid
        container
        spacing={2}
        sx={{
          paddingBottom: "60px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={9}
          xl={9}
        >
          <div
            style={{
              maxHeight: "700px",
              overflow: "hidden",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
              display:"block",
              margin: 'auto'       
            }}
          >
            <img
              src={tp1}
              alt="tp1"
              style={{
                maxHeight: "700px",
                width: "auto",
                overflow: "hidden",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          xl={3}
          display="flex"
          justifyContent="left"
        >
          <Card
            height={{ xs: "50vh", sm: "80vh", md: "80vh", lg: "90vh" }}
            width={{ xs: "50vh", sm: "80vh", md: "80vh", lg: "90vh" }}
            sx={{
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
            <CardActions sx={{paddingBottom: '50px'}}>
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
        </Grid>
      </Grid>




          {/* second article */}
      <Grid
        container
        spacing={2}
        sx={{
          paddingBottom: "90px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={3}
          xl={3}
          display="flex"
          justifyContent="left"
        >
          <Card
            height={{ xs: "50vh", sm: "80vh", md: "80vh", lg: "90vh" }}
            width={{ xs: "50vh", sm: "80vh", md: "80vh", lg: "90vh" }}
            sx={{
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
            <CardActions sx={{paddingBottom: '50px'}}>
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
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={9}
          xl={9}
        >
          <div
            style={{
              maxHeight: "700px",
              overflow: "hidden",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
              display:"block",
              margin: 'auto'       
            }}
          >
            <img
              src={tp2}
              alt="tp2"
              style={{
                maxHeight: "700px",
                width: "auto",
                overflow: "hidden",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "5px",
              }}
            />
          </div>
        </Grid>
      </Grid>


    </div>
  );
}

export default GoGreenTransportation;
