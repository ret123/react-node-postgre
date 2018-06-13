import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../actions';
import validateInput from '../../../server/shared/validations/login';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
            this.setState({ errors: {}, isLoading: true});
            this.props.login(this.state)
            .then(
                (res) => { 
                    this.context.router.history.push('/');
                },
                (err) => this.setState({errors: err.response.data.errors, isLoading: false})
                     
            );

        }
    }
    render() {
        const {errors,identifier,password,isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                {errors.form && <div className="alert alert-danger">{errors.form} </div>}
                <h2>Login</h2>
                <div className= "form-group">
                    <label>Username/Email</label>
                    <input 
                          value={identifier}
                          onChange = {this.onChange}            
                          className={ !errors.identifier ? "form-control" : " form-control is-invalid" }
                          name= "identifier"
                          aria-describedby="emailHelp" 
                          placeholder="Enter Username/Email"
                    />
                   {errors.identifier && <span className="help-block invalid-feedback">{errors.identifier}</span>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                          value={password}
                          onChange={this.onChange}
                          type="password"
                          className={ !errors.password ? "form-control" : " form-control is-invalid" }
                          name="password" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Password"
                    />
                    {errors.password && <span className="help-block invalid-feedback">{errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>Login</button>
            </form>
        );
    }


}
LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}
export default connect(null,{login})(LoginForm);