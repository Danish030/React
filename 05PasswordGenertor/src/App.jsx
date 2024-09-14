import { useEffect, useRef } from "react";
import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+*/+[]{}~`";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipbaord = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Function to check password strength
  const passStrength = useCallback(() => {
    let score = 0;
    if (password.length >= 8) score += 1; // At least 8 characters
    if (/[A-Z]/.test(password)) score += 1; // Contains uppercase letters
    if (/[0-9]/.test(password)) score += 1; // Contains numbers
    if (/[^A-Za-z0-9]/.test(password)) score += 1; // Contains special characters
    return score; // Strength score (0-4)
  }, [password]);

  // useEffect to update password strength
  useEffect(() => {
    const strengthScore = passStrength();
    const strengthLabel =
      strengthScore === 4
        ? "Strong"
        : strengthScore === 3
        ? "Medium"
        : strengthScore === 2
        ? "Weak"
        : "Very Weak";
    setStrength(strengthLabel);
  }, [password, passStrength]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-center text-2xl my-2 text-cyan-200">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipbaord}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <p>Strength: {strength}</p>
        </div>
      </div>
    </>
  );
}

export default App;
