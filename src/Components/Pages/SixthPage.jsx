import React from 'react'
import { useState } from 'react'

export const SixthPage = () => {
    const [inpt, setInpt] = useState(null);
    const [out, setOut] = useState(null);
    const handle = (e) =>{
        e.preventDefault();
        let data = inpt.split(",").join("");
        let data1 = parseFloat(data.match(/[\d\.]+/))
        setOut(data1);
        setInpt("");
    }
  return (
    <div style={{textAlign: "center"}}>
        <form onSubmit={handle}>
        <input type="text" value={inpt} onChange={(e) => setInpt(e.target.value)} />
        <button type='submit'>Submit</button>
        <h3>{out}</h3>
        </form>
    </div>
  )
}
