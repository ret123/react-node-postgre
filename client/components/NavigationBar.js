import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions';

class NavigationBar extends React.Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const {isAuthenticated} = this.props.auth;
        const userLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"  >
                    <a  href="#" onClick={this.logout.bind(this)} className="nav-link" style={{display: 'inline'}}>Logout</a>
                   
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active"  >
                    <Link to="/signup" className="nav-link" style={{display: 'inline'}}>Sign Up</Link>
                    <Link to="/login" className="nav-link"  style={{display: 'inline'}}>Login</Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <Link to="/" className="navbar-brand">Reddice</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                   {isAuthenticated ? userLinks : guestLinks}
                </div>
            </nav>
        );
    }
   
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps,{logout})(NavigationBar);