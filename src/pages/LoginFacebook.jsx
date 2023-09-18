import React from 'react'
import "./login-facebook.css"
import Logo from "../assets/logoFacebook.svg";

function LoginFacebook() {

    return (
        <div className='login-facebook'>

            <div className='logo-facebook'>
                <img src={Logo} />
                <h2>Connect with friends and the world around you on Facebook.
                </h2>
            </div>

            <div className='card-facebook'>

                <div className='card'>


                    <div className='data-facebook'>
                        <input placeholder='Email or Phone number' />
                        <input placeholder='Password' />
                    </div>

                    <div className='btn-facebook'>
                        <button>Log In</button>
                    </div>

                    <div className='changePassword'>
                        <a>Forgot password?</a>
                    </div>

                    <div className='new-account'>
                        <button>Create New Account</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LoginFacebook