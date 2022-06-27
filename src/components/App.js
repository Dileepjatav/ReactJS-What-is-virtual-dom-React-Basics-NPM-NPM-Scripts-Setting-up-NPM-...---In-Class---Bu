import React, {Component, useState} from "react";
import "./../styles/App.css";




function App() {
  const [data, setData ] = useState();



  

  const click=()=>{
    
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
    let x=document.querySelector('p');
    x.setAttribute("id","para");
    

   
  }
  
  return (
    <div id="main">
      <p >{data}</p>
      
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
