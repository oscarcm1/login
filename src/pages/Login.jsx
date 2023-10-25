import React, { useState } from 'react'
import "./login.css"


function Login() {

    const [show, setShow] = useState(true);

    return (
        <div className='login'>
            {show ? (
                <div className='card-login'>
                    <div className='change'> <button type="button" onClick={() => { setShow(!show); }}><i className="bi bi-caret-right-fill"></i></button></div>
                    <h2>Login</h2>
                    <div className='picture'><i className="bi bi-person-circle"></i></div>
                    <div className='info'>
                        <input placeholder='Email' />
                        <input placeholder='Password' />

                        <section className=''>
                            <span>
                                <input type='checkbox' />
                                <p>Remember me</p>
                            </span>

                            <span>
                                <a href=''>Forgot Password?</a>
                            </span>
                        </section>
                    </div>
                    <button>Login</button>
                </div>
            ) : (
                <div className='card-login'>
                    <div className='change'> <button type="button" onClick={() => { setShow(!show); }}><i className="bi bi-caret-left-fill"></i></button></div>
                    <h2>Register</h2>
                    <div className='picture'><i className="bi bi-person-circle"></i></div>
                    <div className='info'>
                        <input placeholder='UserName' />
                        <input placeholder='Email' />
                        <input placeholder='Password' />
                        <input placeholder='Repeat Password' />
                        <section className=''>
                            <span>
                                <input type='checkbox' />
                                <p>Remember me</p>
                            </span>

                            <span>
                                <a>Forgot Password?</a>
                            </span>
                        </section>
                    </div>
                    <button>Register</button>
                </div>
            )}

        </div>
    )
}

export default Login