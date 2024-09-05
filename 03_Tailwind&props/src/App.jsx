/* eslint-disable no-unused-vars */
import Card from './componenets/Card';

import './App.css'

function App() {
  let myObj = {
    username: 'Ahmed',
    age: 20
  }
  
  return (
    <>
      <h1 className='bg-violet-900 rounded-xl'>Tailwind css</h1>
      <Card username="chai or code"/>
      <Card username = "Danish" btnText={"Click me"}/>
    </>
  );
}

export default App
