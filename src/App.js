import React,{Component} from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component  {
  state = {
    persons:[
      {id: 'dasd',name:"Manish",age:52},
      {id: 'csdfsd1',name:"Manu",age:34},
      {id:'dvf2',name:"Bijay",age:40},
      {id:'dsf3sd',name: "Vishwas", age: 21}
    ],
    otherState:"Hello from here",
    showPersons: false
  }

  switchNameHandler = (newName) =>{
    // Don't do this : this.state.persons[0].name ="Maannisshhaa";
    this.setState({
      persons: [
          { name: newName, age: 52 },
          {name: "Manu", age:34},
          {name: "Bijay", age: 24}
        ]
    })
  }

  deletePersonHandler = (personIndex)=> {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event,id) => {

    //finding index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //making copy of persons
    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.person);

    //changing name through event
    person.name = event.target.value;
    //making copy of persons
    const persons = [...this.state.persons];
    //setting copied person with updated person
    persons[personIndex] = person;
    //setting state with copied person
    this.setState({persons: persons});

    // this.setState({
    //   persons:[
    //     {name: 'Manish', age: 52},
    //     {name: "Manu", age: 34},
    //     {name: event.target.value, age: 24}
    //   ]
    // })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      fontFamily:'sans-serif',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person click={()=> this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed= {(event)=> this.nameChangedHandler(event,person.id)} />
            })}
        </div> 
      );
      style.backgroundColor = 'red'
    }
    
    const classes = [];
    if(this.state.persons.length <=2 ){
      classes.push('red');
    }
    if(this.state.persons.length <=1 ){
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>HI I Am BIJAy</h1>
          <p className={classes.join(' ')}> I am a React</p> 
            {/* <button onClick={this.switchNameHandler.bind(this, 'Billu Barber')}>Switch Name</button> */}
            {/* <button style={style} onClick= {()=> this.switchNameHandler('BILLU')} >Switch Name</button> */}

            <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
            {persons}
        </div>
      
      //React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Hi i am Hello World'))
    );
 }
} 

export default App;
