import React,{Children, useState} from "react";
import "./../styles/App.css";


function App() {
  
  
  const [data, setData ] = useState();

   
  var x=true
  
  const click=()=>{
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    
    if(x){
     
      x=false
      
      let div=document.querySelector('#main')
      let p=document.createElement('p')
      p.setAttribute('id','para');
      div.insertBefore(p,div.children[0])
      

    }
    let p=document.querySelector('#para')
    p.textContent="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  

    
    
     
    
  }
  
  return (
    <div id="main">
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
