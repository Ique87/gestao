import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    marginLeft:'5px',
    border:'1px solid red',
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  paper: {
    position: 'absolute',
    width: 330,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid red',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },  
}));

const ModalDelete = ({pOpen, onClick, onChange}) => {  
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const handleOpen = () => {
    onClick();
  }
  const handleClose = () => {
    pOpen=false;
    onChange(pOpen);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">
      <p id="simple-modal-description">
        Deseja realmente deletar o registro ?
      </p></h3>

      <Button className={classes.buttonStyle} size="small" onClick={handleOpen} >Sim</Button>
      <Button className={classes.buttonStyle} size="small" onClick={handleClose}>Não</Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={pOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
  
}

ModalDelete.defaultProps = {
  pOpen: undefined,
  onClick: () => {},
};

ModalDelete.propTypes = {
  pOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ModalDelete;