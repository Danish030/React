 
import { useState, useCallback,useEffect,useRef} from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //refhook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+*/+[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

useEffect(()=>{generatePassword()},[length,numAllowed,charAllowed,generatePassword])

const copyPassword = useCallback(()=>{
  passwordRef.current?.select()
     passwordRef.current?.setSelectionRange(0, 15);
window.navigator.clipboard.writeText(password)
},[password])



  return (
    <>
      <h1 className="text-4xl font-bold text-green-700">Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={copyPassword}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">

            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value))
              }}
            />
            <label >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label>Chracter</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
