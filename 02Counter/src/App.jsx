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

let [color, setColor] = useState("red");
const changeColor = () => {
  let hex = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
 document.body.style.backgroundColor = color;
  setColor(color);
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

      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default App
