import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/normalize.css';
import './style/fontawesome-all.css';
import './style/columns.css';
import './style/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Redux Rematch
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import * as models from './store/models';

const store = init({
  models
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
