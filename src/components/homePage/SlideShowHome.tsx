"use client";
import { IProduct } from "@/shared/layout/header/dataFake";
import React from "react";
import Slider from "react-slick";
import ProductItem from "./productItem";

function SlideShowHome(props: { products: IProduct[] }) {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {props.products &&
        props.products.map((item, index) => (
          <ProductItem key={item.id} product={item} />
        ))}
    </Slider>
  );
}
export default SlideShowHome;
