import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.js';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

