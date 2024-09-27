"use client";
import React, { useEffect, useState } from "react";
import CartListItem from "./cart_list_item";
import { get } from "@/config/axiosConfig";
import CartItem from "./cart_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { formatNumbertovnd } from "@/shared/common/convertNumtovnd";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [dataCart, setDataCart] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const dataCart: IApiResponse = await get(`/cart`);
      setDataCart(dataCart.data);
      console.log(dataCart.data);
    };

    fetchData();
  }, []);
  const totalItem = dataCart?.length;
  const totalMoneyCart: number = dataCart
    ?.map((item: any) => item.price * item.quantity)
    .reduce((a: number, b: number) => a + b);

  const handleChangeSLItem = (quantityNew: number, idPd: number) => {
    const dataAfterUpdate = dataCart.filter((item: any) => {
      if (item.idProductDetail === idPd) {
        if (quantityNew === 0) {
          return false;
        }
        item.quantity = quantityNew;
      }
      return true;
    });
    setDataCart(dataAfterUpdate);
  };

  const buy = () => {
    router.push("/order");
  };

  return (
    <div className="bg-[#F8F8F8] flex gap-3 p-[4%] ">
      <div className="flex-1 bg-white rounded-md">
        <div className="flex justify-between p-3 items-center">
          <p>Đơn hàng của bạn ({totalItem}) sản phẩm</p>
          <a className="bg-gray-300 p-2" href="/">
            <span className="pr-2">Tiếp tục mua hàng</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div>
          <CartListItem>
            {dataCart &&
              dataCart.map((item: any) => (
                <CartItem
                  item={item}
                  onchangeQuantity={handleChangeSLItem}
                  key={item?.id}
                />
              ))}
          </CartListItem>
        </div>
      </div>

      <div className="flex-none bg-white rounded-md p-3 h-fit gap-3">
        <div className="bg-[#F8F8F8] p-3 flex gap-3 mb-10">
          <img src={"/icon/icon-shipping.svg"} alt="" />
          <div>
            <b>Giao hàng tận nhà</b>
            <p>Nhanh chóng - tiện lợi</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span>Tổng cộng: </span>
            <span className="text-red-400">
              {formatNumbertovnd(totalMoneyCart)}
            </span>
          </div>
          <button
            className="p-3 bg-orange-900 w-full text-white"
            type="button"
            onClick={buy}
          >
            MUA HÀNG
          </button>
          <i className="text-red-400">
            Mã giảm giá vui lòng chọn ở bước thanh toán
          </i>
        </div>
      </div>
    </div>
  );
}

export default page;
