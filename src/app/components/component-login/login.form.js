import React from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {requiredCommonValdation} from '../../utils/FormFieldValidator';
import renderInput from "../../renders/renderInput";

const LoginForm = props => {
    const { handleSubmit, pristine, submitting, login} = props;
    return (    
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
                            <Button color="teal" fluid size="large" primary loading={submitting} disabled={pristine || submitting}>Login up</Button>
                        </Segment>
                    </Form>
                </Grid.Column>      
    );
};

export default reduxForm({
    form: "loginForm",
    validate: requiredCommonValdation    
})(LoginForm);