import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="p-4 sm:p-6 bg-gray-800 font-Kanit">
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ml-5">
            <a className="flex items-center">
              <img
                src=""
                className="mr-3 h-16"
                alt=""
              />
            </a>
          </div>
          <div className="row contact-box text-white ml-5">
            <div className="col-lg-12">
              <i className="fa fa-asterisk"></i>ติดต่อสอบถาม
              <i className="fa fa-asterisk"></i>
            </div>
            <div className="col-lg-12">
            นาย ณัฐชนันท์  &nbsp;
              <span className="nextlineSM">เจียรสุวรรณ  </span>
            </div>
            <div className="col-lg-12">
              นาย ศุภกฤต  &nbsp;
              <span className="nextlineSM">
              เผือกประพันธุ์  
              </span>
            </div>
            <div className="col-lg-12">
              <span className="nextlineSM">
              นาย สมชัย ตันติชาญชัยกุล 
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
