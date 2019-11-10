import {Creators} from "./actions";
import LoginService from '../../services/authServices';
// import { SubmissionError } from 'redux-form';

const signupRequest = Creators.signupRequest;
const signupSuccess = Creators.signupSuccess;
const signupFailure = Creators.signupFailure;
// Login handlers
const loginRequest = Creators.loginRequest;
const loginSuccess = Creators.loginSuccess;
const loginFailure = Creators.loginFailure;

const signupOperation = signupPayload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(signupRequest());    
        try {
            const res = await LoginService.register(signupPayload);
            if (res.error) {
                dispatch(signupFailure(res));
                // throw new SubmissionError({ email: res.message, _error: 'Login failed!' })
            } else {
                dispatch(signupSuccess(res));                
            }           
        } catch (err){
            dispatch(signupFailure(err));            
            // throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })            
        }        
    };
};

const loginOperation = signupPayload => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(loginRequest());    
        try {
            const res = await LoginService.login(signupPayload);
            if (res.error) {
                dispatch(loginFailure(res));
            } else {
                dispatch(loginSuccess(res));
            }           
        } catch (err){
            dispatch(loginFailure(err));
           // new Error('Login fail');
        }        
    };
};

const logoutOperation = () => {
    return (dispatch) => {
        LoginService.logout();
        dispatch(signupFailure())
    }
};

export default {
    signupOperation,
    loginOperation,
    logoutOperation
};
