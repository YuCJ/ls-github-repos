import { Provider } from 'react-redux';
import App from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
