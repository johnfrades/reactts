import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

require('semantic-ui-css/semantic.min.css');
import App from './App';
import reducers from './redux/reducers';

const store = createStore(reducers, composeWithDevTools());
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('app'))