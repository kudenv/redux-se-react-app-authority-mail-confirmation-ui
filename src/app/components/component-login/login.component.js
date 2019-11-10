import React from "react";
import { Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import LoginForm from "./login.form";
import {MessageBox} from '../helper-componnets';

const onSubmitLogin = () => {};

const Login = props => {   
    return props.loggedIn ? (
        <Redirect to="/home" />
    ) : (
        <div className="signup-form">
            <MessageBox />
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.signup-form {
                    height: 100%;
                }
               `}</style>
            <Grid
                textAlign="center"
                style={{height: "100%"}}
                verticalAlign="middle"
            >                
                <LoginForm login={props.login} onSubmit={onSubmitLogin} />
            </Grid>
            </div>        
    );
};

export default Login;