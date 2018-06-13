import {combineReducers} from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/authReducer';

export default combineReducers({
    flashMessages,
    auth
});