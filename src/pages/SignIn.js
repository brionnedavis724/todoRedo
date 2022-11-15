import React, { useRef } from 'react'
import { Login } from '../components/Login' // import component into the Signup page

export const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

  return (
    <div>
        {/* display the component(s) imported above */}
        <Login 
           title = "Sign in"
           button = " Sign In" // how to add a link to button?
           headerStatement = "need an account?"
           link = "sign up"
           href = "/signup" 
           emailInput = {emailRef}
           passwordInput = {passwordRef}
        />
    </div>
  )
}
