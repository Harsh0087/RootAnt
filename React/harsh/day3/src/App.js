import React,{ useState } from 'react';
import './App.css';
import Email from './screen/Email';
import Calc from './screen/Calc';
function App() {
  const [email, setEmail] = useState('');
  const [Signal, setSignal] = useState(false);
  function show() {
    if (email === "a@a.a") {
    setSignal(true)
    } else {
      setSignal(false)
    }
  }
  return (
    <div className="App">
      {/* <h1 style={{ textAlign: "center" }}>E-mail Validation</h1>
      <label>Enter E-mail :   </label><input type='email' placeholder='youremail@email.com' onChange={(e)=>setEmail(e.target.value)}>
      </input>
      <button onClick={show}>Submit</button>
      {Signal === true && <div>Email is valid</div>}
      {Signal === false && <div>Email is not valid.</div>} */}
      {/* <Email /> */}
      <Calc />
    </div>
  );
}
  
export default App;
