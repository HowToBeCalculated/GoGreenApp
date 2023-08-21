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
import pc1 from "./personalcare1.jpg";
import pc2 from "./personalcare2.jpg";
import pc3 from "./personalcare3.jpg";
import pc4 from "./personalcare4.jpg";

function GoGreenPersonalCare() {
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
          PERSONAL CARE
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
          Elevate Your Self-Care Routine with an Eco-Conscious Twist: <br />
          Dive into Sustainable Practices and Make a Difference!
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
            src={pc4}
            alt="pc1"
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
                5 EASY WAYS TO REDUCE THE CARBON FOOTPRINT OF YOUR BEAUTY HABITS
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
                Beauty products can have such a negative impact on the
                environment, choking landfills with trash and polluting our
                waterways. But, did you know that your carbon footprint can be
                reduced by just making a few tiny changes in your beauty habits?
                We’ll get there in a second, after shedding some light on the
                problem as a whole.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://wonther.com/blogs/news/5-easy-ways-to-reduce-the-carbon-footprint-of-your-beauty-habits"
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
          maxWidth={"1300px"}
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
                HOW DO NATURAL AND ORGANIC COSMETIC BRANDS REDUCE AND
                COUNTERBALANCE THEIR CARBON FOOTPRINT?
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
                At the end of 2019, the EU committed to achieve climate
                neutrality by 2050. Climate neutrality is an increasingly
                important aspect for conscious consumers that look for products
                with a low or zero carbon footprint. In order to make a product
                as climate neutral as possible, companies can choose different
                options: from using renewable energies for the production of
                their products to financing projects to ensure the reduction of
                energy poverty and to facilitate the access to resources in
                different regions of the world.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="outlined"
                size="medium"
                href="https://natrue.org/how-do-natural-and-organic-cosmetic-brands-reduce-and-counterbalance-their-carbon-footprint/"
                sx={{ color: "#404040", marginTop: "10px", marginLeft: "20px" }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box display="flex" justifyContent="left" flex="0" marginLeft={"25px"}>
          <img
            src={pc3}
            alt="pc1"
            style={{
              maxHeight: "700px",
              width: "auto",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "5px",
            }}
          />
        </Box>
      </Box>
    </div>
  );
}

export default GoGreenPersonalCare;