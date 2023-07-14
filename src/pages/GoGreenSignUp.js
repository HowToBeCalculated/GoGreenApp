import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup, Avatar } from '@mui/material';
import leaves from './GoGreenSignin.png';
import theme from './GoGreenTheme';

export default function SignUpSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            backgroundImage: `url(${leaves})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
          <Box
            maxWidth={500}
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{fontFamily : "Poppins"}}>
              Create Account
            </Typography>
            <ButtonGroup variant="text" color = "secondary">
                <Button 
                    startIcon={ <Avatar src={"https://cdn-icons-png.flaticon.com/512/2702/2702602.png"}/>}  
                    sx={{margin : '15px', padding : '10px', fontSize: '10px'}}>
                        Sign up with Google
                </Button>
                <Button 
                    startIcon={ <Avatar src={"https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"} />}
                    sx={{margin : '15px', marginLeft: '5px',  padding : '10px', paddingLeft : '5px', fontSize: '10px'}}>
                        Sign up with Facebook
                </Button>
            </ButtonGroup>
            <Typography color="secondary" sx={{marginTop: '35px', fontSize: '20px'}}>-OR-</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField 
                variant="standard"
                margin="normal"
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField 
                variant="standard"
                margin="normal"
                fullWidth
                id="email"
                label="E-mail Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color : "#FFFFFF", fontFamily : "Poppins"}}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                    <Typography sx={{fontSize : "12px"}}>Already have an account? 
                  <Link sx={{fontWeight : 700, marginLeft : '5px'}} href="#" variant="body2">
                     Log In
                  </Link>
                  </Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}