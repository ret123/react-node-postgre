import React from 'react';
import timezone from '../../data/timezone';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({ errors});
        }
        return isValid;
    }
    onSubmit(e) {
        e.preventDefault();
        if(this.isValid()) {
            this.setState({errors : {}, isLoading: true });
            this.props.userSignupRequest(this.state)
                .then(
                    () => { this.context.router.history.push('/')},
                    (err) => this.setState({errors: err.response.data, isLoading: false})
                            
                );
        }
    }
    render() {
        const {errors, isLoading} = this.state;
        const options = map(timezone,(val,key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Join our community!</h2>
                <div className= "form-group">
                    <label>Username</label>
                    <input 
                          value={this.state.username}
                          onChange={this.onChange}
                          type="username"
                          className={ !errors.username ? "form-control" : " form-control is-invalid" }
                          name="username" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Username"
                    />
                   {errors.username && <span className="help-block invalid-feedback">{errors.username}</span>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                          value={this.state.email}
                          onChange={this.onChange}
                          type="email"
                          className={ !errors.email ? "form-control" : " form-control is-invalid" }
                          name="email" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Email"
                    />
                    {errors.email && <span className="help-block invalid-feedback">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                          value={this.state.password}
                          onChange={this.onChange}
                          type="password"
                          className={ !errors.password ? "form-control" : " form-control is-invalid" }
                          name="password" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Password"
                    />
                    {errors.password && <span className="help-block invalid-feedback">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                          value={this.state.passwordConfirmation}
                          onChange={this.onChange}
                          type="password"
                          className={ !errors.passwordConfirmation ? "form-control" : " form-control is-invalid" }
                          name="passwordConfirmation" 
                          aria-describedby="emailHelp" 
                          placeholder="Confirm Password"
                    />
                   {errors.passwordConfirmation && <span className="help-block invalid-feedback">{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <label>Timezone</label>
                    <select 
                          value={this.state.timezone}
                          onChange={this.onChange}
                          className={ !errors.timezone ? "form-control" : " form-control is-invalid" }
                          name="timezone" 
                          aria-describedby="emailHelp" 
                         
                    >
                        <option value="" disabled>Choose your timezone</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block invalid-feedback">{errors.timezone}</span>}
                </div>
                
              
                <button type="submit" className="btn btn-primary" disabled={isLoading}>Signup</button>
            </form>
        );
    }
}
SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}
SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}
export default SignupForm;