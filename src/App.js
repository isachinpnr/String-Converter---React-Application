import './App.css';
import React, { useState } from 'react';
import TextBox3 from './components/TextBox3';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import { useState } from 'react';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert('Your Dark Mode is Enabled', "Sucess");
      // <i class="bi bi-moon-fill"></i>
     
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Your Dark Mode is Disabled', "Sucess");
      // <i class="bi bi-moon-stars"></i>
      
    }
  }


  return (
    <>
      <Navbar Textutils="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextBox3 heading="A string Converter Tool" mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
