import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
     persons: [
        {name:'Wai Hyn Htun',age:'22',id:'123344',email:'wai@gmail.com'},
        {name:'Sai kam',age:'22',id:'123343',email:'sai@gmail.com'},
        {name:'Ma yee',age:'22',id:'1233424',email:'ye@gmail.com'}
     ],
     showHide:true
  };

  typeHandler = (event,personId) => {

     const personIndex = this.state.persons.findIndex(p => {
          return p.id === personId;
     });
     const person = { ...this.state.persons[personIndex]};

     person.name = event.target.value;

     const persons = [
        ...this.state.persons
     ];

     persons[personIndex] = person;

     this.setState({
       persons:persons
     });
  }

  showHide = () => {
      let showHide = !this.state.showHide;
       this.setState({
        showHide: showHide
       });
  }

  clickDeleteHandler = (personIndex) => {
        const mutated = this.state.persons;
        mutated.splice(personIndex,1);
        this.setState({persons:mutated});
  }

   render(){
    let persons = this.state.persons.map((person,index) => {
       console.log('hello');
      return <Person type={(event) => this.typeHandler(event,person.id)} name={person.name} age={person.age} email={person.email} key={person.id} click={this.clickDeleteHandler.bind(this,index)}/>
    });
    return (
      <div className="App">
        <button onClick={this.showHide}>{this.state.showHide?'Hide':'Show'}</button>
         {this.state.showHide?persons:null}
      </div>
    );
   }

}

export default App;
