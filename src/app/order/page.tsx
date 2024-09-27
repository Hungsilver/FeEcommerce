"use client";
import {
  fa2,
  faArrowLeft,
  faBuildingColumns,
  faCircleUser,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IFormDataOrder {
  productsInOrder: any;
  couponId: number;
  shippingFee: number;
  paymentId: number;
  address: string;
  ward: string;
  district: string;
  provice: string;
}

function OrderPage() {
  const [formData, setFormData] = useState<IFormDataOrder>();

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    console.log(name, value);
  };

  const field = `border border-1 border-gray-400 w-full mb-3 p-2`;
  const borderItem = `border border-1 border-gray-300`;
  return (
    <div className="py-5 px-[5px] 2xl:px-[10%]">
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="flex justify-between mb-3">
            <p className="text-[18px] font-[500]">Thông tin giao hàng</p>
            <div>
              <FontAwesomeIcon icon={faCircleUser} fontSize={19} />
              <a className="ml-2" href="#">
                Đăng nhập
              </a>
            </div>
          </div>
          <div className="">
            <input className={`${field}`} placeholder="Email (tuỳ chọn)" />
            <input className={`${field}`} placeholder="Họ tên" />
            <input className={`${field}`} placeholder="Số điện thoại " />
            <input className={`${field}`} placeholder="Địa chỉ" />
            <select name="" className={`${field}`}>
              <option value="">Tỉnh/Thành Phố</option>
              <option value="">a</option>
            </select>
            <select name="" className={`${field}`}>
              <option value="">Quận/Huyện</option>
              <option value="">a</option>
            </select>
            <select name="" className={`${field}`}>
              <option value="">Phường/Xã</option>
              <option value="">a</option>
            </select>
            <textarea name="" className={`${field}`} rows={5}></textarea>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-8">
            <p className="text-[18px] font-[500]">Vận chuyển</p>
            <div className="p-2 bg-[#ddd] mt-3">
              <p className="text-red-300">Vui lòng nhập thông tin giao hàng</p>
            </div>
          </div>
          <div>
            <p className="text-[23px] font-[600]">Mua hàng</p>
            <div className={`${borderItem}`}>
              <Tooltip
                content="Nhận hàng, kiểm tra đúng sản phẩm đã đặt mới thanh toán!"
                placement="top"
              >
                <div className="p-4 border border-b-gray-300">
                  <label className="flex gap-2 items-center" htmlFor="cod">
                    <input
                      className="hidden"
                      type="radio"
                      name="tt"
                      id="cod"
                      value={1}
                      onChange={handleChange}
                    />
                    <div className="bg-red-500  size-[20px] rounded-full flex justify-center items-center border border-1 border-gray-500">
                      <div className="bg-white  size-[9px] rounded-full"></div>
                    </div>
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <span>Thanh toán khi giao hàng (COD)</span>
                  </label>
                </div>
              </Tooltip>
              <Accordion open={open === 1} placeholder={"ck ngan hang"}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  placeholder={"header"}
                >
                  <div className="px-4">
                    <label className="flex gap-2 items-center" htmlFor="cknh">
                      <input
                        className="hidden"
                        type="radio"
                        name="tt"
                        id="cknh"
                        value={2}
                        onChange={handleChange}
                      />
                      <div className="bg-red-500  size-[20px] rounded-full flex justify-center items-center border border-1 border-gray-500">
                        <div className="bg-white  size-[9px] rounded-full"></div>
                      </div>
                      <FontAwesomeIcon icon={faBuildingColumns} />
                      <span className="text-[16px] font-sans font-[400]">
                        Chuyển khoản ngân hàng
                      </span>
                    </label>
                  </div>
                </AccordionHeader>
                <AccordionBody>hhihihi</AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-1 border-gray-300 bg-[#f8f8f8]">
          <div className="border border-1 border-b-gray-300 p-5">
            <p className="font-[600] text-[18px]">
              Đơn hàng <span className="font-[300]">({1} sản phẩm)</span>
            </p>
          </div>
          <div className="border border-1 border-b-gray-300 p-5">
            <p className="">sản phẩm here</p>
          </div>
          <div className="border border-1 border-b-gray-300 p-5">
            <p>Mã giảm giá</p>
            <div className="">
              <input type="text" />
              <button type="button">Áp dụng</button>
            </div>
          </div>
          <div className=" p-5">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>204.25892</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>204.25892</span>
            </div>
            <div className="flex justify-between">
              <span>Tiền giảm voucher</span>
              <span>204.25892</span>
            </div>
            <div className="flex justify-between">
              <span>Tổng cộng</span>
              <span>204.25892</span>
            </div>
            <p className="text-orange-800">
              Sau khi ĐẶT HÀNG , shop sẽ nhanh chóng gọi điện xác nhận đơn hàng
              và thời gian giao hàng với bạn. Cảm ơn bạn tham gia mua sắm tại
              SAVANI!
            </p>
            <div className="py-5 flex justify-between">
              <button className="p-3 text-orange-800" type="button">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="me-2"
                  //   color="orange"
                />
                Quay về giỏ hàng
              </button>
              <button
                className="py-3 px-14 bg-orange-800 rounded-md text-white"
                type="button"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
