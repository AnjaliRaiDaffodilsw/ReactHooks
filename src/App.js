import React, { useState } from 'react';

// useState is a special function which returns an array where first argument is a variable and second argument is a function

import './App.css';

function App() {
//we can update the first value of useState 
  // var name = useState('Anjali Rai')[0];
  // console.log(name);
  const [state,toggleState] = useState(true);

 
  const changeName = () => {
    // using useState hooks
    toggleState("Vidhya Rai");

  }

  return (
    <div >
       <h1> {state ? "What is your Name ?" : "Anjali Rai"}</h1>
     
      <button className = "btn"
      onClick = { () => toggleState(!state)}
      >Click Me Plz</button>
    </div>
  );
}

export default App;
