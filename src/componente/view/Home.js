import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';
import ImgHome from '../imagens/home/img_home.jpg';
import MainFeaturedPost from '../atoms/MainFeaturedPost';
import Container from '@material-ui/core/Container' 
import Grid from '@material-ui/core/Grid';
import Sidebar from '../atoms/Sidebar';
import Instagram from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FeaturedPost from '../atoms/FeaturedPost';

import Img20211024a from '../imagens/eventos/2021/20211024a.jpg';
import Img20211120a from '../imagens/eventos/2021/20211120a.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'PERSEVERAI EM MIM.',
  data: 'Dia 19 de Setembro',
  description:
    "Irmãos e Irmãs esse é o chamado que nosso senhor Jesus Cristo faz para nós Perseverai em MIM. Podem ter certeza que ele tem grandes promessas para você.",
  image: ImgHome,
  imgText: 'main image description',
  linkText: 'Mais informações…',
};

const featuredPosts = [
  {
    title: 'DNJ',
    date: 'Out 24',
    description:
      'No DNJ (Dia Nacional da Juventude) desse ano, nossa Arquidiocese nos convida a estar nesse encontro que será realizado na Paroquia Nossa Senhora das Dores em Serrana! Seremos jovens de toda a Região!!',
    image: Img20211024a,
    imageText: 'Image Text',
  },
  {
    title: 'O ENCONTRO',
    date: 'Nov 20',
    description:
      'Você é nosso convidado. Para mais informações siga nosso insta @gojfogodoespirito',
    image: Img20211120a,
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'Informações',
  description:
    'Todas as informações cabiveis.',
  archives: [
    { title: 'Out 2021', url: '/eventos' },
    { title: 'Set 2021', url: '/eventos' },
    { title: 'Ago 2021', url: '/eventos' },
  ],
  social: [
    { name: 'Instagram', icon: Instagram },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};
const Home = () => {
    const classes= useStyles();
    return(
      <>
        <BarraNavegacao />
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={5} className={classes.mainGrid}>
              <Grid item xs={12} md={8}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid>
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>

      </>
    )
}

export default Home;