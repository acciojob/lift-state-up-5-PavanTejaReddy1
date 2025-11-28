
export default function Login(isLoggedIn) {

  return (
    <form onSubmit = (()=>isLoggedIn(true))>
      <label for="name">Username: </label>
      <input type="text" id="name"></input>
      <label for="password">Password: </label>
      <input typr="password" id="password"></input>
    </form>
  )
}
