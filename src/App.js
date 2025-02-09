import './App.css';
import React, { useState } from 'react';
import TextBox3 from './components/TextBox3';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
// import { useState } from 'react';
// import React from "react";
// import  Switch from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [navBtn, setNavBtn] = useState("Change Theme");
  const [screen, setScreen] = useState('light');
  const [aboutBtn, setAboutBtn] = useState("change Now !")

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Your Dark Mode is Enabled', "Sucess");
      setNavBtn("Dark Now");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Your Dark Mode is Disabled', "Sucess");
      setNavBtn("Light Now");
    }
  }

  const screenMode = () => {
    if (screen === 'light') {
      setScreen('dark')
      setAboutBtn('Dark Mode')

    } else {
      setScreen('light')
      setAboutBtn('Light Mode')
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };


  return (
    <>
      <Router>
        <Navbar Textutils="Textutils" mode={mode} toggleMode={toggleMode} navBtn={navBtn} />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact path="/About"
            element={<About aboutme="About Us" aboutBtn={aboutBtn} mode={mode} toggleMode={toggleMode} />}
          />
          <Route exact path="/TextBox3"
            element={<TextBox3 heading="Sting Converter Tool : Character Counter , Word Counter , Remove extra spaces" mode={mode} showAlert={showAlert} />}
          />

          <Route exact path="/contact"
            element={<Contact heading="Contact Us" mode={mode} />}
          />
        </Routes>

      </Router>
    </>
  );
}

export default App;
