import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState("")
  const [button, setButton] = useState("")

function handlePassword(e) {
  setPassword(e.target.value)
  console.log(`Entering password ...`)
  }
  function handleFocus(e) {
    setButton(e.preventDefault())
    setButton(e.target.value)
    console.log('Good!')
  }
  function handleBlur(e) {
    setButton(e.preventDefault())
    setButton(e.target.value)
    console.log('Hey! Eyes on me!')
  }
  return(
    <>
    <Keypad passWord={password}  handlepassword={handlePassword}/>
    <EyesOnMe Button={button} handlefocus={handleFocus} handleblur={handleBlur} />
    </>
      )
  }

ReactDOM.render(
  <>
<App />
  </>,
  document.getElementById('root')
);
