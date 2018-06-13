import axios from "axios";
import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from './types';

export const userSignupRequest = (userData) => {
    return dispatch => {
        return axios.post('/api/users', userData);
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