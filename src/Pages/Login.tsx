import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Helmet>
       <title>File Shuffler | 로그인</title>
      </Helmet>
      <div className="mt-16 flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-5">로그인</h1>
        <div className="flex flex-col p-20 bg-gray-300 shadow-lg gap-4 w-[30rem]">
            <input type="text" placeholder="시리얼번호" className="px-2 py-5 text-lg" autoComplete="off"/>
            <input type="password" placeholder="비밀번호" className="px-2 py-5 text-lg" autoComplete="off"/>
            <button className="bg-blue-400 py-5 text-lg text-white hover:bg-blue-500 transition">로그인</button>
        </div>
      </div>
    </>
  );
}

export default Login;
