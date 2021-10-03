import React from 'react';
import './App.css';
import "./styles/index.scss";
import "mdb-ui-kit/css/mdb.min.css"
import MainRoutes from './routes/MainRoutes';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';


const theme = createTheme({

    
    palette: {
        
        primary: {
          main: '#d81139',
          contrastText: "#ffffff"

        },
        secondary: {
          main: '#663399',
        },
        error: {
          main: '#ff3d00',
        },
        warning: {
          main: '#ffe900',
        },
        info: {
          main: '#006bbf',
        },
        text: {
          primary: 'rgba(0,0,0,0.87)',
        },
        divider: 'rgba(0,0,0,0.16)',
        background: {
          default: '#f5f5f5',
        },
      },

})


function App() {



  return (
    <ThemeProvider theme={theme}>
        <MainRoutes Header={Header} Footer={Footer} />
    </ThemeProvider>
  );
}

export default App;
