// child elements <ListItem/>
// properties: divider (dividing the list - horizontal line), component, sx etc.
import React, {useState, useStyles} from 'react'
import {List, Collapse, ListItem, ListItemButton, ListItemIcon} from '@mui/material';
import {Box} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';


//<ListItemIcon>{">"}</ListItemIcon> to have this before the text in list
// collapse (true if open and false if close)
const ListFootprint = () => {
    //const [open, setOpen] = useState(false);
    return (
        // alternative
        <Box sx={{ width: '100%', maxWidth: 200, bgcolor: "secondary" }}>
        <nav aria-label={<GridViewRoundedIcon />}>
        <List>
            <ListItem disablePadding>
            <ListItemButton >
                <ListItemIcon>
                    <GridViewRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <InboxRoundedIcon/>
                </ListItemIcon>
                <ListItemText primary="Set goals"/>
            </ListItemButton>
            </ListItem>
        </List>
        </nav>
        </Box>
    );

};

export default ListFootprint;