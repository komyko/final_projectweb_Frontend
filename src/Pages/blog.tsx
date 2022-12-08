import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Textfield from "../component/Textfield";
import { getPost, uploadpost } from "../services/post";
import success from "../util/registerSuccess";
import errorAuth from "../util/authError";
import { Datum } from "../types/post";
const Blog = () => {
  const [detail, setDetail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [blogData, setBlogData] = useState<Datum[]>();

  useEffect(() => {
    console.log(name);
    console.log(detail);
  });

  const navigate = useNavigate();

  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleOnDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDetail(e.target.value);
  };

  const handleOnClick = async () => {
    console.log(name);
    console.log(detail);
    if (name || detail) {
      const { status, data, msg } = await uploadpost({
        name: name,
        detail: detail,
      });
      success("โพสเรียบร้อย");
      window.location.reload();
      // navigate("/blog");
    } else {
      errorAuth();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, status, msg } = await getPost();
      if (status && data) {
        setBlogData(data.data.data);
      }
    };

    if (!blogData) {
      fetchData();
    }
    console.log(blogData);
  }, [blogData]);

  console.log(blogData);

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Blog
          </h2>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <Textfield
              onChange={handleOnNameChange}
              value={name}
              label={"Username"}
              id={"username"}
              name={"heading"}
              type={"text"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnDetailChange}
              value={detail}
              label={"Name"}
              id={"name"}
              name={"detail"}
              type={"text"}
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
            Post
          </button>
        </div>
      </div>
      {/* post */}
      <div className="flex flex-col">
        {blogData && blogData.length > 0
          ? blogData.map((data, index) => {
              return (
                <>
                  {/* 
                  // @ts-ignore */}
                  <div
                    key={index}
                    className="flex flex-col my-5 bg-cyan-200 rounded-lg p-5 border-cyan-500 border-2"
                  >
                    <h1>Titile : {data.name}</h1>
                    <h1>Time : {data.timestamp}</h1>
                    <span>Detail : {data.detail}</span>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Blog;
