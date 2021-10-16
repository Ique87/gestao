import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import logo from '../imagens/logos/logo_grupojovens.jpg';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import MenuDrawer from './MenuDrawer.js';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      marginLeft: "25px"
      //color: theme.palette.primary.light,
    },
    bordabotao: {
      border: "10px"
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    barra: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
  });
  
  const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
  
      if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
  };
  
  return (
      <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.barra}>
          {children}
      </div>
      </Zoom>
  );
  }

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
  };
    
const BarraNavegacao = (props) => {
    const classes = useStyles();
    return(
      <div>
        <AppBar>
          <Toolbar>
            <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
            
            <Typography variant="h4" className={classes.title}>
                G.O.J. Fogo do Espírito
            </Typography>

            <MenuDrawer/>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />

        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>
    )
}

export default BarraNavegacao;