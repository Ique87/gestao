import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';
import GridParticipante from '../atoms/GridParticipante';
import GridRetiro from '../atoms/GridRetiro';
//import ScrollTabs2021 from '../atoms/ScrollTabs2021';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  barColor: {
    Color: '#ED5858',
  },
  marginContainer: {
    marginTop: '23px'
  }
}));

const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
      <>
        <BarraNavegacao />

        <Container className={classes.marginContainer}>
          <div className={classes.root}>
            <AppBar position="static" color="primary">
              <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Tab style={{fontSize:'22px'}} label="Participante" {...a11yProps(0)} />
                <Tab style={{fontSize:'22px'}} label="Retiro" {...a11yProps(1)} />
                <Tab style={{fontSize:'22px'}} label="Evento Retiro" {...a11yProps(2)} />
                <Tab style={{fontSize:'22px'}} label="Eventos" {...a11yProps(3)} />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
              <GridParticipante/>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <GridRetiro/>
            </TabPanel>
            
            <TabPanel value={value} index={2}>
              <Typography>Grid Cad. Partic./Retiro</Typography>
            </TabPanel>
            
            <TabPanel value={value} index={3}>
              <Typography>Grid Cad. Eventos</Typography>
            </TabPanel>
          </div>
        </Container>

      </>
    )
}

export default Admin;