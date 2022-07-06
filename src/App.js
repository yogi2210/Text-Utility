import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode ('dark')
      document.body.style.backgroundColor = '#041328';
      showAlert("dark mode has been elabled", "success")
    }else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been elabled", "success")
    }
  }
  return (
   <>
   
   <Navbar title = "Textutils" about="About" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert}/>
   <div className="container">
   <Routes>
          <Route path="/" element ={<About/>}/>
            
          
          
          <Route path="/welcome" >
          <TextForm showAlert = {showAlert} heading = "Enter the text to anylize" mode={mode}/>
          </Route>
        </Routes>
    </div>
    
   </>
  );
}

export default App;
