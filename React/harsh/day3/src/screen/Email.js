import React, {useState} from 'react'

export default function Email() {

    const [email, setEmail2] = useState("");
    const [signal, setSignal] = useState(false);
    function show() {
        
    
        if (email === "harsh@harsh.com") {
            setSignal(true);
        } else {
            setSignal(false);
        }
}
  return (
      <div>
          <h1>Email Validation revision</h1>
          <label>Email: </label><input type='email' placeholder='email' onChange={(em)=>setEmail2(em.target.value)}></input>
          <button onClick={show}>Submit</button>

          {signal===true && <div>Email is valid.</div>}
          {signal===false && <div>Email is not valid.</div>}
    </div>
  )
}
