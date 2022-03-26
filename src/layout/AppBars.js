import React, {useState} from 'react'
import "./AppBar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {IconButton, useMediaQuery, useTheme,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "../layout/Drawer"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from "../images/logo.png"

export default function AppBars() {

  const [drawerState, setDrawerState] = useState("false")

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  }; 

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

    return (
        <div>
     
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
     
                {isMatch ?
          
                  <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
                
                :

                <>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <img  src={logo} className="logo" />
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About </Button>
                <Button color="inherit">Contact </Button>
                <Button color="inherit">Docs</Button>
                </>
                }
         
          
        </Toolbar>
      </AppBar>
    </Box>
                 
        </div>
    )
}
