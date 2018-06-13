import axios from "axios";
import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE,SET_CURRENT_USER} from './types';
import setAuthorizationtoken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import setAuthorizationToken from "../utils/setAuthorizationToken";

export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}

export const isUserExists = (identifier) => {
    return dispatch => {
        return axios.get(`/api/users/${identifier}`);
    }
}
export const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}
export const deleteFlashMessage = (id) => {
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
}

export const setCurrentUser = (user) => {
    return {
    type: SET_CURRENT_USER,
    user
    };
}

export const login = (loginData) => {
    return dispatch => {
        return axios.post('/api/auth',loginData)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationtoken(token);
               dispatch(setCurrentUser(jwt.decode(token)));
            });
    }
}
export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

