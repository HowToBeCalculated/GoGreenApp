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

const cardContents = [
  {
    title: "Transportation",
    icon: <DirectionsCarFilledOutlinedIcon />,
    link: "/transportation",
    description: 
      "Explore green commuting options and insights to cut your transportation carbon footprint, fostering a sustainable future.",
  },
  {
    title: "Household",
    icon: <HomeOutlinedIcon />,
    link: "/household",
    description:
    "Explore eco-friendly household management to minimize your daily chores' carbon footprint and energy usage.",
  },
  {
    title: "Food",
    icon: <FastfoodOutlinedIcon />,
    link: "/food",
    description:
      "Discover sustainable food choices and lower your kitchen's carbon footprint through mindful eating and conscious sourcing.",
  },
  {
    title: "Personal Care",
    icon: <SanitizerOutlinedIcon />,
    link: "/personalcare",
    description:
      "Explore eco-conscious personal care routines and reduce your carbon footprint in hygiene and wellness practices.",
  },
];

function GoGreenInfo() {

  return (
    <div>
      <Box
        position={"relative"}
        width="100%"
        height={{ xs: "50vh", sm: "80vh", md: "80vh", lg: "90vh" }}
        backgroundColor= "#393e41"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            overflow: "hidden",
            
          }}
        >
          <img
            src={footprint}
            alt="footprint"
            width={"100%"}
          />
        </div>

        <Box
          width="50%" 
          position="absolute"
          top="0px"
        >

        
        <Typography
          variant="h3"
          fontWeight="bold"
          fontFamily="Chalkboard"
          color="#258B81"
          fontSize={{ xs: "20px", sm: "25px", md: "35px", lg: "45px", xl: "50px" }}
          sx={{
            position: "absolute",
            top: { xs: "30px", sm: "50px", md: "60px", lg: "80px", xl: "90px" },
            left: "40px",
            lineHeight: {xs: "30px", sm: "40px", md: "50px", lg: "70px"},
          }}
        >
          CONFIDENT IN YOUR CARBON 
          FOOTPRINT KNOWLEDGE?
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#404040"
          fontSize={{ xs: "14px", sm: "15px", md: "16px", lg: "17px", xl: "18px" }}
          sx={{
            position: "absolute",
            top: { xs: "130px", sm: "175px", md: "230px", lg: "320px", xl: "300px" },
            left: "40px",
            whiteSpace: "pre-line",
            wordWrap: { xs: "break-word", sm: "normal" },
          }}
        >
          Learn more about the impact of carbon footprints and 
          test your knowledge through our interactive quiz!
        </Typography>
        </Box>

        <Button
          LinkComponent={Link}
          to="/practice"
          variant="contained"
          sx={{top: { xs: "210px", sm: "265px", md: "285px", lg: "385px", xl: "380px" }}}
          style={{
            position: "absolute",
            
            left: "40px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          TAKE THE QUIZ
        </Button>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#F5F5F5"
          fontSize={{ xs: "20px", sm: "25px", md: "30px", lg: "35px" }}
          backgroundColor="393e41"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItem: 'center',
            flexDirection: 'column',
            height: '30vh',
            textAlign: "center"
          }}
        >
          Explore how you can make a positive impact <br />
          on the environment
        </Typography>

      </Box>

      <Grid
        container spacing={2}
        justifyContent={"center"}
        alignItems={'center'}
        backgroundColor="#393e41"
        sx={{ paddingBottom: "90px", paddingLeft: "10px", paddingRight: "10px",
        
      }}
      >
        {cardContents.map((content, index) => (
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
            <Link to={content.link} style={{ textDecoration: "none" }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="left"
                height="100%"
                textAlign="center"
              >
            <Card
              sx={{
                maxWidth: 300,
                backgroundColor: "#F5F5F5",
                marginTop: "50px",
              }}
            >
              <CardActionArea sx={{ paddingBottom: "20px" }}>
                <CardContent>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: "#55BDB3",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                      marginLeft: "15px",
                      color: "white",
                    }}
                  >
                    {content.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    marginTop="25px"
                    marginLeft={"15px"}
                    sx={{ textAlign: 'left' }}
                  >
                    {content.title}
                  </Typography>

                  <Divider
                    sx={{
                      width: "20%",
                      marginTop: "10px",
                      marginLeft: "15px",
                      backgroundColor: "#55BDB3",
                      height: "2px",
                    }}
                  />

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    marginTop="20px"
                    marginLeft={"15px"}
                    sx={{ height: "80px", textAlign: "left"}}
                  >
                    {content.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GoGreenInfo;