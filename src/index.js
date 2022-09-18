import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="goit-react-hw-08-phonebook">
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </Router>
);
