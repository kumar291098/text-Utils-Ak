// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';

// import Switch from "react-router-dom";
function App() {
  const [alert, setAlert]=useState(null)
  const[mode, setMode]=useState('dark')
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='light')
      {
        setMode('dark')
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        showAlert("Dark mode have been enable","success")
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
        showAlert("light mode have been enable","success")
      }
  }

  return (
    <>
      {/* <Router>
        <Navbar title='TextUtils' about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          
          <Routes>
          <Route exact path="/about" element={<About />}/>
            
            

          
          <Route exact path="/"  element={<TextForms heading="Enter the text to analyze" mode={mode}    showAlert={showAlert}   />}/>
            
              
        </Routes>
        </div>
    </Router> */}

    <div className="container">
    <Navbar title='TextUtils' about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForms heading="Enter the text to analyze" mode={mode}    showAlert={showAlert}   />
    <Alert alert={alert}/>
    <About />
    </div>
      </>
  );
}

export default App;
