
import React from "react";
import './../styles/App.css';
import { useState } from 'react'
import Login from "./Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    <login setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default App
