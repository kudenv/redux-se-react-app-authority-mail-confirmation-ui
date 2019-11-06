import React from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";

import {Field, reduxForm} from "redux-form";

import renderInput from "../../renders/renderInput";

const LoginForm = props => {
    const { handleSubmit, pristine, submitting, login} = props;
    return (
        <div className="login-form">
            {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
            <style>{`
                  body > div,
                  body > div > div,
                  body > div > div > div.login-form {
                    height: 100%;
                }
               `}</style>
            <Grid
                textAlign="center"
                style={{height: "100%"}}
                verticalAlign="middle"
            >
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" color="teal" textAlign="center">
                        Login up
                    </Header>
                    <Form size="large" onSubmit={handleSubmit(login)}>
                        <Segment stacked>
                            <Field
                                component={renderInput}
                                name="email"
                                icon="mail"
                                iconPosition="left"
                                placeholder="E-mail address"
                            />
                            <Field
                                component={renderInput}
                                name="password"
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                            />
                            <Button color="teal" fluid size="large">
                                Login up
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default reduxForm({
    form: "loginForm"
})(LoginForm);