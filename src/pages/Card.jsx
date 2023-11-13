import React from 'react'
import "./style.css"
import A from "../assets/person.svg"

function Card() {
    return (
        <section className='box'>
            <section className='login'>

                <div className='left'>
                    <img src={A} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies varius, convallis pulvinar orci risus auctor torquent fusce mattis. </p>
                </div>

                <div className='right'>
                    <h1 className='title'>Welcome back</h1>
                    <form className='data'>
                        <p className=''>Login your accunt</p>
                        <span>Username</span>
                        <input type="text" />
                        <span>Password</span>
                        <input type="password" placeholder='' />
                        <div className='links'>
                            <button>Login</button>
                            <a href=''>Create Account</a>
                        </div>
                    </form>
                    <a href='' className='footer'>Forgot password?</a>
                </div>
                
            </section>
        </section>
    )
}

export default Card