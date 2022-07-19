import React,{Children, useState} from "react";
import "./../styles/App.css";

var x=true
function App() {
  
  
  const [data, setData ] = useState();

   
  
  function show(){
      let div=document.querySelector('#main')
      let p=document.createElement('p')
      p.setAttribute('id','para');
      div.insertBefore(p,div.children[0])

  }
 
  
  const click=()=>{
    
    x?show():null
    

    let p=document.querySelector('#para')
    
    x?p.textContent="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy":null
    

    
    x=false
  }
  
  return (
    <div id="main">
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
