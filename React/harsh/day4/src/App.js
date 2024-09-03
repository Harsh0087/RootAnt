import './App.css';
import React,{useState} from 'react';

function App() {
  const [ incre, setIncre ] = useState(0);
  const show = ()=>{
    setIncre(incre + 1);
  }
  const show2 = ()=>{
    setIncre(incre - 1);
  }
  return (
    <div className="App">
      <h1>Show</h1>
      <p>{incre}</p>
      <button onClick={show}>+</button>
      <button onClick={show2}>-</button>
    </div>
  );
}

export default App;
