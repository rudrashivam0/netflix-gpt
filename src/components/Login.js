import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);

    //? HAndle the form as toggle 

    const handleTogle = () => {
        setSignInForm(!isSignInForm);
    }


    return (
        <div>
            <Header />

            <div className="absolute inset-0 -z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/US-en-20260615-TRIFECTA-perspective_22f98b6d-12c0-4b1d-b261-54883e4c4b11_large.jpg"
                    alt="bg-img"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex items-center justify-center h-screen">
                <form className="bg-black/80 text-white p-8 rounded-lg w-3/12">
                    <h1 className='font-bold text-white text-3xl pb-6'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-3 mb-10 rounded bg-gray-800/80"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-10 rounded bg-gray-800/80"
                    />

                    <button className="w-full bg-red-600 p-3 rounded">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="text-sm text-gray-400 mt-5">
                        New to Netflix? <span onClick={handleTogle} className="text-white cursor-pointer">
                            {isSignInForm ? " Sign up now" : "Sign Up"}
                            Sign up now</span>
                    </p>
                </form>
            </div>


        </div>
    )
}

export default Login