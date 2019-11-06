import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./login.form";

const onSubmitLogin = () => {};

const Login = props => {
    if (props.user) {
        props.verify();
    }
    return props.loggedIn ? (
        <Redirect to="/home" />
    ) : (
        <LoginForm data={props.user}  login={props.login} onSubmit={onSubmitLogin} />
    );
};

export default Login;