import React from 'react'; 
import { render } from 'react-dom'; 
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes';

render( <BrowserRouter>
         <Routes />
       </BrowserRouter>, document.getElementById('app'));


if (module.hot) {
    module.hot.accept();
  }
  
  