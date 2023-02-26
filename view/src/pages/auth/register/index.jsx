import { Button, LinkComp, TextField } from "components";
import Container from "components/Container";
import useRegister from "./useRegister";

export function Register() {
  const { onRegister, handleSubmit, register, errors, loading } = useRegister();

  return (
    <Container>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white py-3 text-center">
        Register
      </h1>
      <form onSubmit={handleSubmit(onRegister)}>
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
        <TextField
          label="Repeat your password"
          htmlFor="repeatPassword"
          type="password"
          id="repeatPassword"
          validation={{ ...register("repeatPassword") }}
          error={errors?.repeatPassword?.message}
        />
        <Button loading={loading}>Submit</Button>
      </form>
      <LinkComp value="Login Instead" to="/login" />
    </Container>
  );
}
