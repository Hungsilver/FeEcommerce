"use client";

import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ForgotPage() {
  const [submit, setSubmit] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmit("");

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response = await axios({
      method: "post",
      url: "/api/recaptchaSubmit",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response?.data?.success === true) {
      console.log(`Success with score: ${response?.data?.score}`);
      setSubmit("ReCaptcha Verified and Form Submitted!");
    } else {
      console.log(`Failure with score: ${response?.data?.score}`);
      setSubmit("Failed to verify recaptcha! You must be a robot!");
    }
  };

  return (
    <div className="w-[400px] mx-auto my-5">
      <div className="text-center mb-5">
        <p className="font-bold text-lg">QUÊN MẬT KHẨU</p>
      </div>
      <div>
        <p>
          Chúng tôi sẽ tiến hành kiểm tra và gửi link đổi mật khẩu vào email của
          bạn.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 mb-2">
            <label className="w-[100px]" htmlFor="email">
              Email:{" "}
            </label>
            <div className="border border-1 px-2 rounded-[5px] border-gray-400">
              <input
                className="h-[35px] outline-none w-full"
                id="email"
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-3">
            <label className="w-[100px]" htmlFor="code">
              Mã xác nhận:{" "}
            </label>
            <div className="border border-1 px-2 rounded-[5px] border-gray-400">
              <input
                className="h-[35px] outline-none w-full"
                id="code"
                type="text"
              />
            </div>
          </div>

          <button
            className="text-white outline-none shadow-md shadow-red-300/50 p-2 bg-[#EC1D25] rounded-[5px]"
            type="submit"
          >
            ĐỒNG Ý
          </button>
        </form>

        {submit && <p>{submit}</p>}
      </div>
    </div>
  );
}

export default ForgotPage;
