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
        <button className="bg-red-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105">
          File
        </button>
        <button className="bg-green-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105">
          Hide
        </button>
        <button className="bg-blue-300 w-24 h-24 lg:w-80 lg:h-80 shadow-xl transition hover:scale-105">
          Show
        </button>
      </div>
      <div className="grid place-items-center mt-10">
        <input type="text" placeholder="Password" className="border border-gray-200 px-3 py-5 lg:w-96 w-72 transition focus:bg-slate-100"/>
        <div className="w-[80%] lg:h-10 h-5 bg-blue-200 mt-5 rounded-full overflow-hidden"/>
      </div>
    </>
  );
}
