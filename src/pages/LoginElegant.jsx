import React from 'react'
import "./login-elegant.css"

function LoginElegant() {
    return (
        <div className='login'>
            <div className='card-box'>
            
                <div className='figure'>
                    <div className='title'>
                       <h2>Login</h2>
                    </div> 
                </div>
                <div className='form'>
                    <div className='data'>
                        <label>Email<input placeholder='ingresa correo' /></label>
                        <label>Contraseña<input type='password' placeholder='*ingresa contraseña' /></label>
                    </div>
                    <div className='recover'>
                        <div className='remember'>
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
                        <span>Don´t have a account?</span> <a href=''>Sign up</a>
                    </div>

                    <div className='social-media'>
                        <a><i className="bi bi-instagram"></i></a>
                        <a><i className="bi bi-facebook"></i></a>
                        <a><i className="bi bi-github"></i></a>
                    </div>
                    <span>oscardigital.website</span>
                </div>
            </div>
        </div>
    )
}

export default LoginElegant