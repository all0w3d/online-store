import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, roleprops) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: roleprops? 'USER' : 'ADMIN'
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};


export const getUserId = async () => {
  const { data } = await $authHost.get("api/user/");
  return data
}



export const exit = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.removeItem("token", data.token);
};
