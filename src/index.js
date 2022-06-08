import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { FirebaseProvider } from "./firebase/FirebaseContext";
import { AuthProvider } from "./session/AuthContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
  },
 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <FirebaseProvider>
      <AuthProvider>
        <Router>
            <App />
        </Router>
      </AuthProvider>
    </FirebaseProvider>
  </ThemeProvider>
);


