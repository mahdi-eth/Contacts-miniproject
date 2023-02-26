import { mainInstance } from "./../../constants";
import Cookies from "js-cookie";

export const saveContactService = (data) => {
  return mainInstance.post("/newContact", data, {
    headers: { authorization: Cookies.get("loginToken") },
  });
};
