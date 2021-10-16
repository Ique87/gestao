import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';

const useStyles = makeStyles((theme) => ({

  }));
  
const Login = () => {
    const classes = useStyles();
    return(
      <>
        <BarraNavegacao />
      </>
    )
}

export default Login;