import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

interface ILoginForm{
    serial_number: string;
    password: string;
}

function Login() {
    const router = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
      } = useForm<ILoginForm>({ mode: "onSubmit" });
    const [loading, set_loading] = useState<boolean>(false);

    const onValid = async(values: {serial_number: string, password: string}) => {
        set_loading(true);
        await signInWithEmailAndPassword(auth, values.serial_number, values.password).then(응답=> (
            router("/")
        )).catch(에러 => alert("시리얼번호 혹은 비밀번호가 올바르지 않습니다."));
        reset();
        set_loading(false);
      }
  return (
    <>
      <Helmet>
        <title>File Shuffler | 로그인</title>
      </Helmet>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="mt-16 flex flex-col justify-center items-center">
          <h1 className="text-3xl mb-5">로그인</h1>
          <div className="flex flex-col p-20 bg-gray-300 shadow-lg gap-4 w-[30rem]">
            <input
              type="text"
              placeholder="시리얼번호"
              className="px-2 py-5 text-lg"
              autoComplete="off"
              {...register("serial_number", {
                required: "시리얼번호를 입력하세요."
              })}
            />
            {errors.serial_number && <p className="text-red-400">{errors.serial_number.message}</p>}
            <input
              type="password"
              placeholder="비밀번호"
              className="px-2 py-5 text-lg"
              autoComplete="off"
              {...register("password", {
                required: "비밀번호를 입력하세요."
              })}
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            <button className="bg-blue-400 py-5 text-lg text-white hover:bg-blue-500 transition" disabled={loading}>
              로그인
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
