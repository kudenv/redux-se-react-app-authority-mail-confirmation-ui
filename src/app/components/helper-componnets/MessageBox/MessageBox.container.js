import { connect } from "react-redux";
import MessageBoxComponent from "./MessageBox.component";

const mapStateToProps = state => {    
    const {auth: {error}} = state;
    if (!!error) {
        return {
            error: true,
            message: error.message
        }
    }
    return {                
        error: false,
        message: '',        
    };
};


const MessageBoxContainer = connect(
    mapStateToProps,
    null
)(MessageBoxComponent);

export default MessageBoxContainer;