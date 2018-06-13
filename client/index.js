import React from 'react'; 
import { render } from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Routes from './components/Routes';
import rootReducer from './rootReducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, composeEnhancers(
  
  applyMiddleware(thunk)
));
render( <Provider store={store}>
          <BrowserRouter>
             <Routes />
          </BrowserRouter>
       </Provider>, document.getElementById('app'));


if (module.hot) {
    module.hot.accept();
  }
  
  