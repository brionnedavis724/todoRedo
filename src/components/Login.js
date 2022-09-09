import React from 'react'
import '../styles/Login.css'

export const Login = ({title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction}) => {
  return (
    <div className='Login'>
        <div className="login-container">
            <h1 className="login-heading">{title}</h1>    
            <input ref = {emailInput} type="email" className="login-email" placeholder='Email'/>
            <input ref = {passwordInput} type="password" className="login-password" placeholder='Password'/>
            <button onClick={btnFunction} className="login-button">{button}</button>
            
            <div className="links">
                <p>{headerStatement}</p>
                <a href={href}> {link} </a>
            </div>
        </div> {/* end of login-container */}
    </div> // end of login div
  )
}
