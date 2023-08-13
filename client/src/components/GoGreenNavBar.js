//content on the top of the screen 
import React, { useState, useContext } from 'react';
import { AppBar, Typography, Link, IconButton, Button, Toolbar, Tabs, Tab} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkTab from '@mui/material/Link';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../pages/user-context';

const styled = {mt: 2.5, fontFamily : "Poppins", textTransform:"none", ':hover': {color:"#55BDB3"}}
const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    marginright: '30px',
    padding: '10px'
    }

export const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    let navigate = useNavigate();
    console.log('current user is; ', user);

    const logout = () => {
        // set user to null
        setUser(null);
        // naviagate to the log in page
        let path = `/`;
        navigate(path);
    }

return (
    <div>{(user !== null) && (
        <AppBar  color="custom" position="static">
            <Toolbar>
                <Typography 
                    marginLeft="10px" 
                    padding="3px"
                    sx={{fontFamily:"Rakkas", color:"#258B81", fontWeight : 900, fontSize:"24px"}}>
                        Go
                </Typography>
                <Typography
                    marginLeft="10px" 
                    marginBottom="10px"
                    padding="3px"
                    sx={{fontFamily:"Rakkas", color:"#258B81", fontWeight : 900, fontSize:"24px", marginLeft: "-47px"}}>
                        <br/>Green
                </Typography>
                    <Tabs 
                    indicatorColor='primary'
                    textcolor='inherit'
                    tabbaroptions={{
                        labelStyle: { textTransform: 'none' }
                      }}
                    >
                    <LinkTab sx={styled}>
                        <NavLink  to='/' style={linkStyle} > {'Home'} </NavLink> 
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to='/profile' style={linkStyle}> {'Profile'} </NavLink>
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to={`/dashboard/${user}`} style={linkStyle}> {'Dashboard'} </NavLink> 
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to='/footprint' style={linkStyle}> {'Footprint'} </NavLink> 
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to='/practice' style={linkStyle}> {'Practice'} </NavLink> 
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to='/info' style={linkStyle}> {'Info'} </NavLink> 
                    </LinkTab>
                    <LinkTab sx={styled}>
                        <NavLink to='/community' style={linkStyle}> {'Community'} </NavLink> 
                    </LinkTab>
                </Tabs>
                <Button
                    color='secondary'
                    marginRight="5px"
                    startIcon={<AccountCircleIcon style={{fontSize:'45px'}}/>}
                    sx={{fontFamily : "Poppins", 
                         textTransform:"none", 
                         marginLeft: 'auto',
                         ':hover': {color:"#55BDB3"}}}>
                    {user.name}
                </Button>
                <Button
                    color='secondary'
                    marginRight="5px"
                    onClick = {logout}
                    sx={{fontFamily : "Poppins", 
                         textTransform:"none", 
                         marginLeft: 'auto',
                         ':hover': {color:"#55BDB3"}}}>
                    Log Out
                </Button>
            </Toolbar>
        </AppBar>)}
    </div>
  )
}

export default NavBar;

