import React, { useRef } from 'react'
import { Login } from '../components/Login' // import component into the Signup page
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

export const SignUp = () => {
    // console.log(useRef()) // useRef grabs a "reference" of whatever gets placed in the paren
    const emailRef = useRef()
    const passwordRef = useRef()
    
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            window.location = "/dashboard"
        }

        catch(error) {
            alert(error.message)
        }

    }
  return (
    <div>
        {/* display the component(s) imported above */}
        <Login 
            title = "Sign up"
            button = " Sign Up"
            headerStatement = "already have an account?"
            link = "sign in"
            href = "/" 
            emailInput = {emailRef}
            passwordInput = {passwordRef}
            btnfunction = {register}
        />
    </div>
  )
}
