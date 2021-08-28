import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import itemData from './itemData';
import slide1 from './imagens/entrada_igreja.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  barra: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    //color: theme.palette.primary.light,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  hero: {
    height: "423.5px",
    marginTop: "-100px"
  },
  borda: {
    marginTop: "40px", 
    marginLeft: "10px",
    marginRight: "10px"
  }
}));

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
    fontFamily: 'STIX Two Text, serif'
  }
});

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

function App(props) {
  const classes = useStyles();
  const {titulo} = props;
  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={classes.borda}>
        <AppBar>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h3" className={classes.title}>
              {titulo}
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Sobre</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />

        <img src={slide1} className={classes.hero}/>

      </div>

{/*
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={2.5}>

          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title}/>
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div style={{border: "10px solid purple", marginTop: "40px", marginLeft: "10px", marginRight: "10px"}}>
        <img src={slide1} className={classes.hero} />
      </div>

      <Typography variant="h4">
        {titulo}
      </Typography>

      <Container>
        <Box m={6}>
          {[...new Array(36)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                     Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                     Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                     Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>

      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs sm lg>
          <Paper elevation={0} className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs sm lg>
          <Paper className={classes.paper}>xs=12

            <Grid container spacing={3}>
              <Grid item xs sm lg>
              <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
              <Grid item xs sm lg>
              <Paper className={classes.paper}>xs=12</Paper>
              </Grid>
            </Grid>          
          </Paper>
        </Grid>
        <Grid item xs sm lg>
          <Paper elevation={3} className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs sm lg>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>  
      </div>

      <Button variant="contained" color="primary">
        Primary
      </Button>
*/}
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </ThemeProvider>
  );
}

export default App;
