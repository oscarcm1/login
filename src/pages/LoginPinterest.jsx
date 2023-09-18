import React from 'react'
import "./login-pinterest.css"
import { Icon } from '@iconify/react';


function LoginPinterest() {
  return (
    <div className='login'>

            <div className='box-login'>

                <div className='login-background'>     
                </div>
                <div className='logo-login'>
                    <span><Icon icon="cib:pinterest-p" color="white" width={"50px"} /></span>
                    <h1>PINTEREST</h1>
                </div>

                <div className='data-login'>

                    <div className='data-log'>
                        <span>ID</span>
                        <input></input>
                        <span>PD</span>
                        <input></input>
                    </div>
                </div>

                <div className='btn-login'>
                    <div className='btn-login'>
                    <div className='background-btn'></div>
                    <button>Login</button>
                    </div>
                  
                    <div className='sign'>
                        <a>SIGN IN</a>
                        <a>GORGET?</a>
                    </div>
                </div>

                <div className='social-login'>
                    <a><Icon icon="line-md:facebook" color="white" width={"20px"} /></a>
                    <a><Icon icon="bi:twitter" color="white" width={"20px"} /></a>
                    <a><Icon icon="mdi:google" color="white" width={"20px"} /></a>
                </div>
            </div>

        </div>
  )
}

export default LoginPinterest