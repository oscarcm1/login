import React from 'react'
import "./style.css"
import {GoogleIcon , FacebookIcon } from "./Icons"

function Card() {
  return (

    <section className='card'>

      <div className='circle'>
        <div className="circle2"></div>
      </div>

      <section className='card-login'>
        <form action="" className='login'>
          <h1>Sign in</h1>
          <span className=''>New user?  <a href="#">Create an Account</a></span>
          <input type="text" placeholder='Email Adress' />
          <input type="text" placeholder='Password' />
          <button>Login</button>
        </form>

        <span>Or</span>

        <section className='social-media'>
          <button> <GoogleIcon/>   Google</button>
          <button> <FacebookIcon/> Facebook</button>
        </section>
      </section>

    </section>
  )
}

export default Card