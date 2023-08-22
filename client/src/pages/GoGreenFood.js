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
import fd1 from "./food1.jpg";
import fd2 from "./food2.jpg";
import hh3 from "./household3.jpg";
import hh4 from "./household4.jpg";
import hh5 from "./household5.jpg";

function GoGreenFood() {
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
          FOOD
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
          Delve into Delicious Sustainability: <br />
          Nourish Yourself and the Planet through Thoughtful Food Choices!
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
              src={fd1}
              alt="fd1"
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
                9 NUTRITION TIPS FOR REDUCING YOUR CARBON FOOTPRINT
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
                Many people feel an urgent need to reduce their impact on the
                earth because of the catastrophic effects of climate change and
                resource extraction. One strategy is to lower your carbon
                footprint, which is a measure of your total greenhouse gas
                emissions not just from driving vehicles or using electricity
                but also lifestyle choices, such as the clothes you wear and
                food you eat. Although there are many ways to minimize your
                carbon footprint, making dietary changes is a good place to
                start.
              </Typography>
            </CardContent>
            <CardActions sx={{paddingBottom: '50px'}}>
              <Button
                variant="outlined"
                size="medium"
                href="https://www.healthline.com/nutrition/how-to-reduce-carbon-footprint"
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
                YOU WANT TO REDUCE THE CARBON FOOTPRINT OF YOUR FOOD? FOCUS ON WHAT YOU EAT, NOT WHETHER YOUR FOOD IS LOCAL
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
                ‘Eat local’ is a common recommendation to reduce the carbon footprint of your diet. But transport tends to account for a small share of greenhouse gas emissions. How does the impact of what you eat compare to where it’s come from?
              
              </Typography>
            </CardContent>
            <CardActions sx={{paddingBottom: '50px'}}>
              <Button
                variant="outlined"
                size="medium"
                href="https://ourworldindata.org/food-choice-vs-eating-local"
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
              src={fd2}
              alt="fd2"
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

export default GoGreenFood;
