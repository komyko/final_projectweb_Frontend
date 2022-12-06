import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Textfield from "../component/Textfield";
import { login } from "../services/auth";

const Login = () => {
  const [uid, setUid] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleOnUidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUid(e.target.value);
  };

  const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  

  const handleOnClick = async () => {
    if (uid && password) {
      const { status, data, msg } = await login({
        user_id: uid,
        password: password,
      });
      if (status && data) {
        if (data.result === "OK") {
          localStorage.setItem("username", data.data.name);
          localStorage.setItem("email", data.data.email);
          navigate("/");
          window.location.reload();
        } else if (data.result === "nOK") {
          window.alert(msg);
        }
      }
    }
  };

  const registerClick = async () =>{
    navigate("/Register")
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <Textfield
              onChange={handleOnUidChange}
              value={uid}
              label={"Username"}
              id={"username"}
              name={"username"}
              type={"text"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnPasswordChange}
              value={password}
              label={"Password"}
              id={"password"}
              name={"password"}
              type={"password"}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleOnClick}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
          <button type="submit" onClick={registerClick}> register </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
