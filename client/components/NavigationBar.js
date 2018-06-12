import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <Link to="/" className="navbar-brand">Reddice</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/signup" className="nav-link">Sign Up <span className="sr-only">(current)</span></Link>
                </li>
               
              
               
                </ul>
            </div>
        </nav>
    );
}