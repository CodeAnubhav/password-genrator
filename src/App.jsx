import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvqwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "{}[]!@#$%^&*()";
    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
  }, [length, numberAllow, charAllow, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-yellow-500">
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          Password Genrator
          <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          />
        </div>
      </div>
    </>
  );
}

export default App;
