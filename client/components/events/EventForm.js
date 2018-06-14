import React from 'react';
import {connect} from 'react-redux';

import {createEvent} from '../../actions';


class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
           
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

    
    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
      
    }
    render() {
        const {title,isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
             
                <h2>Create createEvent</h2>
                <div className= "form-group">
                   
                    <input 
                          value={title}
                          onChange = {this.onChange}            
                          
                          name= "title"
                         
                    />
                  
                </div>
              
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        );
    }


}

export default connect(null,{createEvent})(EventForm);