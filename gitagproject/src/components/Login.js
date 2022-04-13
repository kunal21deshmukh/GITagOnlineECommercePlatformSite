import React from 'react'
import LoginPage from './LoginPage'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
         <Link to='/LoginPage'>
    <button type="button" class="btn btn-dark">Login</button>
    </Link>
    </div>
  )
}

export default Login;