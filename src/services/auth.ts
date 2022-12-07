import axios from "axios";
import { LoginResponse } from "../types/login";
import { RegisterResponse } from "../types/register";

export const login = async ({
  user_id,
  password,
}: {
  user_id: string;
  password: string;
}) => {
  return axios
    .post<LoginResponse>("http://localhost:8081/api/auth/login", {
        user_id: user_id,
        password: password
    })
    .then((res) => {
      return {
        status: true,
        data: res.data,
        msg: res.data.message
      };
    })
    .catch((error) => {
      return {
        status: false,
        data: null,
        msg: error.message ? error.message : "error",
      };
    });
};

export const Register = async ({
  user_id,
  password,
}: {
  user_id: string;
  password: string;
}) => {
  return axios
    .post<LoginResponse>("http://localhost:8081/api/auth/register", {
        user_id: user_id,
        password: password
    })
    .then((res) => {
      return {
        status: true,
        data: res.data,
        msg: res.data.message
      };
    })
    .catch((error) => {
      return {
        status: false,
        data: null,
        msg: error.message ? error.message : "error",
      };
    });
};
