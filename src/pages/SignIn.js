import React from 'react'
import { Login } from '../components/Login' // import component into the Signup page

export const SignIn = () => {
  return (
    <div>
        {/* display the component(s) imported above */}
        <Login 
           title = "Sign in"
           button = " Sign In"
           headerStatement = "need an account?"
           link = "sign up"
           href = "/signup" 
        />
    </div>
  )
}
