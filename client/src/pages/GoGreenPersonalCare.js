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
          PERSONAL CARE
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
          Elevate Your Self-Care Routine with an Eco-Conscious Twist: <br />
          Dive into Sustainable Practices and Make a Difference!
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
              src={pc4}
              alt="pc4"
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
            <CardActions sx={{paddingBottom: '50px'}}>
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
            <CardActions sx={{paddingBottom: '50px'}}>
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
              src={pc3}
              alt="pc3"
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



export default GoGreenPersonalCare;
