import React from "react";
import {Form, Label, Transition, Input} from "semantic-ui-react";

// simple form field example with validations 
export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <Form.Input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  // styled visualisation of erros and warnings 
  const renderInput = ({ input, label, type, placeholder, meta: { touched, error, warning }, as: As = Input, ...props}) => (
    <Form.Field>       
        <As {...props} {...input} value={input.value} label={label} placeholder={placeholder} type={type}/>     
        <Transition animation="fade up" duration={{hide: 0, show: 500}} visible={(touched && (!!error || !!warning))}>
            <Label
                basic
                color='red'
                pointing                
            >
                {
                    error || warning
                }
            </Label>
        </Transition>
        
        
    </Form.Field>   
  )
export default renderInput;