import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import UserContext from "../pages/user-context";

const GoGreenUserProfileDetails = ({ info, points }) => {
  console.log('info received: ', info);
  const [inputs, setInputs] = useState({
    username: info.username,
    name: info.fullname,
    email: info.email,
    gender: info.gender,
    birthday: info.birthday});
  const [isEditing, setIsEditing] = useState(false);
  const [isStatusEditing, setIsStatusEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleStatusEditClick = () => {
    setIsStatusEditing(true);
  };


  // send updates to the DB
  const updateInfo = (header) => {
    console.log('header we are passing is: ', header);
    fetch(`http://localhost:5000/updateinfo`, header)
    .then(data => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
    }).then(update => {
        console.log('update logged: ', update.success);
        if (update.success !== 'true') {
            window.alert('There was an issue updating user information');
            console.log('Error updating user information.');
        }})
    .catch(e => {
      console.log(e);
    });

  }

  //trigger DB update through save click
  const handleSaveClick = () => {
    setIsEditing(false);
    setIsStatusEditing(false);
    console.log('at this point inputs are: ', inputs);
    // update the DB with the current input values
    //format for what we post
    inputs.username = info.username
    const header = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
        };
    updateInfo(header);
  };

  const handleInputChange = (e, field) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
    console.log('detected an update - new values should be: ', inputs);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        paddingBottom: "40px",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        marginTop: "40px",
        marginRight: "20px",
        marginLeft: "20px",
        width: "100%",
      }}
    >
      <Typography
        sx={{ fontSize: "13px", paddingTop: "40px", paddingLeft: "40px" }}
      >
        Home &gt; Profile{" "}
      </Typography>
      <Typography sx={{fontFamily: 'Poppins', fontSize: '20px', ml: 3, mt: 3}}>Current points: {points}</Typography>
      

      {isEditing ? (
        <form onSubmit={handleSaveClick}>
          <Box
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              width: "90%",
              marginLeft: "35px",
            }}
          >
            <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
            <TextField
              name="name"
              defaultValue={info.fullname}
              value={inputs.name}
              onChange={(e) => handleInputChange(e, "name")}
              fullWidth
              variant="outlined"
            />
            <IconButton type="submit" sx={{ color: "#258B81" }}>
              <CheckIcon />
            </IconButton>
            </Typography>
          </Box>
        </form>
      ) : (
        <Box
          sx={{
            
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "35px",
            borderRadius: "8px",
            width: "90%",
            marginLeft: "40px",
          }}
        >
          <Typography
            variant="h6"
            marginTop="20px"
            fontWeight="bold"
            paddingLeft="0px"
            sx={{ flexGrow: 1 }}
          >
            {info.fullname}
          </Typography>
          <IconButton onClick={() => setIsEditing(true)}>
            <EditIcon />
          </IconButton>
        </Box>
      )}

      <Box sx={{ mt: "20px" }}>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "40px",
            marginRight: "85px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {isEditing ? (
            <TextField
              name="email"
              defaultValue={info.email}
              value={inputs.email}
              onChange={(e) => handleInputChange(e, "email")}
              fullWidth
              variant="outlined"
            />
          ) : (
            info.email
          )}
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "40px",
            marginRight: "85px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          {isEditing ? (
            <TextField
              name="gender"
              defaultValue={info.gender}
              value={inputs.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              fullWidth
              variant="outlined"
            />
          ) : (
            info.gender
          )}
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "40px",
            marginRight: "85px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Birthday:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {isEditing ? (
            <TextField
              name="birthday"
              type="date"
              defaultValue={info.birthday}
              value={inputs.birthday}
              onChange={(e) => handleInputChange(e, "birthday")}
              fullWidth
              variant="outlined"
            />
          ) : (
            info.birthday
          )}
        </Typography>
      </Box>
    </Box>
  );
};



export default GoGreenUserProfileDetails;