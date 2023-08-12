import * as React from 'react';
import {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup, Avatar } from '@mui/material';
import leaves from './GoGreenSignin.png';
import theme from './GoGreenTheme';
import UserContext from './user-context';

const config = require('../config.json');

export default function SignUpSide() {
  const [user, setUser] = useContext(UserContext);
  const [isNew, setIsNew] = useState(true);

  //add new user to the database
  async function add_user (header, username) {
    fetch(`http://${config.server_host}:${config.server_port}/createuser`, header)
    .then(data => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
    }).then(update => {
        console.log('update logged: ', update.success);
        if (update.success === 'true') {
            setUser(username);
        } else {
            //inform user that the information provided was not found in the database
            window.alert('There was an issue creating your account. Please try again.');
            console.log('Error creating new account.');
        }
    console.log('update received from post request', update);})
    .catch(e => {
      console.log(e);
    });
}


  //handle log in creation
  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const pw = data.get('password');
    let update = {'username' : username, 'password' : pw}
    const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
    };
    add_user(options, username);
}

   // validate log in information against database
   const handleSubmitLogIn = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    console.log('trying to log in', username, password);

    fetch(`/http://localhost:5000/login?username=${username}&password=${password}`)
    .then(res => res.json())
    .then(res => console.log('Response: ', res));
    // .then(resJson => {
    //     if (resJson.success === true) {
    //         setUser(username);
    //     } else {
    //         //inform user that the information provided was not found in the database
    //         window.alert('This user/password combindation does not exist.');
    //         console.log('Error logging in. Invalid combination.');
    //     }
    // })
  };

  return (
    <ThemeProvider theme={theme}>
    {isNew && (user === null) && 
      (<Grid container component="main" sx={{ height: '100vh' }}>
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
            <Box component="form" noValidate onSubmit={handleSubmitSignUp} sx={{ mt: 1 }}>
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
                id="username"
                label="Username"
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
                  <Link sx={{fontWeight : 700, marginLeft : '5px'}} href="#" variant="body2"
                    onClick={()=>setIsNew(false)}>
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
      )}
      {!isNew && (user === null)&&
      (<Grid container component="main" sx={{ height: '100vh' }}>
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
            <Box component="form" noValidate onSubmit={handleSubmitLogIn} sx={{ mt: 1 }}>
              <TextField 
                variant="standard"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
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
                  <Link sx={{fontWeight : 700, marginLeft : '80px'}} href="#" variant="body2"
                    onClick={()=>setIsNew(true)}>
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
      </Grid>)}
      {(user !== null) && 
      (<Container maxWidth="m" >
        <Box sx={{backgroundImage: `url(${leaves})`,  height: '100vh'}}>
        <Typography sx={{fontFamily:"Rakkas", color:"white", fontWeight : 900, fontSize: '50px', textAlign: 'center', paddingTop: '300px' }}>Welcome to Go Green</Typography>
        </Box>
      </Container>
      )}
    </ThemeProvider>
  );
}