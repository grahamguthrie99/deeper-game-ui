import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { FirebaseProvider } from "./firebase/FirebaseContext";
import { AuthProvider } from "./session/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseProvider>
     <AuthProvider>
      <Router>
          <App />
      </Router>
     </AuthProvider>
  </FirebaseProvider>
);


