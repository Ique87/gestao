import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FeaturedPostEventos from '../atoms/FeaturedPostEventos';

import Img20220123 from '../imagens/eventos/2022/20220123.jpg';
import Img20220130 from '../imagens/eventos/2022/20220130.jpg';

import Img20220206 from '../imagens/eventos/2022/20220206.jpg';
import Img20220213 from '../imagens/eventos/2022/20220213.jpg';
import Img20220220 from '../imagens/eventos/2022/20220220.jpg';
import Img20220227 from '../imagens/eventos/2022/20220227.jpg';

import Img20220306 from '../imagens/eventos/2022/20220306.jpg';
import Img20220313 from '../imagens/eventos/2022/20220313.jpg';
import Img20220320 from '../imagens/eventos/2022/20220320.jpg';
import Img20220327 from '../imagens/eventos/2022/20220327.jpg';

import Img20220401 from '../imagens/eventos/2022/20220401.jpg';
import Img20220403 from '../imagens/eventos/2022/20220403.jpg';
import Img20220416 from '../imagens/eventos/2022/20220416.jpg';

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

const featuredPostsJan = [
  {
    title: 'DE VOLTA PRA CASA',
    date: 'Dia - 23',
    description:
      'Deus tem um convite muito especial, para esse grupo! Ele te convida a voltar para casa, ele sente saudade de sua voz, de se fazer um com você.',
    image: Img20220123,
    imageText: 'Image Text',
  },
  {
    title: 'CONFIO EM TI',
    date: 'Dia - 30',
    description:
      'Entregue o seu caminho ao Senhor; confie nele, e ele agirá. (Salmos 37:5)',
    image: Img20220130,
    imageText: 'Image Text',
  },
];

const featuredPostsFev = [
  {
    title: 'CONHECA-TE, ACEITA-TE, SUPERA-TE!',
    date: 'Dia - 06',
    description:
      'Quem quer seguir Jesus precisa se enxergar primeiro!',
    image: Img20220206,
    imageText: 'Image Text',
  },
  {
    title: 'SILENCIE TEU CORAÇÃO',
    date: 'Dia - 13',
    description:
      'Aquieta sua alma. Faz seu coração ouvir a voz de Deus.',
    image: Img20220213,
    imageText: 'Image Text',
  },
  {
    title: 'EIS QUE ESTOU DIANTE DE TI',
    date: 'Dia - 20',
    description:
      'Nada disso! Eis que a Palavra está muito próxima de ti e fácil de assimilar: está na tua boca e no teu coração, por isso poderás obedecer a ela e vivê-la em teu dia-a-dia!',
    image: Img20220220,
    imageText: 'Image Text',
  },
  {
    title: 'O AMOR NOS TRANSFORMA',
    date: 'Dia - 27',
    description:
      'No silêncio da cruz, jesus explicou o que é o amor !',
    image: Img20220227,
    imageText: 'Image Text',
  },
];

const featuredPostsMar = [
  {
    title: 'AMARÁS O TEU PRÓXIMO COMO A TI MESMO',
    date: 'Dia - 03',
    description:
      'Respondeu Jesus: Ame o Senhor, o seu Deus de todo o seu coração, de toda a sua alma e de todo o seu entendimento. Este é o primeiro e maior mandamento. E o segundo é semelhante a ele: Ame o seu próximo como a si mesmo.',
    image: Img20220306,
    imageText: 'Image Text',
  },
  {
    title: 'EIS AI A TUA MÃE',
    date: 'Dia - 13',
    description:
      'Ora Jesus, vendo ali sua mãe, e que o discípulo a quem ele amava estava presente, disse a sua mãe: Mulher, eis aí o teu filho. Depois disse ao discípulo: Eis aí tua mãe. E desde aquela hora o discípulo a recebeu em sua casa. (João 19:26,27)',
    image: Img20220313,
    imageText: 'Image Text',
  },
  {
    title: 'EIS O TEMPO DE CONVERSÃO',
    date: 'Dia - 20',
    description:
      'Porque o Senhor, vosso Deus, é piedoso e misericordioso e não desviará de vós o rosto, se vos converterdes a ele. (2 Crônicas 30:9b)',
    image: Img20220320,
    imageText: 'Image Text',
  },
  {
    title: 'CURADOS PELO SENHOR, BATIZADOS PELO ESPÍRITO',
    date: 'Dia - 27',
    description:
      'Certamente ele assumiu nossa dor e suportou nosso sofrimento, mas nós o consideramos punido por Deus, atingido por ele e aflito. Mas ele foi traspassado por nossas transgressões, ele foi esmagado por nossas iniquidades; o castigo que nos trouxe paz foi ele, e por suas feridas somos curados. ( Isaías 53: 4-5)',
    image: Img20220327,
    imageText: 'Image Text',
  },
];

const featuredPostsAbr = [
  {
    title: 'SEMINÁRIO DE VIDA NO ESPÍRITO SANTO',
    date: 'Dia - 01',
    description:
      'Somos chamados a viver o novo no Espírito santo. Ele que deseja nós formar como verdadeiros profetas de Cristo, para espalharmos a boa nova, do que o espírito santo que está sobre nós realizou.',
    image: Img20220401,
    imageText: 'Image Text',
  },
  {
    title: 'TOME A TUARUZ E ME SIGA',
    date: 'Dia - 03',
    description:
      'Jesus dizia a todos: "Se alguém quiser acompanhar-me, negue-se a si mesmo, tome diariamente a sua cruz e siga-me. Nosso senhor nos convida a entender o real sentido de passarmos por algumas situações, nos chama á tomar a nossa cruz entendendo que o que Deus tem reservado para nós é extraordinário.',
    image: Img20220403,
    imageText: 'Image Text',
  },
  {
    title: 'RESSUSCITEMOS',
    date: 'Dia - 16',
    description:
      'Por que buscais entre os mortos aquele que está vivo? Ele não está aqui, mas ressuscitou.” (Lc 24,5-6)',
    image: Img20220416,
    imageText: 'Image Text',
  },
];

  const ScrollTabs2022 = () => {
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
          <Tab label="Janeiro" {...a11yProps(0)} />  
          <Tab label="Fevereiro" {...a11yProps(1)} /> 
          <Tab label="Março" {...a11yProps(2)} />   
          <Tab label="Abril" {...a11yProps(3)} />   
        </Tabs>
      </AppBar>

      <TabPanel style={{border: '5px'}} value={value} index={0}>
        {featuredPostsJan.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={1}>
        {featuredPostsFev.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={2}>
        {featuredPostsMar.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
      <TabPanel style={{border: '5px'}} value={value} index={3}>
        {featuredPostsAbr.map((post) => (
          <>
            <FeaturedPostEventos key={post.title} post={post} />
            <hr className={classes.hrstyle}/>
          </>
        ))}
      </TabPanel>
    </div>
  );
}

export default ScrollTabs2022;