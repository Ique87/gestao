import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FeaturedPostEventos from '../atoms/FeaturedPostEventos';

import Img20210829 from '../imagens/eventos/2021/20210829.jpg';

import Img20210905 from '../imagens/eventos/2021/20210905.jpg';
import Img20210912 from '../imagens/eventos/2021/20210912.jpg';
import Img20210919 from '../imagens/eventos/2021/20210919.jpg';
import Img20210926 from '../imagens/eventos/2021/20210926.jpg';

import Img20211003 from '../imagens/eventos/2021/20211003.jpg';
import Img20211010 from '../imagens/eventos/2021/20211010.jpg';
import Img20211017 from '../imagens/eventos/2021/20211017.jpg';
import Img20211024 from '../imagens/eventos/2021/20211024.jpg';
import Img20211031 from '../imagens/eventos/2021/20211031.jpg';

import Img20211107 from '../imagens/eventos/2021/20211107.jpg';
import Img20211114 from '../imagens/eventos/2021/20211114.jpg';
import Img20211120a from '../imagens/eventos/2021/20211120a.jpg';
import Img20211128 from '../imagens/eventos/2021/20211128.jpg';

import Img20211205 from '../imagens/eventos/2021/20211205.jpg';
import Img20211219 from '../imagens/eventos/2021/20211219.jpg';

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


const featuredPostsAgo = [
  {
    title: 'DE VOLTA AO PRIMEIRO AMOR',
    date: 'Dia - 29',
    description:
      'Ser amado pelo próprio do amor.',
    image: Img20210829,
    imageText: 'Image Text',
  }
];

const featuredPostsSet = [
  {
    title: 'ELE QUER TE CURAR',
    date: 'Dia - 05',
    description:
      'Cura-me, Senhor, e serei curado, salva-me, e serei salvo, pois tu és aquele a quem eu louvo. (Jeremias 17:14)',
    image: Img20210905,
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
    title: 'PERSEVERAI EM MIM',
    date: 'Dia - 19',
    description:
      'Irmãos e Irmãs esse é o chamado que nosso senhor Jesus Cristo faz para nós "Perseverai em MIM". Podem ter certeza que ele tem grandes promessas para você.',
    image: Img20210919,
    imageText: 'Image Text',
  },
  {
    title: 'DESPERTA (CANCELADO)',
    date: 'Dia - 26',
    description:
      'Infelizmento o grupo foi cancelado devido a falta de energia.',
    image: Img20210926,
    imageText: 'Image Text',
  },
];

const featuredPostsOut = [
  {
    title: 'DESPERTA',
    date: 'Dia - 03',
    description:
      '',
    image: Img20211003,
    imageText: 'Image Text',
  },
  {
    title: 'APROXIME-SE DE DEUS',
    date: 'Dia - 10',
    description:
      'Deus quer te convidar a estar na presença dEle novamente no próximo domingo e o tema que Ele nos reservou promete hein!',
    image: Img20211010,
    imageText: 'Image Text',
  },
  {
    title: 'ORAI',
    date: 'Dia - 17',
    description:
      '...invocações e súplicas. ORAI em toda circunstância, pelo Espírito, no qual perseverai... | Deus nos chama nesse domingo a termos uma noite de oração assim como é falado a nós em efésios 6:10. Deus espera todos nós para vivermos juntos esse momento de graças junto a Ele.',
    image: Img20211017,
    imageText: 'Image Text',
  },
  {
    title: 'JUNTO DE MIM E DOS SEUS, VOCÊ VENCERÁ!',
    date: 'Dia - 24',
    description:
      'Deus sempre quer nos fazer vencedores e a melhor e mais fácil forma de vencer é estando junto à Ele!',
    image: Img20211024,
    imageText: 'Image Text',
  },
  {
    title: 'ACALMA MINHA TEMPESTADE',
    date: 'Dia - 31',
    description:
      'Acho que esse pedido é o pedido em que todos nós fazemos sem exceção a Jesus nos momentos mais dolorosos! Ele quer te curar meus irmãos; Ele quer acalmar seu sofrimento e retirar todas as suas dores...',
    image: Img20211031,
    imageText: 'Image Text',
  },
];

const featuredPostsNov = [
  {
    title: 'RENOVADOS PELA MISERICÓRDIA',
    date: 'Dia - 07',
    description:
      'A sua misericórdia do nosso Jesus nos mostrou o quanto ele nos ama. É nesse amor meu irmão (a), que nosso senhor quer renovar as suas forças.',
    image: Img20211107,
    imageText: 'Image Text',
  },
  {
    title: 'QUAL É O CAMINHO?',
    date: 'Dia - 14',
    description:
      'A misericórdia de nosso Jesus nos mostrou o quanto ele nos ama. É nesse amor que nosso Senhor quer renovar as nossas forças.',
    image: Img20211114,
    imageText: 'Image Text',
  },
  {
    title: 'O ENCONTRO',
    date: 'Dia - 20',
    description:
    'Dia de se alegrar, louvar, clamar e assim receber do Senhor o que ele tem prá nós.',
    image: Img20211120a,
    imageText: 'Image Text',
  },    
  {
    title: 'FILHO ESTOU CONTIGO!',
    date: 'Dia - 28',
    description:
    'Filho estou contigo.',
    image: Img20211128,
    imageText: 'Image Text',
  },      
];

const featuredPostsDez = [
  {
    title: 'A FÉ QUE HABITA EM MIM',
    date: 'Dia - 05',
    description:
      'A fé que habita em mim.',
    image: Img20211205,
    imageText: 'Image Text',
  },
  {
    title: 'QUAL É O CAMINHO?',
    date: 'Dia - 19',
    description:
      'E para finalizarmos o nosso ano, nada melhor do que ser aos cuidados daquele que é o próprio amor, não é mesmo ?',
    image: Img20211219,
    imageText: 'Image Text',
  },
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
          <Tab label="Agosto" {...a11yProps(0)} />  
          <Tab label="Setembro" {...a11yProps(1)} />   
          <Tab label="Outubro" {...a11yProps(2)} />
          <Tab label="Novenbro" {...a11yProps(3)} />
          <Tab label="Dezembro" {...a11yProps(4)} />
        </Tabs>
      </AppBar>

      <TabPanel style={{border: '5px'}} value={value} index={0}>
        {featuredPostsAgo.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={1}>
        {featuredPostsSet.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={2}>
        {featuredPostsOut.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>  
      <TabPanel style={{border: '5px'}} value={value} index={3}>
        {featuredPostsNov.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>  
      <TabPanel style={{border: '5px'}} value={value} index={4}>
        {featuredPostsDez.map((post) => (
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