import React, {Component, useState} from "react";
import "./../styles/App.css";




function App() {

  let run=()=>{
    document.getElementById('para').innerText="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }
  
  return (
    <div id="main">
      <p id="para"></p>
      
      <button id="click" onClick={run}>para</button>
    </div>
  );
}


export default App;
