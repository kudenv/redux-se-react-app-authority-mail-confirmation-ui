import {createReducer} from 'reduxsauce';
import Types from "./types";

// next stime need to reworked it to more elegant way , with  middlelayer options 
const user = JSON.stringify(localStorage.getItem('user'));

const INITIAL_STATE = user
     ? { error: false, singUp: true, loggedIn: true, user: user }
     : { error: false, singUp: false, loggedIn: false, user: {id: null,  verification: false} };

export const signupRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true
    };
};

export const signupSuccess = (state = INITIAL_STATE, action) => {
    const {signupResponse: {data, error}} = action;
    return {
        ...state,
        showSpinner: true,
        error,                        
        user: {
            singUp: true,
            loggedIn: false,
            verification: false,
            id: data.id            
        }
    };
};

export const signupFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        error: action.signupError
    };
};

export const loginRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        error: false,        
    };
};

export const loginSuccess = (state = INITIAL_STATE, action) => {
    const {loginSuccess: {data}} = action;
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        user: {
            singUp: true,
            loggedIn: true,
            id: data.id,
            verification: data.verification
        }
    };
};

export const loginFailure = (state = INITIAL_STATE, action) => {  
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        error: action.loginFailure,
        
    };
};

export const HANDLERS = {
    [Types.SIGNUP_REQUEST]: signupRequest,
    [Types.SIGNUP_SUCCESS]: signupSuccess,
    [Types.SIGNUP_FAILURE]: signupFailure,
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS)
