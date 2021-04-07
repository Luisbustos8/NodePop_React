import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import storage from './utils/Storage';
import {configureClient} from './api/client';

const accessToken = storage.get('auth');
configureClient({accessToken});

ReactDOM.render(
  <Router>

    <App isInitiallyLogged={!!accessToken}/>

  </Router>,
  document.getElementById('root')
);

reportWebVitals();
