import React from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate();
    //? whem sign out happen need user to bee Empty Dispatch An action 
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    console.log(user);
    console.log(user?.photoURL);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
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
    }, []);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center'>

            <div>
                <img
                    src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8b1-7864-8e94-75a86b260122/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                    alt='Logo'
                    className='w-[200px] h-[80px]'
                />
            </div>

            {
                user && <div className='flex gap-3 items-center'>
                    <img
                        className='w-[30px] h-[30px] rounded-md'
                        alt='UserIcon'
                        src={user?.photoURL || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                    />

                    <button
                        onClick={handleSignOut}
                        className='bg-red-600 px-4 py-2 rounded text-gray-300'>
                        Sign Out
                    </button>
                </div>
            }

        </div>
    );
};

export default Header;