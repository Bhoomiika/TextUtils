import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link,
  //BrowserRouter
}
  from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); // whether dark mde is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1F2022';

      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }


  return (
    <><Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/About" element={<About mode={mode} />}></Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />}></Route>
          <Route exact path="/Home" element={<Textform showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />}></Route>
          {/* <About />*/}
        </Routes>
      </div>

    </Router>
    </>
  );
}

export default App;
