"use client";
import { get } from "@/config/axiosConfig";
import { formatNumbertovnd } from "@/shared/common/convertNumtovnd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IProductShowDetail {
  id: number;
  price: any;
  priceBeforeDiscount: any;
  discount: number;
  stock: number;
  image: string;
  quantityBuy?: number;
}

// cần sửa quản lí state form trong cùng 1 state. tránh nhiều state dẫn tới khó quản lí
function ProductDetailPage() {
  const routerRedirect = useRouter();
  const router = useSearchParams();
  const code = router.get("code");

  const [data, setData] = useState<IProductSeller>();
  const [product, setProduct] = useState<IProductShowDetail>();
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [error, setError] = useState<{
    message: string | null;
    type: "quantity" | "option" | null; ///loai loi
  }>({
    message: null,
    type: null,
  });
  const [formSubmid, setFormSubmid] = useState({
    idProduct: undefined as number | undefined,
    idProductDetail: undefined as number | undefined,
    quantity: 1,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const dataProduct: any = await get(`/products/${code}`);
        // const dataProduct: IProductSeller = productById1;
        setData(dataProduct);
        handleNotModelSelected(dataProduct); //set data for product
        setFormSubmid((prevForm) => ({
          ...prevForm,
          idProduct: dataProduct.id,
        }));
      } catch (error) {
        console.log("error fetch product", error);
      }
    };
    fetchProduct();
  }, []);

  const imgProducttemp = data?.image;

  useEffect(() => {}, [selectedOptions]);
  // useEffect(() => {}, [error]);

  const handleNotModelSelected = (p: any) => {
    setProduct({
      id: p.id,
      price: `${formatNumbertovnd(p.priceMin)} - ${formatNumbertovnd(
        p.priceMax
      )}`,
      priceBeforeDiscount: `${formatNumbertovnd(
        p.priceMinBeforeDiscount
      )} - ${formatNumbertovnd(p.priceMaxBeforeDiscount)}`,
      discount: p.showDiscount,
      stock: p.stock,
      image: p.image,
    });
  };

  const handleModelSelectedAll = (p: IProductModel) => {
    //set modelId
    setFormSubmid({
      idProductDetail: p.id,
      idProduct: data?.id,
      quantity: 1,
    });
    setProduct({
      id: p.id,
      price: formatNumbertovnd(p.price),
      priceBeforeDiscount: formatNumbertovnd(p.priceBeforeDiscount),
      discount: p.showDiscount,
      stock: p.stock,
      image: p.image || "",
    });
  };

  const handlerClickOption = (nameVariant: string, opt: string) => {
    //chua chon het
    const updatedOptions = {
      ...selectedOptions,
      [nameVariant]: opt,
    };

    setSelectedOptions(updatedOptions);

    // delete neu chon trung option
    if (selectedOptions[nameVariant] === opt) {
      const { [nameVariant]: variantDel, ...other } = selectedOptions;
      setSelectedOptions(other);
      handleNotModelSelected(data); // change data to default load page
      //clear form
      setFormSubmid((prevForm) => ({
        ...prevForm,
        idModel: undefined,
        quantity: 1,
      }));
      return;
    }
    // neu chon du option
    if (Object.keys(updatedOptions).length === data?.tierVariations.length) {
      const nameModel: string = Object.values(updatedOptions)
        .map((value) => {
          return value;
        })
        .sort()
        .join(",");
      const model =
        data.models.find((item: IProductModel) => {
          return item.name.split(",").sort().join(",") === nameModel;
        }) ?? null;
      if (model === null) {
        return;
      }
      handleModelSelectedAll(model);
    } else {
      // chua chon du
      handlerIfNotChooseAllOption(updatedOptions);
    }
  };

  const handlerIfNotChooseAllOption = (newSelectOptionNow: any) => {
    const nameModel: string = Object.values(newSelectOptionNow)
      .map((value) => {
        return value;
      })
      .join(",");

    const modelFilter = data?.models.filter((item) => {
      return item.name.includes(nameModel);
    });
    // setData((dataOld) => ({

    // }));
  };

  // const handlerOptionIfStockZero = (tierName: string, option: string) => {
  //   const nameOptionChoose: string = Object.values(selectedOptions).join(",");
  //   if (Object.keys(selectedOptions).length === 0) {
  //     return;
  //   }
  //   const modelFilter: any = data?.models.filter((item) => {
  //     //list mau den
  //     return item.name.includes(nameOptionChoose);
  //   });
  //   const check = modelFilter.find((item: any) => {
  //     return item.name.includes(option);
  //   });

  //   return check?.stock;
  // };

  // #### validate sau
  const changeQuantityInput = (e: any) => {
    const quantityInput = e?.target?.value;
    const stock = product?.stock;
    if (!isNaN(quantityInput) && stock) {
      let quantityValid = quantityInput;
      if (quantityInput > stock) {
        quantityValid = stock;
      }
      setFormSubmid((prev) => ({
        ...prev,
        quantity: quantityValid,
      }));
    }
  };
  const increaseQuantity = () => {
    const maxQuantity = product?.stock ?? 1;
    setFormSubmid((prevState) => ({
      ...prevState,
      quantity:
        prevState.quantity === maxQuantity
          ? maxQuantity
          : prevState.quantity + 1,
    }));
  };

  const decreaseQuantity = () => {
    setFormSubmid((prevState) => ({
      ...prevState,
      quantity: prevState.quantity === 1 ? 1 : prevState.quantity - 1,
    }));
  };

  const clearError = () => {
    setError({
      message: null,
      type: null,
    });
  };

  const checkValidSubmit = () => {
    let errorQuantity = "Sản phẩm đã hết hàng";
    let errorOption = "Vui lòng chọn option";

    if (formSubmid.idProductDetail === undefined || null) {
      setError({
        message: errorOption,
        type: "option",
      });
      return false;
    }

    if (product?.stock === 0) {
      setError({
        message: errorQuantity,
        type: "quantity",
      });
      return false;
    }
    clearError();
    return true;
  };

  const addToCart = () => {
    if (!checkValidSubmit()) {
      return;
    }

    const { idProduct, ...other } = formSubmid;
    get("/cart/updateCart", other)
      .then((data: any) => {
        if ((data.message = "success")) {
          alert("them sp thành công");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerBuyNow = () => {
    console.log(formSubmid);
    if (!checkValidSubmit()) {
      return;
    }
    const { idProduct, ...other } = formSubmid;
    get("/cart/updateCart", other)
      .then((data: any) => {
        if ((data.message = "success")) {
          alert("them sp thành công");
          routerRedirect.push("/cart");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-1 mb-4">
      <div className="my-4">
        <p>Trang chủ /</p>
      </div>
      <div className="flex gap-5">
        <div className="flex-1">
          <div className="flex">
            <div>imgs</div>
            <div className="">
              <img
                src={product?.image === "" ? imgProducttemp : product?.image}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-[24px] font-[750]">{data?.name}</h1>
          <p className="flex gap-3 items-center">
            <span className="text-red-500 font-[700] text-[24px]">
              {product?.price}
            </span>
            <del className="font-[600] text-[17px]">
              {product?.priceBeforeDiscount}
            </del>
            <span className="bg-red-500 text-white py-1 px-2 rounded-sm">
              {product?.discount}%
            </span>
          </p>
          <div className="bg-gray-300 py-2 px-3 rounded-md inline-block my-3">
            Có {product?.stock} sản phẩm trong kho
          </div>
          <div>
            {data?.tierVariations &&
              data.tierVariations.map((item: ITierVariation, index: number) => (
                <div key={item.name}>
                  <p className="my-2">{item.name}</p>
                  <div className="flex gap-3">
                    {item.options &&
                      item.options.map((opt, index) => (
                        <button
                          className={`border  py-2 px-3 rounded-md ${
                            selectedOptions[item.name] === opt
                              ? " border-gray-800"
                              : "border-gray-300"
                          } `}
                          type="button"
                          key={opt}
                          // disabled={
                          //   handlerOptionIfStockZero(item.name, opt) === 0
                          // }
                          onClick={() => handlerClickOption(item.name, opt)}
                        >
                          {opt}
                        </button>
                      ))}
                  </div>
                </div>
              ))}
          </div>
          {error.type === "option" ? (
            <span className="text-red-600 pt-2">{error.message}</span>
          ) : (
            ""
          )}

          <div className="mt-3">
            <span>Số lượng</span>
            <div className="flex items-center gap-5">
              <div className="flex border border-1 border-black max-w-fit rounded-sm h-[40px]">
                <button className="w-[40px]" onClick={decreaseQuantity}>
                  -
                </button>
                <div className=" border border-l-black border-r-black">
                  <input
                    className="w-[60px] outline-none text-center h-full"
                    type="text"
                    value={formSubmid.quantity}
                    onChange={changeQuantityInput}
                    min={1}
                    max={product?.stock}
                  />
                </div>
                <button className="w-[40px]" onClick={increaseQuantity}>
                  +
                </button>
              </div>
              {error.type === "quantity" ? (
                <span className="text-red-600">{error.message}</span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mt-3 flex gap-5">
            <button
              className="bg-orange-800 py-2 px-10 rounded-md text-white"
              type="button"
              onClick={handlerBuyNow}
              // disabled={product?.stock === 0}
            >
              Mua ngay
            </button>
            <button
              className="bg-orange-800 py-2 px-10 rounded-md text-white"
              type="button"
              onClick={addToCart}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetailPage;
