import React from "react";

export default function Login({setIsLoggedIn}) {

  return (
    <form onSubmit = {(e)=>{
      e.preventDefault();
      setIsLoggedIn(true)
    }}>
      <label htmlFor="name">Username: </label>
      <input type="text" id="name"></input>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password"></input>
      <input type="submit" value="Login"></input>
    </form>
  )
}
