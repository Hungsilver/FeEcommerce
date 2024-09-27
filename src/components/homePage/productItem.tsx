import { formatNumbertovnd } from "@/shared/common/convertNumtovnd";
import { IProduct } from "@/shared/layout/header/dataFake";
import Link from "next/link";
import React from "react";

function ProductItem(props: { product: IProduct }) {
  const { product: productItem } = props;
  const prettyUrl: string = productItem.name.split(" ").join("-");
  return (
    <div className="flex flex-col gap-3 p-3 border-2 rounded-md border-gray-200 h-full">
      <Link
        href={`/product/${prettyUrl}?code=${productItem.code}`}
        className="w-full relative outline-none"
      >
        <img
          loading="lazy"
          className=" rounded-md object-cover"
          src={productItem.thumbnail}
          alt="img-product"
        />
        <div className="bg-red-500 rounded-full w-[40px] h-[40px] absolute left-[-5px] top-[-5px] flex justify-center items-center text-[12px] text-white">
          {productItem.showDiscount}%
        </div>
      </Link>
      <div>
        <a
          className="font-semibold"
          href={`/product/${prettyUrl}?code=${productItem.code}`}
        >
          {productItem.name}
        </a>
        <div className="">
          <span className="mr-5 font-bold text-red-400">
            {formatNumbertovnd(productItem.price)}
          </span>
          <del className="">
            {" "}
            {formatNumbertovnd(productItem.priceBeforeDiscount)}
          </del>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
