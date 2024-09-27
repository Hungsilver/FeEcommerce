import React from "react";

function CartListItem({ children }: any) {
  return (
    <table className=" w-full text-center align-middle">
      <thead className="h-[50px] border border-1 border-b-gray-300">
        <tr>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default CartListItem;
