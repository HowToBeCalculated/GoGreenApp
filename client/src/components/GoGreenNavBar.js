//content on the top of the screen 
import React, { useState, useContext } from 'react';
import { AppBar, Typography, Link, IconButton, Button, Toolbar, Tabs, Tab} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkTab from '@mui/material/Link';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../pages/user-context';

const styled = {mt: 2.5, fontFamily : "Poppins", color : 'inherit', marginRight: '15px', marginLeft: '15px', textTransform:"none", ':hover': {color:"#55BDB3"}}

function NavText({ href, text }) {

    return (
        <>
        <Typography
            variant='h6'
            style={styled}
        >
            <NavLink
            to={href}
            style={{
                color: '#77cac2',
                textDecoration: 'none',
                ':hover': {color:"#55BDB3"}
            }}
            >
            {text}
            </NavLink>
        </Typography>
        </>
        )
    }

export const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    let navigate = useNavigate();
    //console.log('current user is; ', user);

    const logout = () => {
        // set user to null
        setUser(null);
        // naviagate to the log in page
        let path = `/`;
        navigate(path);
    }

return (
    <div>{(user !== null) && (
        <AppBar  color="custom" position="static" sx={{alignItems: 'center'}}>
            <Toolbar>
                <Typography 
                    marginLeft="10px" 
                    padding="3px"
                    sx={{fontFamily:"Rakkas", color:"#258B81", fontWeight : 900, fontSize:"24px", align: "left"}}>
                        Go
                </Typography>
                <Typography
                    marginLeft="10px" 
                    marginBottom="10px"
                    padding="3px"
                    sx={{fontFamily:"Rakkas", color:"#258B81", fontWeight : 900, fontSize:"24px", marginLeft: "-47px", marginRight: "50px"}}>
                        <br/>Green
                </Typography>
                    <NavText href='/' text='Home' />
                    <NavText href='/profile' text='Profile' />
                    <NavText href='/dashboard' text='Dashboard' />
                    <NavText href='/footprint' text='Footprint' />
                    <NavText href='/info' text='Info' />
                <Button
                    color='secondary'
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

