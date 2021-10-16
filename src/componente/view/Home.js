import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';
import ImgHome from '../imagens/home/img_home.jpg';
import MainFeaturedPost from '../atoms/MainFeaturedPost';
import Container from '@material-ui/core/Container' 
import Grid from '@material-ui/core/Grid';
import Sidebar from '../atoms/Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FeaturedPost from '../atoms/FeaturedPost';

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
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Set 2021', url: '/eventos' },
    { title: 'Ago 2021', url: '/eventos' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
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