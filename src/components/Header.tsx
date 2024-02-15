import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <>
        <div className='flex justify-between items-center p-10 border-b border-gray-400 bg-slate-200'>
            <Link to="" className='flex justify-center items-cente gap-3'>
                <img src='https://static.thenounproject.com/png/777906-200.png' alt='' className='w-7'/>
                <h1 className='text-2xl'>File Shuffling</h1>
            </Link>
            <Link to="/login" className='bg-white px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition'>
                로그인
            </Link>
        </div>
        </>
    );
}