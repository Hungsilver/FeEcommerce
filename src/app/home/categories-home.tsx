"use client";
import React, { useState } from "react";
import "./categories-home.scss";
import { ICategoryHome } from "@/shared/layout/header/dataFake";

function CategoriesHome(props: {
  images: string[];
  categories: ICategoryHome[];
}) {
  const { images, categories } = props;
  const [cateChoose, setCateChoose] = useState("1");
  let changeCate = (idCate: string) => {
    setCateChoose(idCate);
  };
  let dataCateChoose: ICategoryHome =
    categories.find((item) => item.id.toString() === cateChoose) ||
    categories[0];
  return (
    <div>
      <div className="flex flex-col py-[25px] md:flex-row justify-center gap-3 ">
        {images &&
          images.map((item, index) => (
            <div key={index}>
              <img
                className="sm:w-full object-cover md:w-auto"
                src={item}
                alt="img"
              />
            </div>
          ))}
      </div>
      <div className="w-[80%] mx-auto">
        <ul className="flex category-main justify-center gap-8">
          <li
            className={cateChoose === "1" ? "li-select" : ""}
            onClick={() => changeCate("1")}
          >
            NAM
          </li>
          <li
            className={cateChoose === "2" ? "li-select" : ""}
            onClick={() => changeCate("2")}
          >
            NỮ
          </li>
          <li
            className={cateChoose === "3" ? "li-select" : ""}
            onClick={() => changeCate("3")}
          >
            TRẺ EM
          </li>
          <li
            className={cateChoose === "4" ? "li-select" : ""}
            onClick={() => changeCate("4")}
          >
            ĐỒNG PHỤC
          </li>
        </ul>
        <div className="flex justify-center py-4">
          {!!dataCateChoose.subCategories &&
            dataCateChoose.subCategories.map((item) => (
              <div key={item.id} className="w-[150px]">
                <img
                  loading="lazy"
                  className="w-100 h-auto"
                  src={item.image}
                  alt="img-category"
                />
                <div>
                  <p className="text-center">{item.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesHome;
