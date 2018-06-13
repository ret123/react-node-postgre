import React from 'react'; 
import { render } from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Routes from './components/Routes';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);
render( <Provider store={store}>
          <BrowserRouter>
             <Routes />
          </BrowserRouter>
       </Provider>, document.getElementById('app'));


if (module.hot) {
    module.hot.accept();
  }
  
  