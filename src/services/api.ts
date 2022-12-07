import axios from "axios";
import { DataResponse } from "../types/response";

export const getFootballData = async () => {
  return axios
    .get<DataResponse>("https://www.balldontlie.io/api/v1/players")
    .then((res) => {
      return {
        status: true,
        data: res.data,
        msg: res.statusText,
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

