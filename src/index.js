import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rotas from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Rotas />
  </React.StrictMode>
);
