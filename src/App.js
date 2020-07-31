import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test/Test';

class App extends Component {

  state = {
     username:'Jhon Doe'
  };

  typeEventHander = (event) => {
     this.setState({
          username:event.target.value
     });
  }

   render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Dev. Wai 's React
          </p>
          <Test username={this.state.username} changed={this.typeEventHander.bind(this)}/>
        </header>
      </div>
    );
   }

}

export default App;
