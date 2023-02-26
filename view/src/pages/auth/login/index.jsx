import { Button, LinkComp, TextField } from "components";
import Container from "components/Container";
import useLogin from "./useLogin";

export const Login = () => {
  const { onLogin, handleSubmit, register, errors, loading } = useLogin();

  return (
    <Container>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
        Login
      </h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <TextField
          label="Your email"
          htmlFor="email"
          type="email"
          id="email"
          validation={{ ...register("email") }}
          error={errors?.email?.message}
        />
        <TextField
          label="Your password"
          htmlFor="password"
          type="password"
          id="password"
          validation={{ ...register("password") }}
          error={errors?.password?.message}
        />
        <Button loading={loading}>Submit</Button>
      </form>
      <LinkComp value="Register Instead" to="/register" />
    </Container>
  );
};
