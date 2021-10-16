import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FeaturedPostEventos from '../atoms/FeaturedPostEventos';

import Img20210829 from '../imagens/eventos/20210829.jpg';
import Img20210905 from '../imagens/eventos/20210905.jpg';
import Img20210912 from '../imagens/eventos/20210912.jpg';
import Img20210919 from '../imagens/eventos/20210919.jpg';

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
  hrstyle:{
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    height: '4px',
    marginBottom: '9px'
  }
}));

const featuredPostsSet = [
  {
    title: 'PERSEVERAI EM MIM',
    date: 'Dia - 19',
    description:
      'Irmãos e Irmãs esse é o chamado que nosso senhor Jesus Cristo faz para nós "Perseverai em MIM". Podem ter certeza que ele tem grandes promessas para você.',
    image: Img20210919,
    imageText: 'Image Text',
  },
  {
    title: 'SEREIS BATIZADOS COM O ESPÍRITO SANTO ',
    date: 'Dia - 12',
    description:
      'Porque João, na verdade, batizou com água, mas vós sereis batizados com o Espírito Santo. (Atos 1:5)',
    image: Img20210912,
    imageText: 'Image Text',
  },
  {
    title: 'ELE QUER TE CURAR',
    date: 'Dia - 05',
    description:
      'Cura-me, Senhor, e serei curado, salva-me, e serei salvo, pois tu és aquele a quem eu louvo. (Jeremias 17:14)',
    image: Img20210905,
    imageText: 'Image Text',
  },
];

const featuredPostsAgo = [
  {
    title: 'DEVOLTA AO PRIMEIRO AMOR',
    date: 'Dia - 29',
    description:
      'Ser amado pelo próprio do amor.',
    image: Img20210829,
    imageText: 'Image Text',
  }
];

const ScrollTabs2021 = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
{/*
          <Tab label="Dezembro" {...a11yProps(0)} />
          <Tab label="Novembro" {...a11yProps(1)} />
          <Tab label="Outubro" {...a11yProps(2)} />
*/}          
          <Tab label="Setembro" {...a11yProps(0)} />
          <Tab label="Agosto" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
{/*
      <TabPanel style={{border: '5px'}} value={value} index={0}>
        {featuredPostsDez.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Novenbro
      </TabPanel>
      <TabPanel value={value} index={2}>
        Outubro
      </TabPanel>
*/}      
      <TabPanel style={{border: '5px'}} value={value} index={0}>
        {featuredPostsSet.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={1}>
        {featuredPostsAgo.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
    </div>
  );
}

export default ScrollTabs2021;