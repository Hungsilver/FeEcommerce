import SlideShowHome from "@/components/homePage/SlideShowHome";
import ProductItem from "@/components/homePage/productItem";
import ProductListComponent from "@/components/homePage/productListComponent copy";
import { ICategory, ICategoryHome } from "@/shared/layout/header/dataFake";
import React from "react";
import HeaderCategories from "./header_categories";

function CategoryHomeComponent(props: { data: any }) {
  const { data: dataCate } = props;
  return (
    <section className="pb-16">
      <HeaderCategories title={dataCate.name} />
      <div className="flex w-100 gap-3">
        <div className="w-[28%]">
          <a href={"product"}>
            <img
              className="w-full h-auto rounded-md"
              src={dataCate.thumbnail}
              alt="img-category"
            />
          </a>
        </div>
        <div className="w-[72%]">
          <SlideShowHome products={dataCate.products} />
        </div>
      </div>
    </section>
  );
}

export default CategoryHomeComponent;
