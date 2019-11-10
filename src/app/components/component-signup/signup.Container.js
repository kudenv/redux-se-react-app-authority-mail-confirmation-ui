import { connect } from "react-redux";
import SignUpMainComponent from "./signup.Component";
import { authOperations } from "../../apis/auth-api";
import { isInvalid } from 'redux-form';
// import { SubmissionError } from 'redux-form';

// next step to switch on redux-api-middleware - to allow side affect api calls 
// const formApiAdapter = (dispatch, actionCreator) => {
//     return (...args) =>
//       new Promise((resolve, reject) => {
//         dispatch(actionCreator(...args)).then(response => {
//           if (response.error) {
//             reject(new SubmissionError(response))
//           } else {
//             resolve(response)
//           }
//         })
//       })
// }

const mapStateToProps = state => {    
    return {                              
        user: state.auth.user,
    };
};

const mapDispatchToProps = dispatch => {
    const onSubmit = (payload) => {  
        if (!!payload) {
            dispatch(authOperations.signupOperation(payload));
        }       
    };   
    return {
        signup: onSubmit
    };
};

const SignUpMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpMainComponent);

export default SignUpMainContainer;