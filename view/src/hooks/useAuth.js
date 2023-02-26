import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";

const useAuth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if ((Cookies.get("loginToken") && ["/login", "/register"].includes(pathname)))
      navigate('/');
  }, [Cookies.get("loginToken")]);
};

export default useAuth;
