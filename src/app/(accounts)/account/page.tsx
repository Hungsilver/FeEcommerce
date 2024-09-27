"use client";
import React, { lazy, useState } from "react";
import FormLogin from "./formLogin";
import FormRegister from "./formRegister";
import Image from "next/image";
import Link from "next/link";
import Spinner from "@/components/spinner/spinner";

function AccountPage() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="m-auto p-2 md:px-[100px]">
      <div>breadcumb</div>
      <div className="flex m-auto w-[853px]">
        <div className="w-[47%] bg-[#EEEEEE]">
          <div className="w-fit">
            <img
              src="https://savani.vn/images/config/frame_1643271037.svg"
              width={400}
              height={425}
              alt="img"
            />
          </div>
          <div className="px-[20px] pb-[15px]">
            <p className="text-red-500 font-bold mb-4">QUYỀN LỢI THÀNH VIÊN</p>
            <p className="">
              <span className="translate-y-[1px] inline-block me-2">
                <Image
                  className="object-cover"
                  src="/icon/icon-tick-green.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
              </span>
              <span>Mua hàng khắp thế giới cực dễ dàng, nhanh chóng</span>
            </p>
            <p className="">
              <span className="translate-y-[1px] inline-block me-2">
                <Image
                  className="object-cover"
                  src="/icon/icon-tick-green.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
              </span>
              <span>
                Theo dõi chi tiết đơn hàng, địa chỉ thanh toán dễ dàng
              </span>
            </p>
            <p className="">
              <span className="translate-y-[1px] inline-block me-2">
                <Image
                  className="object-cover"
                  src="/icon/icon-tick-green.svg"
                  width={16}
                  height={16}
                  alt="logo"
                />
              </span>
              <span>Nhận nhiều chương trình ưu đãi hấp dẫn từ chúng tôi</span>
            </p>
          </div>
        </div>
        <div className="w-[53%] p-[25px]">
          <div className="flex text-lg border-1 border-b-[1px] transition-all">
            <button
              className={`flex-1 border-1 border-b-2 ${
                showForm ? " border-black" : "text-gray-400"
              } `}
              type="button"
              onClick={() => setShowForm(true)}
            >
              ĐĂNG NHẬP
            </button>
            <button
              className={`flex-1 border-1 border-b-2 ${
                showForm ? "text-gray-400" : " border-black"
              } `}
              type="button"
              onClick={() => setShowForm(false)}
            >
              ĐĂNG KÍ
            </button>
          </div>
          <div>{showForm ? <FormLogin /> : <FormRegister />}</div>
          <div>
            <div className="h-[60px] flex items-center">
              <div className="w-full h-[1px] bg-gray-500 relative">
                <span className="absolute -top-3 left-[110px] bg-white px-3">
                  Hoặc đăng nhập bằng
                </span>
              </div>
            </div>
            <div>
              <Link
                className="block text-center text-white bg-[#D54B3D] rounded-[5px] p-[10px] mb-3 relative"
                href={"#"}
              >
                <Image
                  className="absolute top-2 left-1"
                  src={"/icon/email.svg"}
                  width={30}
                  height={30}
                  alt="email"
                />
                <span className="w-fit">ĐĂNG NHẬP BẰNG GOOGLE</span>
              </Link>
              <Link
                className="block text-center text-white bg-[#1877F2] rounded-[5px] p-[10px] mb-3 relative"
                href={"#"}
              >
                <Image
                  className="absolute top-2 left-1"
                  src={"/icon/facebook.svg"}
                  width={30}
                  height={30}
                  alt="email"
                />
                ĐĂNG NHẬP BẰNG FACEBOOK
              </Link>
            </div>

            <p>
              Savani cam kết bảo mật và không bao giờ đăng hay chia sẻ thông tin
              mà chưa có được sự đồng ý của bạn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
