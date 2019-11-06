import { connect } from "react-redux";
import LoginMainComponent from "./login.component";
import { authOperations} from "../../apis/auth-api";
import { userOperations } from "../../apis/user-api";

const mapStateToProps = state => {    
    return {                
        loggedIn: state.auth.loggedIn,
        user: state.user.user,
    };
};

const mapDispatchToProps = dispatch => {
    const verify = (payload) => {
        dispatch(userOperations.verifyOperation(payload));
    }
    const login = loginPayload => {                      
        dispatch(authOperations.loginOperation(loginPayload));
    };


    return {
        login,
        verify
    };
};

const LoginMainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginMainComponent);

export default LoginMainContainer;