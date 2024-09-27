"use client";

import {
  regexEmail,
  regexFullName,
  regexPhoneVN,
} from "@/shared/common/validator";
import React, { useState } from "react";

interface IFormRegister {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function FormRegister() {
  const [form, setForm] = useState<IFormRegister>({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const regexName = regexFullName;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let error: Partial<IFormRegister> = {};
    let isValid = true;
    if (!regexName.test(form.fullName)) {
      isValid = false;
      error.fullName = "Không đúng định dạng";
    }
    if (form.fullName.length < 8 || form.fullName.length > 50) {
      isValid = false;
      error.fullName = "Giới hạn kí tự 8 -> 50";
    }

    if (!regexPhoneVN.test(form.phoneNumber)) {
      isValid = false;
      error.phoneNumber = "Không đúng định dạng";
    }
    if (!regexEmail.test(form.email)) {
      isValid = false;
      error.email = "Không đúng định dạng email";
    }

    if (form.password.length < 6 || form.password.length > 12) {
      isValid = false;
      error.password = "Giới hạn kí tự 6 -> 12";
    }
    if (form.confirmPassword !== form.password) {
      isValid = false;
      error.confirmPassword = "Mật khẩu và Xác nhận mật khẩu phải giống nhau";
    }
    setError(error);
    return isValid;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(form);
    }
  };

  const [error, setError] = useState<Partial<IFormRegister>>({});

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Họ và tên *"
            name="fullName"
            onChange={handleChange}
          />
        </div>
        {error.fullName && (
          <p className="text-red-400 mt-1 ml-1">{error.fullName}</p>
        )}

        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3">
          <input
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Số điện thoại *"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        {error.phoneNumber && (
          <p className="text-red-400 mt-1 ml-1">{error.phoneNumber}</p>
        )}

        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3">
          <input
            className="w-full h-[40px] outline-none "
            type="email"
            placeholder="Nhập địa chỉ email *"
            name="email"
            onChange={handleChange}
          />
        </div>
        {error.email && <p className="text-red-400 mt-1 ml-1">{error.email}</p>}

        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3">
          <input
            className="w-full h-[40px] outline-none "
            type="password"
            placeholder="Mật khẩu *"
            name="password"
            onChange={handleChange}
          />
        </div>
        {error.password && (
          <p className="text-red-400 mt-1 ml-1">{error.password}</p>
        )}

        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3">
          <input
            className="w-full h-[40px] outline-none "
            type="password"
            placeholder="Xác nhận mật khẩu *"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        {error.confirmPassword && (
          <p className="text-red-400 mt-1 ml-1">{error.confirmPassword}</p>
        )}

        <button
          type="submit"
          className="block text-center text-white bg-[#EE4D2D] rounded-[5px] p-[10px] w-full mt-3"
        >
          TẠO TÀI KHOẢN
        </button>
      </form>
    </div>
  );
}

export default FormRegister;
