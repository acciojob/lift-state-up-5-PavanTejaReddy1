
import React from "react";
import './../styles/App.css';
import { useState } from 'react'
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
    <h1>Parent Component</h1>
    <Login setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App


