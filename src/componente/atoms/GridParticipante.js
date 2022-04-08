import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, _ } from 'gridjs-react';
import PropTypes from 'prop-types';
import "gridjs/dist/theme/mermaid.css";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import GridForm from '@material-ui/core/Grid';
import validator from 'validator';
import MaskedInput from 'react-text-mask';
import MenuItem from '@material-ui/core/MenuItem';
import ModalDelete from './ModalDelete';

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
  buttonStyle: {
    marginLeft:'5px',
    border:'1px solid red',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid red',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },  
  margin: {
    marginTop: '20px'
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

const GridParticipante = () => {
  const classes = useStyles();

  // Aberttura do Modal Novo Registro e Edit 
  const [open, setOpen] = React.useState(false);
  const [openDel, setOpenDel] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleOpen = () => {
    setOpen(true);
    setCurrencyComunhao('');
    setCurrencyCrismado('');
    setCurrencyEstuda('');
    setCurrencyGrauEsc('');
    setCurrencyTrabalha('');
    setInputs({
      "bairro": "",
      "cargo": "",
      "celres1": "",
      "celres2": "",
      "cidade": "",
      "complemento": "",
      "comunhao": "",
      "created_at": "",
      "crismado": "",
      "curso": "",
      "dtnasc": "",
      "email": "",
      "endereco": "",
      "escola": "",
      "estuda": "",
      "id": "",
      "nome": "",
      "nomeres1": "",
      "nomeres2": "",
      "numero": "",
      "telcel": "",
      "telres": "",
      "trabalha": "",
      "updated_at": ""
    }
)
  }
  const handleClose = () => setOpen(false);
  const [idDelete, setIdDelete] = React.useState(() => {});
  const [loadgrid, setLoadGrid] = React.useState([]);

  const handleClickSim = async () => {
    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});

    const data = {_method: 'DELETE', id: idDelete}
    
    await axiosServices.post('/api/participante/'+idDelete, 
    data
    ,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
      onLoadGrid();
      setOpenDel(false);
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
    }); 
    
  };
  //Carrega campos para Deletar Registro
  const handleOpenDelete = (id) => {
    setOpenDel(true);
    setIdDelete(id);    
  }
    
  // Carrega campos para editar
  const handleOpenEdit = async (id) => {
    setOpen(true);

    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    await axiosServices.get('/api/participante/'+id, 
      {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      response.data.map((element, index) => {
        
        console.log(element.nome, index)
        setCurrencyComunhao(element.comunhao)
        setCurrencyCrismado(element.crismado)
        setCurrencyEstuda(element.estuda)
        setCurrencyGrauEsc(element.escola)
        setCurrencyTrabalha(element.trabalha)

        setInputs({...inputs,
            ['nome']: element.nome,
            ['email']: element.email,
            ['bairro']: element.bairro,
            ['cargo']: element.cargo,
            ['celres1']: element.celres1,
            ['celres2']: element.celres2,
            ['cidade']: element.cidade,
            ['complemento']: element.complemento,
            ['comunhao']: element.comunhao,
            ['created_at']: element.created_at,
            ['crismado']: element.crismado,
            ['curso']: element.curso,
            ['dtnasc']: element.dtnasc,
            ['endereco']: element.endereco,
            ['escola']: element.escola,
            ['estuda']: element.estuda,
            ['id']: element.id,
            ['nomeres1']: element.nomeres1,
            ['nomeres2']: element.nomeres2,
            ['numero']: element.numero,
            ['telcel']: element.telcel,
            ['telres']: element.telres,
            ['trabalha']: element.trabalha,
            ['updated_at']: element.updated_at,
        })
        
      })
      
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
    }); 
  }

  // carregando a grid
  const onLoadGrid = async () => {
    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    await axiosServices.get('/api/participante', 
      {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
      setLoadGrid(response.data.map(value=>[value.id,value.nome,value.email,
        _(<React.Fragment key={value.id}>
          <Button size="small" className={classes.buttonStyle} onClick={()=>handleOpenEdit(value.id)}>Editar</Button>
          <Button size="small" className={classes.buttonStyle} onClick={()=>handleOpenDelete(value.id)}>Deletar</Button>
          </React.Fragment>)
      ]));
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
    });     
  };

  useEffect(() => {
    onLoadGrid();
  },[])

  //Estilo da div do Modal
  const [modalStyle] = React.useState(getModalStyle);

  //Gravação dos dados  
  const hendlerSubmit = async (event) => {
    event.preventDefault();  
  
    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    console.log(inputs.id.length)
    console.log(inputs);

    if (inputs.id !== '') {
      inputs._method = 'PUT';
      await axiosServices.post('/api/participante/'+inputs.id, 
      inputs
      ,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        //setInputs(...inputs,[]);
        onLoadGrid();
        setOpen(false);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
      }); 
    }
    else {
      await axiosServices.post('/api/participante', 
        inputs
      ,{
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        //setInputs(...inputs,[]);
        onLoadGrid();
        setOpen(false);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
      }); 
    }
  };

  const [inputs, setInputs] = React.useState(
    {
      "bairro": "",
      "cargo": "",
      "celres1": "",
      "celres2": "",
      "cidade": "",
      "complemento": "",
      "comunhao": "",
      "created_at": "",
      "crismado": "",
      "curso": "",
      "dtnasc": "",
      "email": "",
      "endereco": "",
      "escola": "",
      "estuda": "",
      "id": "",
      "nome": "",
      "nomeres1": "",
      "nomeres2": "",
      "numero": "",
      "telcel": "",
      "telres": "",
      "trabalha": "",
      "updated_at": ""
    }
  );

  //Validações
  const handlerBlur = (event) => {
    validationFields(event)
  }
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
  const [error, setError] = React.useState(
    {"email":""}
  );
  const [currencyEstuda, setCurrencyEstuda] = React.useState('');
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
  const [currencyTrabalha, setCurrencyTrabalha] = React.useState('');
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
  const [currencyComunhao, setCurrencyComunhao] = React.useState('');
  const handleChangeComunhao = (event) => {
    setCurrencyComunhao(event.target.value);
    setInputs({...inputs, [event.target.name]: event.target.value})
  };
  const [currencyCrismado, setCurrencyCrismado] = React.useState('');
  const handleChangeCrismado = (event) => {
    setCurrencyCrismado(event.target.value);
    setInputs({...inputs, [event.target.name]: event.target.value})
  };
  const [currencyGrauEsc, setCurrencyGrauEsc] = React.useState('');
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
  const [required, setRequired] = React.useState(
    {"nomeres1":false}
  );
  //const modal = (open) => {};

  // Validações na mudança dos campos.
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
      <Button onClick={handleOpen} size="small" className={classes.buttonStyle}>
        Novo Registro
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className={classes.root} 
                autoComplete="off"
                onSubmit={hendlerSubmit}
                >
            <div>
              <TextField type="hidden"
                        name="id"
                        value={inputs.id}/>

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
                        name='nome'
                        required
                        {...((error.nome !== "" && error.nome !== undefined) && {error:true, helperText: error.nome})}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.nome}
                        className={classes.width350px}/>
              <TextField label="Endereço" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small" 
                        name='endereco'
                        required
                        {...((error.endereco !== "" && error.endereco !== undefined) && {error:true, helperText: error.endereco})}
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
                        name='numero'
                        required
                        {...((error.numero !== "" && error.numero !== undefined) && {error:true, helperText: error.numero})}
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
            <div className={classes.margin}>
              <GridForm container direction="row" justifyContent="center" alignItems="center">
                <Button
                  size="small"
                  type="submit"
                  startIcon={<SaveIcon />}
                  className={classes.buttonStyle}
                >
                  Salvar
                </Button>
              </GridForm>
            </div>
          </form>
        </div>
      </Modal>

      <ModalDelete 
        pOpen={openDel} 
        onClick={handleClickSim}
        onChange={() => {setOpenDel(!openDel)}}
      />

      <Grid 
        data={loadgrid}
        columns={['Id',{name:'Nome',minWidth:'300px'},{name:'E-mail',minWidth:'500px'},{name:'',minWidth:'200px'}]}
        search={true}
        sort={true}
        
        pagination={{
          enabled: true,
          limit: 5,
        }}
      />
    </>
  )
}

export default GridParticipante;