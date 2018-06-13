import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../actions';

class SignupPage extends React.Component {
    render() {
        const {userSignupRequest} = this.props;
        return (
            <div className="row justify-content-center">
            <div className="col-4">
              <SignupForm userSignupRequest={userSignupRequest} />
            </div>
           
          </div>
        );
    }
}
SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}
export default connect(null,{userSignupRequest})(SignupPage);