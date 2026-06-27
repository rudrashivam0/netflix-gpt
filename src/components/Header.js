import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constant'

const Header = () => {

    const navigate = useNavigate();
    //? whem sign out happen need user to bee Empty Dispatch An action 
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    // console.log(user);
    // console.log(user?.photoURL);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //? When the user Sign in data will come here of the user 

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/Browse");


            } else {
                //? When the user Sign out data will come here of the user 
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>

            <div>
                <img
                    src={LOGO}
                    alt='Logo'
                    className='w-[200px] h-[80px]'
                />
            </div>

            {
                user && <div className='flex gap-3 items-center'>
                    <img
                        className='w-[30px] h-[30px] rounded-md'
                        alt='UserIcon'
                        src={user?.photoURL}
                    />

                    <button
                        onClick={handleSignOut}
                        className='bg-red-600 px-4 py-2 rounded text-gray-300 hover:bg-red-700'>
                        Sign Out
                    </button>
                </div>
            }

        </div>
    );
};

export default Header;