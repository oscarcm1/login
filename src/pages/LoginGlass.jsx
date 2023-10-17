import React from 'react'
import "./login-glass.css"

function LoginGlass() {
    return (
        <div className='login'>

            <div className='card-login'>

                <div className='left'>
                    <div className='circulo1'></div>
                    <div className='circulo2'></div>
                    <div className='circulo3'></div>
                    <div className='logo'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-radioactive" viewBox="0 0 16 16">
                            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                            <path d="M9.653 5.496A2.986 2.986 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.972 5.972 0 0 1 8 2c1.222 0 2.358.365 3.306.992L9.653 5.496Zm1.342 2.324a2.986 2.986 0 0 1-.884 2.312 3.01 3.01 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a5.986 5.986 0 0 0 1.767-4.624l-2.994.18Zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg></span>
                        <h2>radioactive</h2>
                    </div>

                    <div className='menu'>
                        <ul>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Privacy</a></li>
                            <li><a href='#'>Terms of use</a></li>
                            <li><a href='#'>FAQ</a></li>
                        </ul>

                    </div>
                </div>

                <div className='right'>
                    <h2>Log in</h2>
                    <span><input placeholder='Email' type='email' /></span>
                    <span><input placeholder='Password' type='passwhord' /></span>

                    <div className='botones'>
                        <span><input type='checkbox' /> Guardar contraseña</span>
                        <button>log in</button>
                        <a href='#'>Olvidaste la contraseña?</a>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default LoginGlass