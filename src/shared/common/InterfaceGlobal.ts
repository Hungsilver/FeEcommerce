interface IApiResponse {
  code: number;
  message: number;
  data: any;
}
interface IProductSeller {
  id: number;
  name: string;
  priceMin: number;
  priceMax: number;
  priceMinBeforeDiscount: number;
  priceMaxBeforeDiscount: number;
  showDiscount: number;
  description: string;
  status: number;
  image: string;
  images: string[] | null;
  promotionId: number;
  sold: number;
  stock: number;
  tierVariations: ITierVariation[];
  models: IProductModel[];
}

interface ITierVariation {
  name: string;
  options: string[];
}

interface IProductModel {
  id: number;
  sku: string;
  name: string;
  image: string | null;
  price: number;
  priceBeforeDiscount: number;
  showDiscount: number;
  sold: number;
  stock: number;
  featured: any; // Define the type of 'featured' if it's supposed to be something specific
  productId: number;
  status: any; // Define the type of 'status' if it's supposed to be something specific
  isDisable?: boolean;
}
