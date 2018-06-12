import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
    render() {
        return (
            <div className="row justify-content-center">
            <div className="col-4">
              <SignupForm />
            </div>
           
          </div>
        );
    }
}
export default SignupPage;