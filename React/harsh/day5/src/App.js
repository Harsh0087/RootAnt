import './App.css';
import React,{useState} from 'react';



function App() {
  //state manager
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {}
    if (!name) {
      errors.name = "Name is required.";
    }

    if (!age) {
      errors.age = "Age is required.";
    } else if (age < 20 || age > 30) {
      errors.age = "Invalid Range";
    }
    if (!gender) {
      errors.gender = "Gender is required"
    }
    // console.log(errors)
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      alert("ok")
    } else {
      setErrors(err)
    }
  }





  return (
    <div style={{ margin: '50px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

        </div>
       

        <div>
          <label>Age (20-30):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            // required
          />
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            // required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <span style={{ color: 'red' }}>{errors.gender}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
        
    </div>
  );

}

export default App;
