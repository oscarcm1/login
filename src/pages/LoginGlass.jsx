import React from 'react'
import "./login-glass.css"

function LoginGlass() {
    return (
        <div className='login'>
            <div className='card-box'>
                <div className='information'>
                    <h1>Logo</h1>
                    <h2>Welcome</h2>
                    <h3>to Our New Website</h3>
                    <p>Lorem ipsum,dolor sit amen consenter adipisicing elit. Beatae, asperiores</p>
                    <div className='social-media'>
                        <a><i className="bi bi-instagram"></i></a>
                        <a><i className="bi bi-facebook"></i></a>
                        <a><i className="bi bi-github"></i></a>
                    </div>
                    <span>oscardigital.website</span>
                </div>
                <div className='form'>
                    <h2>Login</h2>
                    <div className='data'>
                        <label><input placeholder='Email' /></label>
                        <label><input type='password' placeholder='password' /></label>
                    </div>
                    <div className='recover'>
                        <div>
                            <input type='checkbox' />
                            <span>Remember me</span>
                        </div>
                        <div>
                            <a href=''>Forgot Password?</a>
                        </div>
                    </div>
                    <div className='button'>
                        <button>Login</button>
                    </div>
                    <div className='register'>
                        <span>Don´t have a account?</span> <a>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginGlass