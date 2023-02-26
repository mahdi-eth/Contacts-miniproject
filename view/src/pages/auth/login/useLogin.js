import * as yup from "yup";
import { loginService } from "api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

const loginSchema = yup
  .object({
    email: yup.string().required("please enter your email"),
    password: yup.string().required("please enter your password"),
  })
  .required();

const useLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin = async (data) => {
    setLoading(true);
    try {
      const res = await loginService(data);
      toast.success(res?.data?.message);
      Cookies.set('loginToken', res?.data?.token, { expires: 7 })
      navigate('/');
      setLoading(false);
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  return { onLogin, handleSubmit, register, errors, loading };
};

export default useLogin;
