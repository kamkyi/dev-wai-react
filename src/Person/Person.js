import React , {Component} from 'react';
import './Person.css';

class Person extends Component{
    render() {
        return (
            <div className="Person" onClick={this.props.click}>
               <p>
                 Name : {this.props.name} <br/>
                 Age : {this.props.age} <br/>
                 Email : {this.props.email} 
               </p>
            </div>
        );
    }
}

export default Person;