import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, _ } from 'gridjs-react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import GridForm from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
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
  width710px: {
    width: '710px',
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

const GridRetiro = () => {
  const classes = useStyles();
  
  // Aberttura do Modal Novo Registro e Edit 
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  // Carrega campos para editar
  const handleOpenEdit = async (id) => {
    setOpen(true);

    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    await axiosServices.get('/api/retiro/'+id, 
      {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      response.data.map((element, index) => {
        
        console.log(element.nome, index)
        setInputs({...inputs,
            ['id']: element.id,  
            ['retiro']: element.retiro,
            ['tema']: element.tema,
            ['lema']: element.lema,
            ['dtretiro']: element.dtretiro,
            ['dtinicial']: element.dtinicial,
            ['dtfinal']: element.dtfinal,
            ['created_at']: element.created_at,
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
  const [loadgrid, setLoadGrid] = React.useState([]);
  const onLoadGrid = async () => {
    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    await axiosServices.get('/api/retiro', 
      {
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
      setLoadGrid(...loadgrid,response.data.map(value=>[value.id,value.retiro,value.tema,
        _(<>
          <Button size="small" className={classes.buttonStyle} onClick={()=>handleOpenEdit(value.id)}>Editar</Button>
          <Button size="small" className={classes.buttonStyle}>Deletar</Button>
          </>)
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
    console.log(event);
    const axiosServices = axios.create({baseURL: "http://127.0.0.1:8000"});
    console.log(inputs);
    await axiosServices.post('/api/retiro', 
      inputs
    ,{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response);
      setInputs(...inputs,[]);
      setOpen(false);
  /*        
      if(response.status==201){
  
      }
  */
    })
    .catch(function (error) {
      console.log(error);
      console.log(error.response);
    });     
  };

  const [inputs, setInputs] = React.useState(
    {
      "id": "",  
      "retiro": "",
      "tema": "",
      "lema": "",
      "dtretiro": "",
      "dtinicial": "",
      "dtfinal": "",
      "created_at": "",
      "updated_at": ""    
    }
  );

  //Validações
  const handlerBlur = (event) => {
    validationFields(event)
  }
  const validationFields = (event) => {
    let objError={}

    if (['retiro', 'tema', 'lema', 'dtretiro', 'dtinicial', 'dtfinal'].includes(event.target.name)) {
      console.log(event)
      objError[event.target.name] = event.target.value.trim() == '' ? 'Campo obrigatório.' : '';
    }
    setError({...objError});
  }
  const [error, setError] = React.useState(
    {"email":""}
  );

  // Validações na mudança dos campos.
  const handlerChange = (event) => {
    console.log(event)

    setInputs({...inputs, [event.target.name]: event.target.value})
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
              <TextField label="Retiro" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small"
                        name='retiro'
                        required
                        {...((error.retiro !== "" && error.retiro !== undefined) && {error:true, helperText: error.retiro})}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.retiro}
                        className={classes.width350px}/>
              <TextField label="Tema" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small" 
                        name='tema'
                        required
                        {...((error.tema !== "" && error.tema !== undefined) && {error:true, helperText: error.tema})}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.tema}
                        className={classes.width350px}/>
            </div>

            <div>
              <TextField label="Lema" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small"
                        name='lema'
                        required
                        {...((error.lema !== "" && error.lema !== undefined) && {error:true, helperText: error.lema})}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.lema}
                        className={classes.width710px}/>
            </div>

            <div>
            <TextField label="Data Retiro" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small" 
                        type='date'
                        name='dtretiro'
                        required
                        {...((error.dtretiro !== "" && error.dtretiro !== undefined) && {error:true, helperText: error.dtretiro})}
                        InputLabelProps={{shrink: true}}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.dtretiro}
                        className={classes.width200px}/>
              <TextField label="Data Inicial Divulgação" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small" 
                        type='date'
                        name='dtinicial'
                        required
                        {...((error.dtinicial !== "" && error.dtinicial !== undefined) && {error:true, helperText: error.dtinicial})}
                        InputLabelProps={{shrink: true}}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.dtinicial}
                        className={classes.width200px}/>
              <TextField label="Data Final Divulgação" 
                        id="outlined-size-small" 
                        variant="outlined" 
                        size="small" 
                        type='date'
                        name='dtfinal'
                        required
                        {...((error.dtfinal !== "" && error.dtfinal !== undefined) && {error:true, helperText: error.dtfinal})}
                        InputLabelProps={{shrink: true}}
                        onChange={handlerChange}
                        onBlur={handlerBlur}
                        value={inputs.dtfinal}
                        className={classes.width200px}/>
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

      <Grid 
      data={loadgrid}
      columns={['Id',{name:'Retiro', minWidth:'200px'},{name:'Tema', minWidth:'600px'},'']}
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

export default GridRetiro;