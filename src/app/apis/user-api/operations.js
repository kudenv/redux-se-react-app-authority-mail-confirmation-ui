import {Creators} from "./actions";
import LoginService from '../../services/userServices';
import { SubmissionError } from 'redux-form';

const verifyRequest = Creators.verifyRequest;
const verifySuccess = Creators.verifySuccess;
const verifyFailure = Creators.verifyFailure;

const verifyOperation = payloadData => {
    return async (dispatch) => {
        // Dispatching this action will toggle the 'showRedditSpinner'
        // flag in the store, so that the UI can show a loading icon.
        dispatch(verifyRequest());    
        try {
            const res = await LoginService.register(payloadData);
            if (res.error) {
                dispatch(verifyFailure(res));
                throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })
            } else {
                dispatch(verifySuccess(res));                
            }           
        } catch (err){
            dispatch(verifyFailure(err));            
            throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })            
        }        
    };
};


export default {
    verifyOperation  
};
