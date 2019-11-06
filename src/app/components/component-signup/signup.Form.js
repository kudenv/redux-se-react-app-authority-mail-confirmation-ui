import React from "react";
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {requiredCommonValdation} from '../../utils/FormFieldValidator';

import {Field, reduxForm} from "redux-form";

import {default as renderInput} from "../../renders/renderInput";

const SignupForm = props => {
    const { handleSubmit, pristine, submitting, signup} = props
    return (
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" color="teal" textAlign="center">
                        Sign up
                    </Header>                 
                    <Form size="large" onSubmit={handleSubmit(signup)}>
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
                            <Button color="teal" fluid size="large" primary loading={submitting} disabled={pristine || submitting}>Sign up</Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <a href="http://google.com">Log in</a>
                    </Message>
                </Grid.Column>      
    );
};

SignupForm.propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
  };

export default reduxForm({
    form: "signupForm",    
    validate: requiredCommonValdation    
})(SignupForm);