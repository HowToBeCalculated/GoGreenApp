import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

const GoGreenUserProfileDetails = ({ selectedItem }) => {
  const initialData = {
    name: "Dante Lucca",
    status: "",
    email: "dante@example.com",
    gender: "Male",
    birthday: "dd/mm/yyyy",
  };

  const [inputs, setInputs] = useState({ ...initialData });
  const [isEditing, setIsEditing] = useState(false);
  const [isStatusEditing, setIsStatusEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleStatusEditClick = () => {
    setIsStatusEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setIsStatusEditing(false);
  };

  const handleInputChange = (e, field) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
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

      {isStatusEditing ? (
        <form onSubmit={handleSaveClick}>
          <Box
            sx={{
              padding: "8px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              border: "1px solid #E0E0E0", // Add border
              borderRadius: "8px",
              width: "90%",
              marginLeft: "40px",
            }}
          >
            <TextField
              name="status"
              value={inputs.status}
              onChange={handleStatusEditClick}
              type="text"
              sx={{ flexGrow: 1, marginRight: "8px" }}
              placeholder="Status ..."
              variant="outlined"
            />
            <IconButton type="submit" sx={{ color: "#258B81" }}>
              <CheckIcon />
            </IconButton>
          </Box>
        </form>
      ) : (
        <Box
          sx={{
            border: "1px solid #E0E0E0",
            backgroundColor: "#F5F5F5",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "35px",
            borderRadius: "8px",
            width: "90%",
            marginLeft: "40px",
          }}
        >
          <Typography sx={{ fontSize: "15px", flexGrow: 1 }}>
            {inputs.status || "How do you feel today?"}
          </Typography>
          <IconButton onClick={() => setIsStatusEditing(true)}>
            <EditIcon />
          </IconButton>
        </Box>
      )}


      








{/* {isEditing ? (
        <form onSubmit={handleSaveClick}>
          <Box
            sx={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              width:"100%",
              marginLeft: "40px",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                marginTop: "10px",
                marginLeft: "0px",
                marginRight: "85px",
                
              }}
            >
              <span style={{ fontWeight: "bold" }}>Name:</span>
              <TextField
                name="name"
                value={inputs.name}
                onChange={(e) => handleInputChange(e, "name")}
              
                fullWidth="100%"
                variant="outlined"
                sx={{ marginLeft: "0px" ,  flexGrow: 1, marginRight: "00px" }}
              />
            </Typography>
            <IconButton type="submit" sx={{ color: "#258B81" }}>
              <CheckIcon />
            </IconButton>
          </Box>
        </form>
      ) : (
        <Box
          sx={{
            padding: "8px",
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
            {inputs.name}
          </Typography>
          <IconButton onClick={() => setIsEditing(true)}>
            <EditIcon />
          </IconButton>
        </Box>
      )} */}

{/* 
Whole box for all 4 fields
{isEditing ? (
        <form onSubmit={handleSaveClick}>
          <Box
            sx={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              width:"100%",
              marginLeft: "40px",
            }}
          >



      <Box sx={{ mt: "20px" }}>
      <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "40px",
            marginRight: "85px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Name:</span>
          {isEditing ? (
            <TextField
              name="name"
              value={inputs.name}
              onChange={(e) => handleInputChange(e, "name")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.name
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
          <span style={{ fontWeight: "bold" }}>Email:</span>
          {isEditing ? (
            <TextField
              name="email"
              value={inputs.email}
              onChange={(e) => handleInputChange(e, "email")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.email
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
          <span style={{ fontWeight: "bold" }}>Gender:</span>
          {isEditing ? (
            <TextField
              name="gender"
              value={inputs.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.gender
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
          <span style={{ fontWeight: "bold" }}>Birthday:</span>
          {isEditing ? (
            <TextField
              name="birthday"
              value={inputs.birthday}
              onChange={(e) => handleInputChange(e, "birthday")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.birthday
          )}
        </Typography>
      </Box>

      <IconButton type="submit" sx={{ color: "#258B81" }}>
              <CheckIcon />
            </IconButton>
          </Box>
        </form>
      ) : (

        <Box sx={{ mt: "20px" }}>
      <Typography
          sx={{
            fontSize: "15px",
            marginTop: "10px",
            marginLeft: "40px",
            marginRight: "85px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Name:</span>
          {isEditing ? (
            <TextField
              name="name"
              value={inputs.name}
              onChange={(e) => handleInputChange(e, "name")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.name
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
          <span style={{ fontWeight: "bold" }}>Email:</span>
          {isEditing ? (
            <TextField
              name="email"
              value={inputs.email}
              onChange={(e) => handleInputChange(e, "email")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.email
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
          <span style={{ fontWeight: "bold" }}>Gender:</span>
          {isEditing ? (
            <TextField
              name="gender"
              value={inputs.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.gender
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
          <span style={{ fontWeight: "bold" }}>Birthday:</span>
          {isEditing ? (
            <TextField
              name="birthday"
              value={inputs.birthday}
              onChange={(e) => handleInputChange(e, "birthday")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.birthday
          )}
        </Typography>
        <IconButton onClick={() => setIsEditing(true) }>
            <EditIcon />
          </IconButton>
        </Box>
      )}
 Whole box for all 4 fields
 */}





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
            {inputs.name}
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
              value={inputs.email}
              onChange={(e) => handleInputChange(e, "email")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.email
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
              value={inputs.gender}
              onChange={(e) => handleInputChange(e, "gender")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.gender
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
              value={inputs.birthday}
              onChange={(e) => handleInputChange(e, "birthday")}
              fullWidth
              variant="outlined"
            />
          ) : (
            inputs.birthday
          )}
        </Typography>
      </Box>
    </Box>
  );
};

//   // const [inputs, setInputs] = useState({
//   //   name: "",
//   //   status: "",
//   //   email: "",
//   //   gender: "",
//   //   birthday: "",
//   // });

//   const initialInputs = {
//     name: "Dante Lucca",
//     status: "",
//     email: "dante@example.com",
//     gender: "Male",
//     birthday: "dd/mm/yyyy",
//   };

//   const [inputs, setInputs] = useState({ ...initialInputs });

//   const handleEditClick = () => {
//     setIsEditing(!isEditing);
//   };

//   const handleSaveClick = () => {
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const [isEditing, setIsEditing] = useState(false);

//   const handleChangeStatus = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     setIsEditing(false); //turn off editing mode
//   };
//   return (
//     <Box
//       sx={{
//         backgroundColor: "white",
//         borderRadius: "10px",
//         paddingBottom: "40px",
//         boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
//         marginTop: "40px",
//         marginRight: "20px",
//         marginLeft: "20px",
//         width: "100%",
//       }}
//     >
//       <Typography sx={{ fontSize: "13px", paddingTop:"40px", paddingLeft: "40px" }}>Home &gt; Profile </Typography>
//       <Typography variant="h6" marginTop="20px" fontWeight="bold" paddingLeft="40px">
//         Dante Lucca
//       </Typography>

//       {isEditing ? (
//   <form onSubmit={handleSubmit}>
//     <Box
//       sx={{
//         padding: "8px",
//         display: "flex",
//         alignItems: "center",
//         marginTop: "10px",
//         border: "1px solid #E0E0E0", // Add border
//         borderRadius: "8px",
//         width: "90%",
//         marginLeft:"40px"

//       }}
//     >
//       <TextField
//         name="status"
//         value={inputs.status}
//         onChange={handleChangeStatus}
//         type="text"
//         sx={{ flexGrow: 1, marginRight: "8px",  }}
//         placeholder="Status ..."
//         variant="outlined"
//       />
//       <IconButton type="submit" sx={{ color: "#258B81" }}>
//         <CheckIcon />
//       </IconButton>
//     </Box>
//   </form>
// ) : (
//   <Box
//     sx={{
//       border: "1px solid #E0E0E0",
//       backgroundColor: "#F5F5F5",
//       padding: "8px",
//       display: "flex",
//       alignItems: "center",
//       marginTop: "20px",
//       marginBottom: "35px",
//       borderRadius: "8px",
//       width: "90%",
//         marginLeft:"40px"
//     }}
//   >
//     <Typography sx={{ fontSize: "15px", flexGrow: 1 }}>
//       {inputs.status || "How do you feel today?"}
//     </Typography>
//     <IconButton onClick={() => setIsEditing(true)}>
//       <EditIcon />
//     </IconButton>
//   </Box>
// )}

// <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: "40px" }}>
//         {isEditing ? (
//           <Button variant="outlined" onClick={handleSaveClick}>
//             Save
//           </Button>
//         ) : (
//           <IconButton onClick={handleEditClick}>
//             <EditIcon />
//           </IconButton>
//         )}
//       </Box>

//       <Box sx={{ mt: "20px" }}>
//         <Typography sx={{ fontSize: "15px", marginTop: "10px", marginLeft: "40px" }}>
//         <span style={{ fontWeight: "semiBold" }}>Name:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dante Lucca
//         </Typography>
//         <Typography sx={{ fontSize: "15px", marginTop: "10px", marginLeft: "40px"  }}>
//         <span style={{ fontWeight: "semibold" }}>Email:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//           dante@example.com
//         </Typography>
//         <Typography sx={{ fontSize: "15px", marginTop: "10px", marginLeft: "40px"  }}>
//         <span style={{ fontWeight: "bold" }}>Gender:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Male
//         </Typography>
//         <Typography sx={{ fontSize: "15px", marginTop: "10px", marginLeft: "40px"  }}>
//         <span style={{ fontWeight: "bold" }}>Birthday:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; dd/mm/yyyy
//         </Typography>

//         <Typography
//         sx={{
//           fontSize: "15px",
//           marginTop: "10px",
//           marginLeft: "40px",
//           fontWeight: isEditing ? "600" : "normal",
//         }}
//       >
//         <span style={{ fontWeight: "semiBold" }}>Birthday:</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
//         {isEditing ? (
//           <TextField
//             name="birthday"
//             value={inputs.birthday}
//             onChange={handleChange}
//             variant="outlined"
//             fullWidth
//           />
//         ) : (
//           inputs.birthday
//         )}
//       </Typography>

//       </Box>
//     </Box>
//   );
// };

export default GoGreenUserProfileDetails;
