//content on the top of the screen 
import React, { useState, useContext } from 'react';
import { AppBar, Typography, Link, IconButton, Button, Toolbar, Tabs, Tab} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkTab from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import { LoggedInContext, UserContext } from '../pages/LoggedInContext';

const styled = {fontFamily : "Poppins", textTransform:"none", ':hover': {color:"#55BDB3"}}
const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: '30px',
    padding: '10px'
    }

export const NavBar = () => {
// Toolbar to add elements in a structured way (propreties: flex and additional)
// NB mx is margin on both sides
const loggedIn = useContext(LoggedInContext);
const user = useContext(UserContext);
const [value, setValue] = useState();
return (
    <div>
        {loggedIn &&
        <AppBar variant="outlined" color="custom" position="static" justifyContent="center">
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
                    textColor='inherit'
                    tabBarOptions={{
                        labelStyle: { textTransform: 'none' }
                      }}
                    value={value} 
                    onChange={(e,val) => setValue(val)}>
                    <Tab>
                    </Tab> 
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
                    Dante Lucca
                </Button>
            </Toolbar>
        </AppBar>}
    </div>
  )
}

export default NavBar;

