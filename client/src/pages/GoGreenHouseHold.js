import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
} from "@mui/material";
import hh3 from "./household3.jpg";
import hh5 from "./household5.jpg";

function GoGreenHousehold() {
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
          HOUSEHOLD
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
          Transform Your Living Space into a Green Oasis: <br />
          Redefine Your Home Practices and Contribute to a Cleaner Planet! 
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
              src={hh3}
              alt="hh3"
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
            <CardActions sx={{paddingBottom: '50px'}}>
              <Button
                variant="outlined"
                size="medium"
                target="_blank"
                href="https://www.mass.gov/service-details/reduce-your-carbon-footprint-at-home"
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
            <CardActions sx={{paddingBottom: '50px'}}>
              <Button
                variant="outlined"
                size="medium"
                target="_blank"
                href="https://www.constellation.com/energy-101/energy-innovation/how-to-reduce-your-carbon-footprint.html#home"
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
              src={hh5}
              alt="hh5"
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

export default GoGreenHousehold;