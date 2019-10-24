import React, { Component } from 'react';
/*
import logo from './logo.svg';  ==> deleting logo.svg file as not needed */
import './App.css';
import MyPerson from './Person/Person';
import PersonProp from './Person/Person_Props';


class App extends Component {

  state = {
    persons:[
      {name:'Max' , age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:26}
    ],
    otherState : 'some other value',
    showPersons:false
  }

switchNameHandler = (newName) => {
  console.log('Button Clicked !!! ');
  this.setState({
    persons:[
      {name: newName, age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:27}
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons:[
      {name: 'Max', age:28},
      {name:event.target.value , age:29},
      {name:'Stephanie' , age:26}
    ]
  })
}


togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
}
  render() {
          const style = {
              backgroundColor : 'white',
              font:'inherit',
              border:'1px solid blue',
              padding:'8px',
              cursor:'pointer'
          };
let persons=null;
if(this.state.showPersons){
persons=(
    <div>
            <PersonProp 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />

            <PersonProp 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this,'Max !!')}
            changed={this.nameChangedHandler}
            > My Hobby : Racing
            </PersonProp>

            <PersonProp 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
    </div> 
      );
}

return (
  <div className="App"> 
  
<h2> Using State </h2>
<h1>Hi I am reactApp</h1>
<h1>This is really working !!!!</h1>



<button
style={style}
onClick={this.togglePersonsHandler}>Toogle Persons </button>
{persons}
      </div>
    );
  }
}

export default App;
