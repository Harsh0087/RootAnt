import React,{ useState } from 'react';
import './App.css';
import OtpValidation from './view/OtpValidation';

function App() {

  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")
  const[gender,setGender]=useState("")
  const[error,setError]=useState({})

  const validate = () => {
    const error = {};
    if (!name) {
      error.name = "Name Required";
    }
    if (!email) {
      error.email = "Email Required";
    }
    if (!pass) {
      error.pass = "Password Required";
    }
    if (!gender) {
      error.gender = "Gender Required";
    }
    return error;
  }
  

  const submitForm = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      alert("Form Submitted")
    } else {
      setError(err);
    }
    
  }

  return (
    <div className="App">

      <form align="center" onSubmit={submitForm}>
        <h1 >Form Validation</h1>
        <div>

        <label for="nm">Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e)=>setName(e.target.value)}
          >
          </input>
          {error.name && <span style={{color:"red"}}>{error.name}</span>}
        </div>
        <div>
        <label for="em">Email</label>
        <input
          type="email"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          >
          </input>
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}

        </div>
        <div>
          
        <label for="pass">Password</label>
        <input
          type="password"
          value={pass}
          placeholder="Enter Your Password"
          onChange={(e) => setPass(e.target.value)}

        >
          </input>
          {error.pass && <span style={{ color: "red" }}>{error.pass}</span>}
        </div>
        <div>
         
        <label for="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
    value={gender}
          >
            <option value={"none"} selected>None</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
          </select>
          {error.gender && <span style={{ color: "red" }}>{error.gender}</span>}
        </div>
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>

      
      </form>
      {/* <OtpValidation/> */}
    </div>
  );
}

export default App;
