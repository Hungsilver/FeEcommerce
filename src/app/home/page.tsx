"use client";
import Banner from "@/components/banner/banner";
import React, { useEffect, useState } from "react";
import CategoriesHome from "./categories-home";
import {
  ICategory,
  ICategoryHome,
  IDataNews,
  dataCategories,
  dataCategoriesHome,
  dataNews,
} from "@/shared/layout/header/dataFake";

import CategoryHomeComponent from "./categoryHomeComponent";
import NewsPage from "./news/news";
import axios from "axios";
import { get } from "@/config/axiosConfig";

function HomePage() {
  const [dataProductsInCates, setDataProductsInCates] = useState<any>();
  useEffect(() => {
    const fetchDataHome = async () => {
      try {
        const data = await get<any>("/home-page");
        setDataProductsInCates(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchDataHome();
  }, []);
  const dataNewsHome: IDataNews[] = dataNews;
  const imgBanner: string =
    "https://savani.vn/images/products/cat/2024/03/original/banner-trang-chu_1709284497.webp";
  const listImgCategories: string[] = [
    "https://savani.vn/images/banners//banner_under_home/toan-bo-hang-kisd_423x218_1709517944.webp",
    "https://savani.vn/images/banners//banner_under_home/toan-bo-hang-kisd_423x218_1709517944.webp",
    "https://savani.vn/images/banners//banner_under_home/toan-bo-hang-kisd_423x218_1709517944.webp",
  ];
  return (
    <>
      <Banner image={imgBanner} />
      <div className="w-[90%] m-auto">
        <CategoriesHome
          images={listImgCategories}
          categories={dataCategoriesHome}
        />
        <div className="py-[50px]">
          {!!dataProductsInCates &&
            dataProductsInCates.map((item: any) => (
              <CategoryHomeComponent key={item.id} data={item} />
            ))}
          <NewsPage dataNew={dataNewsHome} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
