import React, { Suspense } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, LinkComp, TextField } from "components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { saveContactService } from "api/services";
import Container from "components/Container";

const contactSchema = yup
  .object({
    name: yup.string().required("please enter a name"),
    number: yup
      .number()
      .transform((value) =>
        isNaN(value) || value === null || value === undefined ? null : value
      )
      .nullable()
      .required("please enter a number"),
  })
  .required();

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema), mode: "onBlur" });

  const [loading, setLoading] = useState(false);
  const [nameInputValue, setNameInputValue] = useState("");
  const [numberInputValue, setNumberInputValue] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setNameInputValue("");
    setNumberInputValue("");
    setLoading(true);
    try {
      const res = await saveContactService(data);
      toast.success(res?.data?.message);
      setLoading(false);
    } catch (ex) {
      toast.error(ex?.response?.data?.message);
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    Cookies.remove("loginToken");
    toast.success("loged out successfuly");
    setToken(Cookies.get("loginToken"));
  };

  const [token, setToken] = useState("");

  useEffect(() => {
    if (!Cookies.get("loginToken")) {
      navigate("/login");
      toast.info("please login first!", {
        toastId: "info",
      });
    }
  }, [token, nameInputValue, numberInputValue]);

  return (
    <Container classes="flex flex-col">
      <Suspense fallback={<div>Loading...</div>}>
        <button
          className="bg-transparent text-sky-500 self-end"
          onClick={() => handleLogOut()}
        >
          Log out
        </button>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
          Save your contacts here
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            onChange={(e) => setNameInputValue(e.target.value)}
            label="Contact name"
            htmlFor="name"
            type="text"
            id="name"
            value={nameInputValue}
            validation={{ ...register("name") }}
            error={errors?.name?.message}
          />
          <TextField
            onChange={(event) => setNumberInputValue(event.target.value)}
            label="Number"
            htmlFor="number"
            type="number"
            id="number"
            value={numberInputValue}
            validation={{ ...register("number") }}
            error={errors?.number?.message}
          />
          <Button loading={loading}>Save</Button>
          <LinkComp value="See your contacts" to="/contacts" />
        </form>
      </Suspense>
    </Container>
  );
}
