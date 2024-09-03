import React, { useState } from 'react'

export default function OtpValidation() {
    const [box1, setBox1] = useState("")
    const [box2, setBox2] = useState("")
    const [box3, setBox3] = useState("")
    const [box4, setBox4] = useState("")
 
    // setBox1(document.getElementById("one").value)

    const submit = () => {
        if (box1) {
            box1.length=1
            document.getElementById("two").focus();
        }
    }
    // submit();
    return (
        <div>
            <div className="container">
                <h1>OTP Check</h1>
                <input
                    id="one"
                    value={box1}
                    type="number"
                    placeholder="0"
                    onChange={(e)=> setBox1(e.target.value)}
                ></input>
                <input
                    id="two"
                    value={box2}
                    type="number"
                    placeholder="0"
                    onChange={(e) => setBox2(e.target.value)}
                ></input>
                <input
                    id="three"
                    value={box3}
                    type="number"
                    placeholder="0"
                    onChange={(e) => setBox3(e.target.value)}
                ></input>
                <input
                    id="four"
                    value={box4}
                    type="number"
                    placeholder="0"
                    onChange={(e) => setBox4(e.target.value)}
                ></input>
                <div>
                    <p>1322</p>
                </div>
                <button onclick={submit}>Submit</button>
            </div>
        </div>
    )
}
