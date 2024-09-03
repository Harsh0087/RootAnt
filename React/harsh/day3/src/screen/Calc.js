import React, { useState } from 'react'

export default function Calc() {
    const[one,getNumberOne]=useState("")
    const[two,getNumberTwo]=useState("")
    const [three, getNumberThree] = useState("")
    const [result, getResult] = useState("")
    
  function plus() {
      
        getResult(parseInt(one) + parseInt(two) + parseInt(three));
    document.getElementById("result").value = result;
    }
    function min() {
      getResult(parseInt(one) - parseInt(two) - parseInt(three));
      document.getElementById("result").value = result;
    }
    function div() {
      getResult(parseInt(one) / parseInt(two) / parseInt(three));
      document.getElementById("result").value = result;
    }
    function multi() {
      getResult(parseInt(one) * parseInt(two) * parseInt(three));
      document.getElementById("result").value = result;
    }
    return (
      
      <div>
          <h1>Calculator</h1>
          <input id='one' type='number' placeholder='enter number1' onChange={(oneVAlue)=>getNumberOne(oneVAlue.target.value)}></input>
            <input id='two' type='number' placeholder='enter number2' onChange={(twoVAlue) => getNumberTwo(twoVAlue.target.value)} ></input>
            <input id='three' type='number' placeholder='enter number3' onChange={(threeVAlue) => getNumberThree(threeVAlue.target.value)}></input><br />
        <input id='result' type='number' placeholder='result' onChange={(rest) => getResult(rest.target.value)}></input><br/>
          <button onClick={plus}>+</button>
          <button onClick={min}>-</button>
          <button onClick={div}>/</button>
          <button onClick={multi}>*</button>
    </div>
  )
}
