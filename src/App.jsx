import { useState, useCallback, useEffect ,useRef } from "react";

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
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);
   
  const passwordRef = useRef(null);
  const passwordcopy = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenrator();
  }, [length, numberAllow, charAllow, passwordGenrator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-yellow-500">
      <h1 className="text-black text-center my-4"> Password Genrator</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
      </div>
        <button 
        onClick={passwordcopy}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Copy
        </button>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6}
          max={15}
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Lenght : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
         defaultChecked= {numberAllow}
         id="numebrInput"
          className="cursor-pointer"
          onChange={()=>{
            setNumberAllow((prev)=>!prev);
          }}
          />
          <label>Add Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
         defaultChecked= {charAllow}
         id="charInput"
          className="cursor-pointer"
          onChange={()=>{
            setcharAllow((prev)=>!prev);
          }}
          />
          <label>Add Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
