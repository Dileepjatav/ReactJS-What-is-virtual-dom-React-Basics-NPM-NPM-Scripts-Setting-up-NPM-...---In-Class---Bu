import React,{Children, useState} from "react";
import "./../styles/App.css";


function App() {
  
  
  // const [data, setData ] = useState();

   
  var x=true
  
  const click=()=>{
    
    // setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    // let p=document.querySelector('p');

    if(x){
      let div=document.querySelector('#main')
      let p=document.createElement('p')
      p.setAttribute('id','para');
      div.insertBefore(p,div.children[0])
      x=false

    }
    let p=document.querySelector('#para')
    

    p.innerHTML="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    
     
    
  }
  
  return (
    <div id="main">
      
      {/* <p id="para">{data}</p> */}
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
