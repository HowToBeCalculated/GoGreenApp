//can be REMOVED
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import leaves from './GoGreenSignin.png';
import theme from './GoGreenTheme';

export default function SignInSide() {
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
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{fontFamily : "Poppins"}}>
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                    <Typography sx={{fontSize : "12px"}}>Forgot your password? 
                  <Link sx={{fontWeight : 700, marginLeft : '5px'}} href="#" variant="body2">
                     Reset your password
                  </Link>
                  <Link sx={{fontWeight : 700, marginLeft : '80px'}} href="#" variant="body2">
                     Create Account
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