import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Header(){
    const router = useNavigate();
    const location = useLocation();
    const {user}:any = AuthContext();
    const logOut = () => {
        //로그아웃 메소드
        signOut(auth).catch((에러) => console.log(에러.message));
        router("/");
      };
    return(
        <>
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between items-center p-10 border-b border-gray-400 bg-slate-200'>
            <Link to="" className='flex justify-center items-cente gap-3'>
                <img src='/logo.png' alt='' className='w-7'/>
                <h1 className='text-2xl'>File Shuffling</h1>
            </Link>
            {user.isLogin ? 
            
            <button onClick={logOut} className='bg-white px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition'>
                로그아웃
            </button>
            : 
            
            <Link to="/login" className='bg-white px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition'>
                로그인
            </Link>}
        </div>
        </>
    );
}