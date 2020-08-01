import React , {Component} from 'react';
import './Person.css';

class Person extends Component{
    render() {
        return (
            <div className="Person">
               <p>
                 Name : {this.props.name} <br/>
                 Age : {this.props.age} <br/>
                 Email : {this.props.email} 
               </p>
               <input type='text'/>
            </div>
        );
    }
}

export default Person;