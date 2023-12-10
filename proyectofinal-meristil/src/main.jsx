import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwzh5wtznPGY-V2YMTYqwhtSNiZ8do0rE",
  authDomain: "api-proyectofinal-meristil.firebaseapp.com",
  projectId: "api-proyectofinal-meristil",
  storageBucket: "api-proyectofinal-meristil.appspot.com",
  messagingSenderId: "225431214766",
  appId: "1:225431214766:web:90e9570967e78c10016b3f"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
