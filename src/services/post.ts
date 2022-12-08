import axios from "axios";
import { PostResponse } from "../types/post";

export const uploadpost = async ({
  name,
  detail,
}: {
  name: string;
  detail: string;
}) => {
  return axios
    .post("http://localhost:8081/api/post/post", {
      name: name,
      detail: detail,
    })
    .then((res) => {
      return {
        status: true,
        data: res.data,
        msg: res.data.message,
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

export const getPost = async () => {
  return axios
    .get<PostResponse>("http://localhost:8081/api/post/getdata")
    .then((res) => {
      return {
        status: true,
        data: res.data,
        msg: res.data.message,
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