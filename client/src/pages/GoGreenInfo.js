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
      "Explore eco-friendly commuting options and gain insights into reducing your carbon footprint in transportation-related activities, contributing to a more sustainable future.",
  },
  {
    title: "Household",
    icon: <HomeOutlinedIcon />,
    link: "/household",
    description:
      "Explore eco-friendly practices for managing your household and find ways to minimize your carbon footprint in daily chores and energy usage.",
  },
  {
    title: "Food",
    icon: <FastfoodOutlinedIcon />,
    link: "/food",
    description:
      "Uncover sustainable food choices and strategies to reduce your carbon footprint in the kitchen through mindful eating habits and conscious food sourcing.",
  },
  {
    title: "Personal Care",
    icon: <SanitizerOutlinedIcon />,
    link: "/personalcare",
    description:
      "Learn about eco-conscious personal care routines and strategies to lower your carbon footprint in personal hygiene and wellness practices.",
  },
];

function GoGreenInfo() {
  return (
    <div>
      <Box
        position={"relative"}
        width="100%"
        height="70vh"
        backgroundColor= "#393e41"
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            overflow: "hidden",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={footprint}
            alt="footprint"
            width={"100%"}
          />
        </div>

        <Typography
          variant="h3"
          fontWeight="bold"
          fontFamily="Chalkboard"
          color="#258B81"
          fontSize="50px"
          sx={{
            position: "absolute",
            top: "100px",
            left: "40px",
            lineHeight: "70px",
          }}
        >
          CONFIDENT IN YOUR CARBON <br />
          FOOTPRINT KNOWLEDGE?
        </Typography>

        <Typography
          variant="h3"
          fontWeight="bold"
          color="#404040"
          fontSize="16px"
          sx={{
            position: "absolute",
            top: "295px",
            left: "40px",
          }}
        >
          Learn more about the impact of carbon footprints and test your
          knowledge through our interactive quiz!
        </Typography>

        <Button
          LinkComponent={Link}
          to="/practice"
          variant="contained"
          style={{
            position: "absolute",
            top: "350px",
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
          fontSize="35px"
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
        container spacing={0}
        justifyContent={"center"}
        backgroundColor="#393e41"
        sx={{ paddingBottom: "90px" }}
      >
        {cardContents.map((content, index) => (
          <Grid item xs={2.5} key={index}>
            <Link to={content.link} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                maxWidth: 300,
                backgroundColor: "#F5F5F5",
                marginTop: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                  >
                    {content.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GoGreenInfo;