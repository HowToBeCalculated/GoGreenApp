import React from 'react';
import {Box, AppBar, Toolbar, useTheme, createTheme} from "@mui/material";


export const theme = createTheme({
        palette: {
            primary : {main: "#55BDB3"}, // can then calculate light and dark from there
            secondary : {main: "#7D7A7A", dark : "#000000"},
            custom : {light: "#FFFFFF", main : "#EFF7F7", dark:"#F0F8F8"}
        },
        typography : {
            fontFamily : ["Poppins", "Helvetica"],
            fontWeightLight: 200,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            h1 : {fontSize : "20px"}, //in rem or px,
            body2 : {fontSize : "12px", fontWeight : 'light'}
        }
    })

export default theme;