import React from 'react'
import "./style.css"
import A from "../assets/person.svg"

function Card() {

    
    let hidden = true;
    function active() {
        if (hidden) {
            hidden = !hidden;
            document.querySelector('.right').classList.add('active');
            document.querySelector('.register').classList.add('active');
            document.querySelector('.login').classList.add('active');

        } else {
            hidden = !hidden;
            document.querySelector('.right').classList.remove('active');
            document.querySelector('.register').classList.remove('active');
            document.querySelector('.login').classList.remove('active');
        }
    }

    return (
        <section className='box'>
            <section className='login'>

                <div className='left'>
                    <img src={A} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies varius, convallis pulvinar orci risus auctor torquent fusce mattis. </p>
                </div>

                <div className={'right'}>
                    <h1 className='title'>Welcome back</h1>
                    <form className='data'>
                        <p className=''>Login your accunt</p>
                        <span>Username</span>
                        <input type="text" />
                        <span>Password</span>
                        <input type="password" placeholder='' />
                        <div className='links'>
                            <button>Login</button>
                        </div>
                    </form>
                    <div className='links'>
                        <button className='secundary' onClick={active}>Registrar</button>
                    </div>
                    <a href='' className='footer'>Forgot password?</a>
                </div>


                <div className='register'>
                    <h1 className='title'>Register</h1>
                    <form className='data'>
                        <p className=''>Register User</p>
                        <span>Username</span>
                        <input type="text" />
                        <span>Password</span>
                        <input type="password" placeholder='' />
                        <span>Repeat Password</span>
                        <input type="password" placeholder='' />
                        <div className='links'>
                            <button>Registrar</button>
                        </div>
                    </form>
                    <div className='links'>
                        <button className='secundary' onClick={active} >Login</button>
                    </div>
                    <a href='' className='footer'>Forgot password?</a>
                </div>
            </section>
        </section>
    )
}

export default Card