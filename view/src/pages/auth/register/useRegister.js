import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { registerService } from "api";
import { useNavigate } from "react-router";

const registerSchema = yup
  .object({
    email: yup.string().required("please enter an email"),
    password: yup.string().required("please enter a valid password"),
    repeatPassword: yup.string().required("please enter your password again"),
  })
  .required();

const useRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema), mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onRegister = async (data) => {
    setLoading(true);
    try {
      const res = await registerService(data);
      toast.success(res?.data?.message);
      setLoading(false);
      navigate("/login");
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  return { onRegister, handleSubmit, register, errors, loading };
};

export default useRegister;
