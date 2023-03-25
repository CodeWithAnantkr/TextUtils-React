// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(()=>{
        setAlert(null);
       }, 1500
       );
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#20204e';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
    return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    {/* <Router> */}

    <Navbar title="TextUtils" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
     <div className="conatiner">
           {/* <Routes>
          <Route exact path="/about"
          element={<About/>}>
          </Route>
        <Route exact path="/"element= */}
          <About mode={mode}/>
          <TextForm showAlert= {showAlert} heading =" Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          {/* </Route>
          </Routes> */}
    
    </div>
    {/* </Router> */}
    
   </>
    
  );
}

export default App;
