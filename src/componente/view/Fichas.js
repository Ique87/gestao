import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import BarraNavegacao from '../atoms/BarraNavegacao';
import FichaFeaturedPost from '../atoms/FichaFeaturedPost';
import Container from '@material-ui/core/Container' 
import imgRetiro from '../imagens/fichas/img_retiro.jpg';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import validator from 'validator';
import axios from 'axios';

//import Switch from '@material-ui/core/Switch';

import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {value: 'Sim',label: 'Sim'},
  {value: 'Não',label: 'Não'},
];

const currenciesEscolar = [
  {value: 'Ensino Fundamental',label: 'Ensino Fundamental'},
  {value: 'Ensino Médio',label: 'Ensino Médio'},
  {value: 'Ensino Superior',label: 'Ensino Superior'},
];
  
const useStyles = makeStyles((theme) => ({
    gridParTitle: {
      marginTop: "5px",
      height: "900px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#8B0000',
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.primary.main}`,
    },
    paperCampos: {
      padding: theme.spacing(2),
      color: '#8B0000',
      marginTop:'5px',
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.primary.main}`,
    },
    width100px: {
      width: '100px',
      marginLeft: '10px',
      marginTop: '10px',
    },
    width150px: {
      width: '148px',
      marginLeft: '10px',
      marginTop: '10px',
    },
    width200px: {
      width: '200px',
      marginLeft: '10px',
      marginTop: '10px',
    },
    width350px: {
      width: '350px',
      marginLeft: '10px',
      marginTop: '10px',
    },
    marginTop: {
      marginTop: '10px'
    },
    marginLeft: {
      marginLeft: '30px'
    },
    marginSwitch: {
      marginTop: '20px',
      marginLeft: '15px'
    },   
    dados: {
      marginLeft:'10px',
      marginTop:'30px'
    },
    button: {
      margin: theme.spacing(1),
      marginTop:'30px',
      marginLeft:'10px',
      position: "center"
    },
  }));

  const fichaFeaturedPost = {
    title: 'XX - Retiro de Carnaval.',
    title2: '“REUNIDOS NUM SÓ CORPO PELA FORÇA DA CRUZ” (EFÉSIOS 2,16)',
    description:
      "Lema do retiro do proximo domingo. jiwfawviasbvavbasjvbkjsvbjksa v siv soh aowh fauwhd fvuiagws fvuigs vgai sgvai svgua sigv djid iu dvugdv wiugd vwi dguw idvgwidg uyd igwydviwdyg ufiieufg uegf uie gfuqegfuiq egf efgqiuyegfiuqgefque fuqge fuigefuqgeiufwegfowqygf ywgf yowgf ywg efyGFWEYF WEYFG ywv iwdygiwgdi gdiwgdv uwg dvu dgwiudgwigdiwugd iwugd iugwvwgdui giu",
    image: imgRetiro,
    imgText: 'main image description',
    linkText: 'Se inscreva agora…',
  };

  function TextMaskCel(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /\d/, /\d/, ')', ' ',/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCel.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

  function TextMaskTel(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskTel.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

const Fichas = () => {
    const classes = useStyles();
    const [currencyEstuda, setCurrencyEstuda] = React.useState('');
    const [currencyTrabalha, setCurrencyTrabalha] = React.useState('');
    const [currencyComunhao, setCurrencyComunhao] = React.useState('');
    const [currencyCrismado, setCurrencyCrismado] = React.useState('');
    const [currencyGrauEsc, setCurrencyGrauEsc] = React.useState('');
    const [required, setRequired] = React.useState(
      {"nomeres1":false}
    );
    const handleChangeEstuda = (event) => {
      setCurrencyEstuda(event.target.value);
      setInputs({...inputs, [event.target.name]: event.target.value})

      if (event.target.name === 'estuda') {
        if (event.target.value == 'S'){
          setRequired({...required, ['escola']: true})
        } 
        else {
          setRequired({...required, ['escola']: false})
        }
      }            
    };
    const handleChangeTrabalha = (event) => {
      setCurrencyTrabalha(event.target.value);
      setInputs({...inputs, [event.target.name]: event.target.value})

      if (event.target.name === 'trabalha') {
        if (event.target.value == 'S'){
          setRequired({...required, ['cargo']: true})
        } 
        else {
          setRequired({...required, ['cargo']: false})
        }
      }        
    };
    const handleChangeComunhao = (event) => {
      setCurrencyComunhao(event.target.value);
      setInputs({...inputs, [event.target.name]: event.target.value})
    };
    const handleChangeCrismado = (event) => {
      setCurrencyCrismado(event.target.value);
      setInputs({...inputs, [event.target.name]: event.target.value})
    };
    const handleChangeGrauEsc = (event) => {
      setCurrencyGrauEsc(event.target.value);
      setInputs({...inputs, [event.target.name]: event.target.value})

      if (event.target.name === 'escola') {
        if (event.target.value == 'S'){
          setRequired({...required, ['curso']: true})
        } 
        else {
          setRequired({...required, ['curso']: false})
        }
      }        
    };                
    const [state, setState] = React.useState({
      checkedEstuda: false,
      checkedTrabalha: false,
      checkedComunhao: false,
      checkedCrismado: false,
      checkedEstuda: false,
      checkedComunidade: false,
    });
    const [inputs, setInputs] = React.useState(
      {"email":""}
    );
    const [error, setError] = React.useState(
      {"email":""}
    );

    const hendlerSubmit = async (event) => {
      event.preventDefault();  

      const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
      console.log(inputs);
      await axiosServices.post('/api/participante', 
        inputs
      ,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        setInputs(...inputs,[]);
/*        
        if(response.status==201){

        }
*/
      })
      .catch(function (error) {
        console.log(error.response.data.errors.email[0]);
      });     
    };
    
    const validationFields = (event) => {
      let objError={}

      if (['nome', 'endereco', 'numero', 'bairro', 'cidade', 'dtnasc', 'comunhao'].includes(event.target.name)) {
        console.log(event)
        objError[event.target.name] = event.target.value.trim() == '' ? 'Campo obrigatório.' : '';
      }
      if (event.target.name == 'email') {
        objError.email = event.target.value.trim() == '' ? 'Campo obrigatório.' : (validator.isEmail(event.target.value) ? '' : 'E-mail Inválido');
      }
      if (event.target.name == 'telres') {
        objError.telres = event.target.value.trim().length == 14 || event.target.value.trim() == '(  )     -' ? '' : 'Telefone Inválido';
      }     
      if (event.target.name == 'telcel') {
          objError.telcel = event.target.value.trim().length == 15 || event.target.value.trim() == '(  )      -' ? '' : 'Celular Inválido';
      }
      if ((event.target.name == 'nomeres1') && (event.target.attributes.required !== undefined)) {
        objError.nomeres1 = event.target.value.trim() == '' ? 'Campo obrigatório.' : '';
      }
      if (event.target.name == 'celres1') {
        if (event.target.attributes.required !== undefined) {
          objError.celres1 = event.target.value.trim() == '(  )      -' ? 'Campo obrigatório.' : event.target.value.trim().length == 15 ? '' : 'Celular Inválido';
        } else {
          objError.celres1 = event.target.value.trim().length == 15 || event.target.value.trim() == '(  )      -' ? '' : 'Celular Inválido';
        }
      }
      setError({...objError});
    }

    const handlerBlur = (event) => {
      validationFields(event)
    }

    const handlerChange = (event) => {
      console.log(event)
      setInputs({...inputs, [event.target.name]: event.target.value})

      if (event.target.name === 'dtnasc') {
        var data = new Date();
        var dia  = String(data.getDate()).padStart(2, '0');
        var mes  = String(data.getMonth()+1).padStart(2, '0');
        var ano  = String(data.getFullYear()-18);
        var dataAtual = new Date(ano, mes, dia);
        var dataNasc = new Date(event.target.value);
        
        console.log(dataAtual);
        console.log(dataNasc);

        if (event.target.value.trim() !== '' && dataAtual < dataNasc){
          setRequired({...required, ['nomeres1']: true,  ['celres1']: true})
        } 
        else {
          setRequired({...required, ['nomeres1']: false, ['celres1']: false})
        }
      }  
    }

    return(
      <>
        <BarraNavegacao />
        <Container maxWidth="lg">
          <main>
            <FichaFeaturedPost post={fichaFeaturedPost} />
 
            <Grid container spacing={6}>
              <Grid item xs={12} className={classes.gridParTitle}>
                <Paper className={classes.paper}>
                  <Typography variant="h4"><b>Cadastre-se</b></Typography>
                </Paper>
                <Divider/>
                <Paper className={classes.paperCampos}>
                  <form className={classes.root} 
                        autoComplete="off"
                        onSubmit={hendlerSubmit}>
                    <Typography className={classes.dados} variant='h5'><b>Dados Pessoais</b></Typography>
                    <div>
                      <TextField label="E-mail" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                type="text"
                                name="email"
                                required
                                {...((error.email !== "" && error.email !== undefined) && {error:true, helperText: error.email})}
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.email}
                                className={classes.width350px}/>
                    </div>
                    <div>
                      <TextField label="Nome Completo" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                required
                                {...((error.nome !== "" && error.nome !== undefined) && {error:true, helperText: error.nome})}
                                name='nome'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.nome}
                                className={classes.width350px}/>
                      <TextField label="Endereço" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                required
                                {...((error.endereco !== "" && error.endereco !== undefined) && {error:true, helperText: error.endereco})}
                                name='endereco'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.endereco}
                                className={classes.width350px}/>
                    </div>
                    <div>
                    <TextField label="Complemento" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                name='complemento'
                                onChange={handlerChange}
                                value={inputs.complemento}
                                className={classes.width350px}/>                      
                      <TextField label="Número" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                required
                                {...((error.numero !== "" && error.numero !== undefined) && {error:true, helperText: error.numero})}
                                name='numero'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.numero}
                                className={classes.width100px}/>
                    </div>
                    <div>
                      <TextField label="Bairro" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                required
                                {...((error.bairro !== "" && error.bairro !== undefined) && {error:true, helperText: error.bairro})}
                                name='bairro'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.bairro}
                                className={classes.width350px}/>
                      <TextField label="Cidade" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                required
                                {...((error.cidade !== "" && error.cidade !== undefined) && {error:true, helperText: error.cidade})}
                                name='cidade'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.cidade}
                                className={classes.width350px}/>
                    </div>
                    <div>
                      <TextField label="Data Nascimento" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                required
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                type='date'
                                InputLabelProps={{shrink: true}}
                                name='dtnasc'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.dtnasc}
                                className={classes.width200px}/>
                      <TextField label="Tel. Residencial" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                {...((error.telres !== "" && error.telres !== undefined) && {error:true, helperText: error.telres})}
                                name='telres'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                InputProps={{inputComponent: TextMaskTel}}
                                value={inputs.telres}
                                className={classes.width200px}/>
                      <TextField label="Tel. Celular" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                {...((error.telcel !== "" && error.telcel !== undefined) && {error:true, helperText: error.telcel})}
                                name='telcel'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                InputProps={{inputComponent: TextMaskCel}}
                                value={inputs.telcel}
                                className={classes.width200px}/>
                    </div>
                    <Typography className={classes.dados} variant='h5'><b>Dados dos Responsáveis</b></Typography>
                    <div>
                      <TextField label="Nome Responsavel 1" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                required={required.nomeres1}
                                {...((error.nomeres1 !== "" && error.nomeres1 !== undefined) && {error:true, helperText: error.nomeres1})}
                                name='nomeres1'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.nomeres1}
                                className={classes.width350px}/>
                      <TextField label="Tel. Celular" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                required={required.celres1}
                                {...((error.celres1 !== "" && error.celres1 !== undefined) && {error:true, helperText: error.celres1})}
                                name='celres1'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                InputProps={{inputComponent: TextMaskCel}}
                                value={inputs.celres1}
                                className={classes.width200px}/>
                    </div>
                    <div>
                      <TextField label="Nome Responsavel 2" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small"
                                name='nomeres2'
                                onChange={handlerChange}
                                value={inputs.nomeres2}
                                className={classes.width350px}/>
                      <TextField label="Tel. Celular" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                name='celres2'
                                onChange={handlerChange}
                                InputProps={{inputComponent: TextMaskCel}}
                                value={inputs.celres2}
                                className={classes.width200px}/>
                    </div>
                    <Typography className={classes.dados} variant='h5'><b>Outros Dados</b></Typography>
                    <div>
                      <TextField label="Comunhão ?"
                                id="outlined-size-small"
                                variant="outlined" 
                                size="small" 
                                select
                                required
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='comunhao'
                                value={currencyComunhao}
                                onChange={handleChangeComunhao}
                                onBlur={handlerBlur}
                                className={classes.width150px}>
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField label="Crismado ?"
                                id="outlined-size-small"
                                variant="outlined" 
                                size="small" 
                                select
                                required
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='crismado'
                                value={currencyCrismado}
                                onChange={handleChangeCrismado}
                                onBlur={handlerBlur}
                                className={classes.width150px}>
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>                                                                  
                    </div>
                    <div>
                      <TextField label="Estuda ?"
                                id="outlined-size-small"
                                variant="outlined" 
                                size="small" 
                                select
                                required
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='estuda'
                                value={currencyEstuda}
                                onChange={handleChangeEstuda}
                                onBlur={handlerBlur}
                                className={classes.width150px}>
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField label="Grau Escolaridade"
                                id="outlined-size-small"
                                variant="outlined" 
                                size="small" 
                                select
                                required={required.escola}
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='escola'
                                value={currencyGrauEsc}
                                onChange={handleChangeGrauEsc}
                                onBlur={handlerBlur}
                                className={classes.width200px}>
                        {currenciesEscolar.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField label="Curso" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                required={required.curso}
                                name='curso'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.curso}
                                className={classes.width350px}/>
                    </div>
                    <div>
                      <TextField label="Trabalha ?"
                                id="outlined-size-small"
                                variant="outlined" 
                                size="small" 
                                select
                                required
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='trabalha'
                                value={currencyTrabalha}
                                onChange={handleChangeTrabalha}
                                onBlur={handlerBlur}
                                className={classes.width150px}>
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField label="Cargo" 
                                id="outlined-size-small" 
                                variant="outlined" 
                                size="small" 
                                required={required.cargo}
                                {...((error.dtnasc !== "" && error.dtnasc !== undefined) && {error:true, helperText: error.dtnasc})}
                                name='cargo'
                                onChange={handlerChange}
                                onBlur={handlerBlur}
                                value={inputs.cargo}
                                className={classes.width350px}/>                      
                    </div>
                    <div >


                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                      >
                        Salvar
                      </Button>
                    </Grid> 
                    </div>
                  </form>
                </Paper>
              </Grid>
            </Grid>

          </main>
        </Container>
      </>
    )
}

export default Fichas;