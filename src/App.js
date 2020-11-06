import './App.css';
import React, {useState} from 'react';
import Person from './Person/Person'

const App = props =>{
  // state ={
  //   person:[
  //     {name:'Dipen', age:23},
  //     {name:'Ketul', age:25},
  //     {name:'Divya', age:24}
  //   ]
  // }
  const [personState, setPersonState ] = useState({
    person:[
      {name:'Dipen', age:23},
      {name:'Ketul', age:25},
      {name:'Divya', age:24}
    ],
    otherState:'some other value'
  });
  const switchNameHandler = (newName) =>{
    //console.log("clicked");
    setPersonState({person:[
      {name:newName, age:23},
      {name:'KetulPatel', age:25},
      {name:'DivyaPatel', age:24}
    ]
   });
   }

   const nameChangeHandler = (event) =>{
    setPersonState({person:[
      {name: event.target.value, age:23},
      {name:'KetulPatel', age:25},
      {name:'DivyaPatel', age:24}
    ]
   });
   }
  const style = {
    backgroundColor:'white',
    fony:'inherit',
    border:'1px solid blue',
    padding:'8px'
  };

  return (
    <div className="App">
       <h1>HI THIS IS DEMO....</h1>
       <p>This is paragraph</p>
       <button
        style={style}
        onClick={switchNameHandler.bind(this,'Dipen Patel')}>Switch Name</button>
       <Person 
        name={personState.person[0].name} 
         age={personState.person[0].age} 
         click={switchNameHandler.bind(this,'Dipen')}
         changed={nameChangeHandler}>
           My City: Ahmd 
        </Person>
       <Person 
       name={personState.person[1].name} 
       age={personState.person[1].age}/>
       <Person 
       name={personState.person[2].name} 
       age={personState.person[2].age}/>
    </div>
  );
  // return React.createElement('div',{className:"App"},React.createElement('h1',null,"HI THIS IS DEMO...."))
  }

export default App;


