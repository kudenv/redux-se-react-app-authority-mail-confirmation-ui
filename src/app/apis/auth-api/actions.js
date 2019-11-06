import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
    signupRequest: ["signupPayload"],
    signupSuccess: ["signupResponse"],
    signupFailure: ["signupError"],
    loginRequest: ["loginRequest"],
    loginSuccess: ["loginSuccess"],
    loginFailure: ["loginFailure"]

});

export { Creators, Types };