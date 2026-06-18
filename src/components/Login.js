import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import checkValidData from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
const Login = () => {

    const [isSignInForm, setSignInForm] = useState(true);
    const [isErrorMess, setErrorMess] = useState(null);


    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    //? HAndle the form as toggle 

    const handleTogle = () => {
        setSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //? Handle the button click here and need to validate the form Data
        // checkValidData(email, password);
        console.log(email.current.value, password.current.value);

        const message = isSignInForm
            ? checkValidData(
                email.current.value,
                password.current.value
            )
            : checkValidData(
                email.current.value,
                password.current.value,
                name.current.value
            );

        setErrorMess(message);

        console.log(message);

        // If message is not null then return 
        // Means mess is somthing else 
        if (message) return;


        //!We here means mess is Null means form is valid
        //? need to log the form
        if (!isSignInForm) {
            //Sign Up Form
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)

                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMess(errorMessage + "-" + errorCode);
                });
        }
        else {
            //Sign In Form
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage + "-" + errorCode);
                });

        }
        console.log("Form Valid");
    };




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
                <form onSubmit={(e) => e.preventDefault()} className="bg-black/80 text-white p-8 rounded-lg w-3/12">
                    <h1 className='font-bold text-white text-3xl pb-6'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>


                    {!isSignInForm && <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mb-7 rounded bg-gray-800/80"
                    />}

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-3 mb-7 rounded bg-gray-800/80"
                    />


                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-7 rounded bg-gray-800/80"
                    />
                    <p className="text-red-700 text-sm pb-2 font-medium">
                        {isErrorMess}
                    </p>

                    <button className="w-full bg-red-600 p-3 rounded" onClick={handleButtonClick}>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="text-sm text-gray-400 mt-5">
                        {isSignInForm ? " New to Netflix?" : "Already registered?"}

                        <span onClick={handleTogle} className="text-white cursor-pointer">
                            {isSignInForm ? "Sign up now" : "Sign In"}</span>
                    </p>
                </form>
            </div>


        </div>
    )
}

export default Login