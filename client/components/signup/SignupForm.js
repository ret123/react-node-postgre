import React from 'react';
import timezone from '../../data/timezone';
import map from 'lodash/map';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        const options = map(timezone,(val,key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Join our community!</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                          value={this.state.username}
                          onChange={this.onChange}
                          type="username"
                          className="form-control"
                          name="username" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Username"
                    />
                   
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                          value={this.state.email}
                          onChange={this.onChange}
                          type="email"
                          className="form-control"
                          name="email" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Email"
                    />
                   
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                          value={this.state.password}
                          onChange={this.onChange}
                          type="password"
                          className="form-control"
                          name="password" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter Password"
                    />
                   
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                          value={this.state.passwordConfirmation}
                          onChange={this.onChange}
                          type="password"
                          className="form-control"
                          name="passwordConfirmation" 
                          aria-describedby="emailHelp" 
                          placeholder="Confirm Password"
                    />
                   
                </div>
                <div className="form-group">
                    <label>Timezone</label>
                    <select 
                          value={this.state.timezone}
                          onChange={this.onChange}
                          className="form-control"
                          name="timezone" 
                          aria-describedby="emailHelp" 
                         
                    >
                        <option value="" disabled>Choose your timezone</option>
                        {options}
                    </select>
                   
                </div>
                
              
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        );
    }
}
export default SignupForm;