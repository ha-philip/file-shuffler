import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useEffect } from "react";

export default function OnlyLogin() {
  const router = useNavigate();
  const location = useLocation();
  const { user }: any = AuthContext();
  useEffect(() => {
    if (!user.isLogin) {
      router("/login");
    }
  }, [location.pathname]);
  return (
    <>
      <div className="mt-32 text-center font-bold text-3xl">
        로그인 되어야만 들어갈 수 있는 페이지
      </div>
    </>
  );
}
