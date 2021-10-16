import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarraNavegacao from '../atoms/BarraNavegacao';
import SignIn from '../atoms/SignIn';

const useStyles = makeStyles((theme) => ({

  }));
  
const Login = () => {
    const classes = useStyles();
    return(
      <>
        <BarraNavegacao />

        <SignIn/>

      </>
    )
}

export default Login;