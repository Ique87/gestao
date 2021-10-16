import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logoGrupo from '../imagens/logos/logo_grupojovens.jpg';
import logoParoquia from '../imagens/logos/logo_paroquia.jpg';

const useStyles = makeStyles((theme) => ({
  gridLocalTitle: {
    height: "330px"
  },
  gridLocalInf:{
    marginTop: "20px",
  },
  gridParTitle: {
    marginTop: "20px",
    height: "900px",
  },
  gridParInf:{
    marginTop: "20px",
  },  
  gridGojfeTitle: {
    marginTop: "20px",
    height: "330px"
  },
  gridGojfeInf:{
    marginTop: "20px",
  }, 
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#8B0000',
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  paperInf: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
  },  
  paperInfItem: {
    marginLeft: "15px"
  }, 
  infContainer:{
    marginLeft: "100px",
  },
  marginDiv: {
    marginTop: '25px'
  }
}));

const Sobre = () => {
    const classes = useStyles();
    return(
      <>
        <BarraNavegacao />

        <Container>
          
          <Grid container spacing={6}>
            <Grid item xs={12} className={classes.gridParTitle}>
              <Paper className={classes.paper}>
                <Typography variant="h4"><b>Paroquia São Benedito</b></Typography>
              </Paper>

              <Container className={classes.infContainer}>
                <Grid container spacing={6}>
                  <Grid item xs={3} className={classes.gridParInf}>
                    <img src={logoParoquia} width='250px'/>
                  </Grid>

                  <Grid item xs={7} className={classes.gridLocalInf}>
                    <Paper className={classes.paperInf} >
                      <Typography variant="h6" ><b>Ano de Fundação:</b> 2000</Typography>
                      <Typography variant="h6" ><b>Forania:</b> Santo Antônio Maria Claret</Typography>
                    
                      <div marginTop='25px'>
                        <Typography variant="h6" ><b>Pároco:</b> Pe. Amauri Sergio Marques</Typography>
                      </div> 
                      <div className={classes.marginDiv}>  
                        <Typography variant="h6" ><b>Matriz</b></Typography>
                        <Typography variant="h6" ><b>Endereço:</b> Rua Cel. Américo Batista, 3448, 14065-210 – Ribeirão Preto/SP</Typography>
                        <Typography variant="h6" ><b>Telefone:</b> (16) 3639-0807  <b>WhatsApp:</b> (16) 99999-9999</Typography>
                        <Typography variant="h6" ><b>E-mail:</b> paroquiasaobenedito@hotmail.com / padreamauri@hotmail.com</Typography>
                      </div>
                      <div className={classes.marginDiv}>  
                        <Typography variant="h6" ><b>Comunidade Nossa Senhora da Assunção</b></Typography>
                        <Typography variant="h6" ><b>Endereço:</b> Rua Francisco Simões Junior</Typography>
                      </div> 
                      <div className={classes.marginDiv}>  
                        <Typography variant="h6" ><b>Comunidade Rosa Mística</b></Typography>
                        <Typography variant="h6" ><b>Endereço:</b> Rua Afonso Paulini</Typography>
                      </div> 
                      <div className={classes.marginDiv}>  
                        <Typography variant="h6" ><b>Missas</b></Typography>
                        <Typography variant="h6" ><b>Matriz São Benedito</b></Typography>
                        <Typography variant="h6" >Terça-feira: celebração da Palavra, 19h30.</Typography>
                        <Typography variant="h6" >Quinta-feira: Adoração ao Santíssimo, após a missa das 19h30.</Typography>
                        <Typography variant="h6" >Sexta-feira: 1° sexta Missa, demais celebração da Palavra as 19h30.</Typography>
                        <Typography variant="h6" >Domingo: 8h e 19h</Typography>
                        <Typography variant="h6" ><b>Comunidade Nossa Senhora da Assunção:</b> Sábado: 18h</Typography>
                        <Typography variant="h6" ><b>Comunidade Rosa Mística:</b> Domingo: 9h30</Typography>
                      </div> 
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Grid>

            <Grid item xs={12} className={classes.gridLocalTitle}>
              <Paper className={classes.paper}>
                <Typography variant="h4"><b>G.O.J.F.E</b></Typography>
              </Paper>
              
              <Container className={classes.infContainer}>
                <Grid container spacing={6}>
                  <Grid item xs={3} className={classes.gridLocalInf}>
                    <img src={logoGrupo} width='250px' />
                  </Grid>

                  <Grid item xs={7} className={classes.gridLocalInf}>
                    <Paper className={classes.paperInf}>
                      <Typography variant="h6" ><b>Paróquia São Benedito (Igreja Matriz)</b></Typography>
                      <Typography variant="h6" ><b>Local:</b> Rua Cel. Américo Batista, 3448</Typography>
                      <Typography variant="h6" ><b>Horário:</b> Aos domingos após a Santa Missa das 19h </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Grid>

          </Grid>

        </Container>


      </>
    )
}

export default Sobre;