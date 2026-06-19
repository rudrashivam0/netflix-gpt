import React, { useEffect } from 'react'
import Login from './Login'
import Browse from "./Browse"
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice"



const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/Browse",
            element: <Browse />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //? When the user Sign in data will come here of the user 

                const { uid, email, displayName } = user ;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));


            } else {
                //? When the user Sign out data will come here of the user 
                dispatch(removeUser());
            }
        });
    }, []);

    return (
        <div className=''>
            <RouterProvider router={appRouter} />

        </div>
    )
}

export default Body