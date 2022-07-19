import React,{useState} from "react";
import "./../styles/App.css";


function App() {
  const [data, setData ] = useState([]);
  let x=true;

  const click=()=>{
    
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
   if(x){
    let p=document.createElement('p');
    p.setAttribute('id','para');
    let div=document.querySelector('#main');
    div.insertBefore(p,div.children[0])
    x=false
   }
    
   

    
  }
  
  return (
    <div id="main">
      
      {/* <p id="para">{data}</p> */}
      <button id="click" onClick={click}>Para</button>
    </div>
  );
}


export default App;
