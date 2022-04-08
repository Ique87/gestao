import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  margin: {
    margin: "5px"
  }
});

const MenuDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.margin}>
        <Link to="/"> 
          <Button variant="contained" color="primary">Home _____________________________</Button>
        </Link>
        <Divider />
        <Link to="/eventos">   
          <Button variant="contained" color="primary">Eventos _____________________________</Button>
        </Link>  
        <Divider />
        <Link to="/fichas"> 
          <Button variant="contained" color="primary">Fichas _____________________________</Button>
        </Link> 
        <Divider />
        <Link to="/sobre">
          <Button variant="contained" color="primary">Sobre _____________________________</Button>
        </Link>
      </div>
      <Divider />
      <div className={classes.margin}>
        <Link to="/login">
          <Button variant="contained" color="primary">Login _____________________________</Button>
        </Link>
        <Link to="/admin">
          <Button variant="contained" color="primary">Admin _____________________________</Button>
        </Link>
      </div>

{/*
      <List>
        {['Home', 'Eventos', 'Fichas', 'Sobre', 'Login Adm.'].map((text, index) => (
          <ListItem button key={text} >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
*/}
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
 
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
  );
}

export default MenuDrawer;