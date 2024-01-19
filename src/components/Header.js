import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
         navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
       <img className='w-44' src='https://netflix-googleai.netlify.app/static/media/netflix-header-logo.774e8c1632ac9433608b.png' alt="logo" />
      
      { user && (<div className='flex p-2'>
        <img className='w-12 h-12 ' alt='usericon' src={user?.photoURL} />
        <button className='font-bold text-white' onClick={handleSignOut}>( Sign Out )</button>
       </div>
      )}
    </div>
  )
}

export default Header
