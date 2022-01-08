import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './index.scss';
import App from './App';

import store from './components/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);