import { useState } from 'react';
import './App.css'

function App() {
let  [counter,setCounter] = useState (2)


// let counter = 1;
const increment = () => {
  setCounter(counter+1)
}
const decrement = () => {
  if (counter === 0) {
    alert("You have reached your limit");
  } else {
    setCounter(counter - 1);
  }
};

  return (
    <>
     <h1>Chai or React</h1>

     <h2>Counter value:{counter}</h2>

     <button
     onClick={increment}
     >Increment</button>

      <button
      onClick={decrement}
      >Decrement</button>
    </>
  )
}

export default App
