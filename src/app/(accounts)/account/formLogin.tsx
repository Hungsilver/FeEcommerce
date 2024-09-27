"use client";
import { post } from "@/config/axiosConfig";
import { regexEmailOrUserName } from "@/shared/common/validator";
import Link from "next/link";
import React, { useState } from "react";
import { IResponseAuthen } from "./IAccount";
import { redirect } from "next/navigation";
import { CacheService } from "@/shared/service/cache.service";
import { CacheKeys } from "@/shared/common/caches_define";
import dayjs from "dayjs";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { useSpinner } from "@/hooks/context/SpinnerContext";

interface IFormLogin {
  login: string;
  password: string;
  rememberMe: boolean;
}
function FormLogin() {
  const [formLogin, setFormLogin] = useState<IFormLogin>({
    login: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState<Partial<IFormLogin>>({});
  const route = useRouter();
  // const { loading, show, hidden } = useSpinner();

  const regex = regexEmailOrUserName;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    // show();
  };

  const validateForm = () => {
    let error: Partial<IFormLogin> = {};
    let isValid = true;
    if (!regex.test(formLogin.login)) {
      isValid = false;
      error.login = "Không đúng định dạng";
    }

    if (formLogin.login.length < 6 || formLogin.login.length > 50) {
      isValid = false;
      error.login = "Không đúng định dạng";
    }

    if (formLogin.password.length < 6 || formLogin.password.length > 12) {
      isValid = false;
      error.password = "Không đúng định dạng độ dài kí tự";
    }

    setError(error);
    return isValid;
  };

  const handleSubmid = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formLogin);
      // show();
      post<IResponseAuthen>("/authenticate", formLogin)
        .then((res: IResponseAuthen) => {
          const expiry = dayjs(res.expiration).unix() - dayjs().unix();
          CacheService.Set(
            CacheKeys.KEY_CACHE_TOKEN,
            {
              accessToken: res.accessToken,
              fullName: res.fullName,
              roles: res.roles,
            },
            expiry
          );
          toast.success("Đăng nhập thành công");
          route.push("/");
          // hidden();
        })
        .catch((error) => {
          console.log(error);
          toast.error("🦄 Đăng nhập thất bại");
        });
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmid}>
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40">
          <input
            id="login"
            name="login"
            className="w-full h-[40px] outline-none "
            type="text"
            placeholder="Email / Username *"
            onChange={handleChange}
            data-cy="login"
          />
        </div>
        {error.login && <p className="text-red-400 mt-1 ml-1">{error.login}</p>}
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3">
          <input
            id="password"
            name="password"
            className="w-full h-[40px] outline-none "
            type="password"
            placeholder="Mật khẩu *"
            onChange={handleChange}
            data-cy="password"
          />
        </div>
        {error.password && (
          <p className="text-red-400 mt-1 ml-1">{error.password}</p>
        )}
        <div className="border-1 border rounded-[5px] px-2 shadow-md shadow-gray-400/40 mt-3 inline-block text-gray-600">
          <input
            className="me-3 "
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleChange}
            data-cy="rememberMe"
          />
          <label htmlFor="rememberMe">Ghi nhớ tài khoản</label>
        </div>
        <div className="flex justify-end mt-3 ">
          <Link className="text-red-400" href={"/forgot"}>
            Quên mật khẩu
          </Link>
        </div>
        <button
          className="block text-center text-white bg-[#EE4D2D] rounded-[5px] p-[10px] w-full mt-3"
          type="submit"
        >
          ĐĂNG NHẬP
        </button>
      </form>
    </div>
  );
}

export default FormLogin;
