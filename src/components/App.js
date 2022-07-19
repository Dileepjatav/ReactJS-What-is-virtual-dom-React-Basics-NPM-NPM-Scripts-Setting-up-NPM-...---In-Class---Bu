import React,{useState} from "react";
import "./../styles/App.css";


function App() {
  const [data, setData ] = useState();
  
  const click=()=>{
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")

    let p=document.querySelector('p');
    // p.setAttribute('id','para')
     
    
  }
  
  return (
    <div id="main">
      
      <p id="para">{data}</p>
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
