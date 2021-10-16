import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes"

const theme = createTheme({
palette: {
    primary: {
    main: '#8B0000',
    },
    secondary: {
    main: '#FFFAFA',
    },
},
typography:{
    fontFamily: 'STIX Two Text, serif'
}
});


function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 

      <Router>
        <Routes></Routes>
      </Router>

      
    </ThemeProvider>
  );
}

export default App;
