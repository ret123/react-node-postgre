import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest, addFlashMessage,isUserExists } from '../../actions';

class SignupPage extends React.Component {
    render() {
        const {userSignupRequest,addFlashMessage, isUserExists} = this.props;
        return (
            <div className="row justify-content-center">
            <div className="col-4">
              <SignupForm 
              userSignupRequest={userSignupRequest}
               addFlashMessage = {addFlashMessage} 
               isUserExists={isUserExists}
                />
            </div>
           
          </div>
        );
    }
}
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}
export default connect(null,{userSignupRequest,addFlashMessage,isUserExists})(SignupPage);