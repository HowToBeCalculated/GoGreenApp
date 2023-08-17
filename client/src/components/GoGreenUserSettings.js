import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const GoGreenUserSettings = ({ selectedItem }) => {
  const [inputs, setInputs] = useState({
    currpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [showPasswordMismatchAlert, setShowPasswordMismatchAlert] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.newpassword !== inputs.confirmpassword) {
      setShowPasswordMismatchAlert(true);
      return;
    }

    setShowPasswordMismatchAlert(false);

    console.log(inputs);
  };

  const [open, setOpen] = useState(false);

  return (
    <Box
    sx={{
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "0px",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
      marginTop: "40px",
      marginRight: "20px",
      marginLeft: "20px",
      width: "100%",
    }}
    >
      <Typography sx={{ fontSize: "13px", padding:"40px" }}>Home &gt; Profile &gt; Settings</Typography>
      <Typography variant="h6" marginTop="0px" fontWeight="bold" paddingLeft="40px">
        Settings
      </Typography>

      <Typography
        fontSize="13px"
        marginTop="20px"
        marginBottom="20px"
        fontWeight="bold"
        paddingLeft="40px"
      >
        Change password
      </Typography>

      <form
        style={{ display: "flex", flexDirection: "column", paddingLeft:"40px", paddingRight: "40px"}}
        onSubmit={handleSubmit}
      >
        <TextField
          name="currpassword"
          value={inputs.currpassword}
          onChange={handleChange}
          type={"password"}
          placeholder="Enter current password"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          name="newpassword"
          value={inputs.newpassword}
          onChange={handleChange}
          type={"password"}
          placeholder="Enter new password"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "20px" }}
        />
        <TextField
          name="confirmpassword"
          value={inputs.confirmpassword}
          onChange={handleChange}
          type={"password"}
          placeholder="Re-enter new password"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "20px" }}
        />

        {/*check for password mismatch*/}
        {showPasswordMismatchAlert && (
          <Typography color="error" fontSize="13px" padding="0px" margin="0px">
            Passwords do not match.
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            padding: "6px 12px",
            width: "200px",
            marginTop: showPasswordMismatchAlert ? "5px" : "10px",
          }}
        >
          Update Password
        </Button>
      </form>

      <Box
        display="flex"
        alignItems="center"
        marginTop="15px"
        marginBottom="20px"
      >
        <Typography fontSize="13px" fontWeight="bold" paddingLeft="40px">
          Forgot password?
        </Typography>

        <Button
          variant="text"
          onClick={() => setOpen(true)}
          sx={{
            textTransform: "none",
            fontSize: "13px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Click here to recover
        </Button>
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle fontSize="18px" fontWeight="bold" marginBottom="15px">
          Forgot password
        </DialogTitle>
        <DialogContent>
          <DialogContentText fontSize="15px">
            Enter your email address associated with your account
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            fontSize="15px"
            size="small"
            InputLabelProps={{
              sx: { fontSize: 13 },
            }}
          />
          <DialogActions>
            {" "}
            {/*need to set Recover Password button to save values*/}
            <Button
              type="submit"
              variant="contained"
              onClick={() => setOpen(false)}
              sx={{
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                padding: "6px 12px",
                fontSize: "13px",
              }}
            >
              Recover Password
            </Button>
            <Button
              onClick={() => setOpen(false)}
              sx={{
                fontSize: "13px",
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GoGreenUserSettings;