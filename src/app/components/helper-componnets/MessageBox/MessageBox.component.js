import React, {Component} from "react";
import { Header, Modal, Message } from 'semantic-ui-react'

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state ={visible: true}
    }
        
    handleDismiss = (e) => {        
        this.setState({visible: !this.state.visible})
    }

    getExceptionMessage = (props) => {
        const {message} = props;        
        // !!message ? this.setState({onDismiss: !this.state.onDismiss}) : null;
        return  !!message ? true : false;         
    }

    getMessageBox = (message) => {
        if (this.state.visible) {
            return (
              <Message
                onDismiss={this.handleDismiss}
                header='Error while loading!'
                content={message}
              />
            )
         }
         return null;
    }

    getModalContent =(message) => {        
        const {visible} = this.state;              
        return (
        <Modal open={visible} closeIcon onClose={this.handleDismiss} >        
            <Header icon='archive' content='Error Message' />
            <Modal.Content>
              <p>
                {message}
              </p>
            </Modal.Content>            
          </Modal>)
    }
           
    render() {
        const {mode = 'message', message = '', error} = this.props;        

        if (mode === 'modal' && error) {
            return this.getModalContent(message);
        }         
        return error && this.getMessageBox(message);
    }         
};
