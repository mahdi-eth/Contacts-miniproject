import { Home, Register, Login, Contacts } from "pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/contacts',
    element: <Contacts />
  }
];
