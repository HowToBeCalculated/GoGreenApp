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
          FOOD
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
          Delve into Delicious Sustainability: <br />
          Nourish Yourself and the Planet through Thoughtful Food Choices!
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
            src={fd1}
            alt="fd1"
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
            <CardActions>
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
            <CardActions>
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
        </Box>

        <Box display="flex" justifyContent="left" flex="0" marginLeft={"25px"}>
          <img
            src={fd2}
            alt="fd2"
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

export default GoGreenFood;
