import {createReducer} from 'reduxsauce';
import Types from "./types";

export const verifyRequest = (state, action) => {
    return {
        ...state,
        showSpinner: true
    };
};

export const verifySuccess = (state, action) => {
    const {verifySuccess: {data, error}} = action;
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

export const verifyFailure = (state, action) => {
    return {
        ...state,
        showSpinner: true,
        loggedIn: false,  
        error: action.verifyFailure
    };
};



export const HANDLERS = {
    [Types.VERIFY_REQUEST]: verifyRequest,
    [Types.VERIFY_SUCCESS]: verifySuccess,
    [Types.VERIFY_FAILURE]: verifyFailure,
};

export default createReducer({}, HANDLERS)
