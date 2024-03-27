import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useEffect } from "react";

export default function OnlyLogin() {
  const router = useNavigate();
  const location = useLocation();
  const { user }: any = AuthContext();
  useEffect(() => {
    if (!user.isLogin) {
      router("/");
    }
  }, [location.pathname]);
  return (
    <>
      <div className="flex justify-center items-center lg:gap-10 gap-1 lg:text-3xl text-xl text-white font-bold lg:mt-24 mt-12">
        <button className="bg-red-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105 flex flex-col justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          File
        </button>
        <button className="bg-green-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105 flex flex-col justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Hide
        </button>
        <button className="bg-blue-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105 flex flex-col justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="lg:w-10 lg:h-10 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Show
        </button>
      </div>
      <div className="grid place-items-center mt-10">
        <input
          type="text"
          placeholder="Password"
          className="border border-gray-200 px-3 py-5 lg:w-96 w-72 transition focus:bg-slate-100"
        />
        <div className="w-[80%] lg:h-10 h-5 bg-blue-200 mt-5 rounded-full overflow-hidden" />
      </div>
    </>
  );
}
