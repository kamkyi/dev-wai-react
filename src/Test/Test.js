import React ,{Component} from 'react';

class Test extends Component{
     render(){
         return (
             <div className="Test">
                  <label>Type Any :</label>
                   <p>Hello : {this.props.username}</p>
                  <input type="text" onChange={this.props.changed} value={this.props.username}/>
             </div>
         );
     }
}

export default Test;