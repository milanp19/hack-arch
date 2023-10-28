import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const page = () => {
  return (
    <div className='login_container'>
      <div class="login-page">
    <div class="form">
      
      <form class="login-form">
        <input type="text" placeholder="username" style={{borderRadius:"10px"}}/>
        <input type="password" placeholder="password" style={{borderRadius:"10px"}}/>
        <button>login</button>
        
        <p class="message">Not registered? <a href="#">Create an account</a></p>
      </form>
      <button type="button" class="login-with-google-btn">
      <FcGoogle />
  Sign in with Google
    </button>
    </div>
  </div>
    </div>
  )
}

export default page