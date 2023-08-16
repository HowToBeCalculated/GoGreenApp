import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const friendsData = [
  {
    id: 1,
    name: "Friend 1",
    avatar: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id: 2,
    name: "Friend 2",
    avatar: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  },
  {
    id: 3,
    name: "Friend 3",
    avatar: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  },
  {
    id: 4,
    name: "Friend 4",
    avatar: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  },
  {
    id: 5,
    name: "Friend 5",
    avatar: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    id: 6,
    name: "Friend 6",
    avatar: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  },
  {
    id: 7,
    name: "Friend 7",
    avatar: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  },
  {
    id: 8,
    name: "Friend 8",
    avatar: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  },
];

const GoGreenFriends = () => {

  


  const [showAllFriends, setShowAllFriends] = useState(false);

  const handleViewAllClick = () => {
    setShowAllFriends(!showAllFriends);
  };

  const displayedFriends = showAllFriends
    ? friendsData
    : friendsData.slice(0, 6);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "0px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        marginLeft: "20px",
        marginRight: "40px",
        marginTop: "40px",
        width: "100%",
      }}
    >
      <Typography fontSize="15px" fontWeight="bold" marginBottom="20px" paddingLeft="40px" paddingTop="40px">
        Friends &#40;{friendsData.length}&#41;
      </Typography>

      <ImageList cols={4} gap={5}  >
        {displayedFriends.map((friend) => (
          <ImageListItem
            key={friend.id}
            sx={{ display: "flex", alignItems: "center", marginTop: "10px", marginLeft: "5px", marginRight: "0px"}}
          >
            <Avatar alt={friend.name} src={friend.avatar} />
            <Typography sx={{ marginLeft: "10px", fontSize: "15px" }}>
              {friend.name}
            </Typography>
          </ImageListItem>
        ))}
      </ImageList>

      {friendsData.length > 6 && (
        <Box sx={{ textAlign: "center", marginTop: "10px" }}>
          <IconButton onClick={handleViewAllClick}>
            <ExpandMoreIcon
              style={{
                transform: showAllFriends ? "rotate(-180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default GoGreenFriends;
