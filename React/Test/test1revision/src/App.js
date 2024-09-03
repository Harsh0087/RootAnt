
import { useState } from 'react';
import './App.css';

function App() {
  const [bud, setBudget] = useState(0);
  const [cur, setCur] = useState(0);
  const [remain, setRem] = useState(null);
  const show = () => {
    const dynamicDiv = document.getElementById("dynamic")
    const newDiv = dynamicDiv.cloneNode(true)  //this will make the clone of the div.
    dynamicDiv.parentNode.appendChild(newDiv);
    const newInput = newDiv.querySelector(".sum")
    const newInput2 = newDiv.querySelector(".title")
    newInput.value = ""
    newInput2.value = ""
  
    if (newInput) {
      newInput.addEventListener('keyup', sumCalc) //this will add the new event to the clones.
    }
    
    

  }
  const sumCalc = () => {
    let total = 0;

    const amtElement = document.getElementsByClassName("sum")
    for (let i = 0; i < amtElement.length; i++) {
      let value = parseFloat(amtElement[i].value) || 0;
      total += value;

    }
    setCur(total);
    setRem(bud - total)
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: "green", marginTop: "20px", fontWeight: "bold", fontStyle: "italic", textDecoration: "underline" }}>
        Budget Management
      </h1>
      Approved<input style={{ width: "60px" }} type='text' placeholder='Final Amount' id='finAmt' onChange={(e) => setBudget(e.target.value)} />
      <button onClick={show}>+</button>
      <p style={{ textAlign: "right", marginRight: "100px" }}>
        {bud != 0 ? bud : "0"}
        current sum{cur}
      </p>
      <input type='number' onChange={(e) => setRem(e.target.value)} value={remain} placeholder='Remaining' disabled />
      <div id='dynamic'>
        <input type='text' style={{ marginTop: "20px", width: "100px", marginRight: "50px" }} placeholder='Expense Name' className='title'  />
        <input type='text' style={{ width: "100px" }} placeholder='Amt' className='sum'  onChange={sumCalc} />
      </div>
    </div>
  );
}

export default App;
