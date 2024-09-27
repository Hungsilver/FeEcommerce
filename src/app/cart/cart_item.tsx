"use client";
import { get } from "@/config/axiosConfig";
import { formatNumbertovnd } from "@/shared/common/convertNumtovnd";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface ICartItem {
  item: any;
  onchangeQuantity: (quantity: number, idPD: number) => void;
}

function CartItem({ item, onchangeQuantity }: ICartItem) {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const imgtest =
    "https://savani.vn/images/image/2024/04/19/large/MTS011S4-2-K03-ao-phong-nam-1.JPG";

  useEffect(() => {
    onchangeQuantity(quantity, item.idProductDetail);
  }, [quantity]);

  const deleteItem = (idPd: string, quantity: number) => {
    const dataDelete = { idProductDetail: idPd, quantity: -quantity };
    get("/cart/updateCart", dataDelete)
      .then((res) => {
        console.log("xoá sp thành công");
      })
      .catch((error) => {
        console.log("xoá sp thất bại");
      });
    setQuantity(0);
  };
  const handleDeleteCartItem = () => {};

  const increaseQuantity = (idProductDetail: number) => {
    // tang sl
    setQuantity((quantityOld) => quantityOld + 1);

    const param = { idProductDetail: idProductDetail, quantity: 1 };
    get("/cart/updateCart", param)
      .then((res) => {
        console.log("thanh cong");
      })
      .catch((error) => {
        console.log("loi tang sl sp trong gio hang");
      });
    //set quantity item
    item.quantity = item.quantity + 1;
  };

  const decreaseQuantity = (idProductDetail: number) => {
    //giam sl
    setQuantity((quantityOld) => quantityOld - 1);
    const param = { idProductDetail: idProductDetail, quantity: -1 };
    get("/cart/updateCart", param)
      .then((res) => {
        console.log("thanh cong");
      })
      .catch((error) => {
        console.log("loi tang sl sp trong gio hang", error);
      });
  };

  return (
    <tr className="h-[80px] border border-1 border-b-gray-300">
      <td className="w-[40%]">
        <div className="flex items-center h-full gap-3">
          <div className="w-[20%]">
            <img
              className=" w-full h-full object-cover"
              src={item.image === "" ? imgtest : item.image}
              alt="none"
            />
          </div>
          <div className="text-left">
            <p>{item.nameProduct}</p>
            <p>{item.nameModel}</p>
            <button
              type="button"
              onClick={() => deleteItem(item.idProductDetail, item.quantity)}
            >
              <FontAwesomeIcon icon={faTrash} />
              <span className="pl-2">Xóa</span>
            </button>
          </div>
        </div>
      </td>
      <td>
        <p>
          <del className="pr-3">
            {formatNumbertovnd(item.priceBeforeDiscount)}
          </del>
          {formatNumbertovnd(item.price)}
        </p>
      </td>
      <td>
        <div className="flex justify-center">
          <div className="flex items-center border border-1 border-gray-500 w-fit">
            <button
              className="px-3"
              type="button"
              onClick={() => decreaseQuantity(item.idProductDetail)}
            >
              -
            </button>
            <input
              className="w-[40px] text-center border border-1 border-l-gray-500 border-r-gray-500 outline-none pointer-events-none"
              type="text"
              readOnly
              value={quantity}
            />
            <button
              className="px-3"
              type="button"
              onClick={() => increaseQuantity(item.idProductDetail)}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <p>{formatNumbertovnd(item.price * quantity)}</p>
      </td>
    </tr>
  );
}

export default CartItem;
