export interface ICategory {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  categoriesChild: ICategoryChild[];
  subCategories: ISubCategory[];
  status: number;
  createdDate: string;
  lastModifiedDate: string;
}

export interface ICategoryChild {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  subCategories: ISubCategory[];
  status: number;
  createdDate: string;
  lastModifiedDate: string;
}

export interface ISubCategory {
  id: number;
  name: string;
  image: string;
  description: string;
  createdDate: string;
  lastModifiedDate: string;
  status: number;
}

export interface IProduct {
  id: number;
  code: string;
  name: string;
  subCategory: ISubCategory;
  promotion: any;
  description: string;
  thumbnail: string;
  price: number;
  priceBeforeDiscount: number;
  showDiscount: number;
  productDetails: any[];
  createdDate: string;
  lastModifiedDate: string;
  status: number;
}

export interface IPageableData {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface IResponseData {
  content: IProduct[];
  pageable: IPageableData;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface ICategoryHome {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  subCategories: ISubCategory[];
  products: IProduct[];
  status: number;
  createdDate: string;
  lastModifiedDate: string;
}

export const dataCategories: ICategory[] = [
  {
    id: 1,
    name: "nam",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-nam-savani_1706273946.jpg",
    description: "dd",
    categoriesChild: [
      {
        id: 6,
        name: "quần",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 21,
            name: "Quần âu",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 23,
            name: "Quần jean",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 25,
            name: "Quần short",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 8,
        name: "phụ kiện",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 38,
            name: "Cà vạt",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 39,
            name: "Dây lưng",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 5,
        name: "áo",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 16,
            name: "Áo chống nắng",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 5,
            name: "Áo T-Shirt",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 18,
            name: "Áo len",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 1,
            name: "Áo polo",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 9,
            name: "Áo nỉ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 13,
            name: "Áo sơ mi",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 7,
        name: "bộ đồ",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 30,
            name: "Bộ đồ hè",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 29,
            name: "Bộ vest",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 31,
            name: "Bộ nỉ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
    ],
    subCategories: [],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 2,
    name: "nữ",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-nu-savani_1706273969.jpg",
    description: "dd",
    categoriesChild: [
      {
        id: 13,
        name: "áo",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 2,
            name: "Áo polo",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 20,
            name: "Áo len",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 11,
            name: "Áo nỉ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 7,
            name: "Áo T-Shirt",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 15,
            name: "Áo sơ mi",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 17,
        name: "bộ đồ",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 34,
            name: "Bộ đồ nữ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 35,
            name: "Bộ nỉ cổ tròn",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 9,
        name: "váy nữ",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 28,
            name: "Chân váy",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 15,
        name: "quần",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 24,
            name: "Quần jean",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 26,
            name: "Quần short",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 22,
            name: "Quần âu",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
    ],
    subCategories: [],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 3,
    name: "trẻ em",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-tre-em_1706274031.jpg",
    description: "dd",
    categoriesChild: [
      {
        id: 18,
        name: "bộ đồ",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 36,
            name: "Bộ xuân hè",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 37,
            name: "Bộ thu đông",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 16,
        name: "quần",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 27,
            name: "Quần short",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 10,
        name: "váy trẻ em",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 33,
            name: "Váy bé gái",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 32,
            name: "Chân váy",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 14,
        name: "áo",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 8,
            name: "Áo T-Shirt",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 12,
            name: "Áo nỉ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 3,
            name: "Áo polo",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
    ],
    subCategories: [],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 4,
    name: "đồng phục",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-gia-dinh-savani_1706274051.jpg",
    description: "dd",
    categoriesChild: [
      {
        id: 11,
        name: "đồng phục gia đình",
        thumbnail: "''",
        description: "dd",
        subCategories: [
          {
            id: 10,
            name: "Áo nỉ",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 14,
            name: "Áo sơ mi",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 17,
            name: "Áo chống nắng",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 19,
            name: "Áo len",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 6,
            name: "Áo T-Shirt",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
          {
            id: 4,
            name: "Áo polo",
            image: "''",
            description: "none",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            status: 1,
          },
        ],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
      {
        id: 12,
        name: "đồng phục nhóm",
        thumbnail: "''",
        description: "dd",
        subCategories: [],
        status: 1,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
      },
    ],
    subCategories: [],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
];
export const dataCategoriesHome: ICategoryHome[] = [
  {
    id: 1,
    name: "nam",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-nam-savani_1706273946.jpg",
    description: "dd",
    products: [
      {
        id: 3,
        code: "MS003",
        name: "Áo polo nam",
        subCategory: {
          id: 1,
          name: "Áo polo",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        promotion: null,
        description: "không",
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        productDetails: [],
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 1,
        code: "MS001",
        name: "Áo T-shirt nam",
        subCategory: {
          id: 5,
          name: "Áo T-Shirt",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        promotion: {
          id: 1,
          code: "MAGD093",
          name: "Tet",
          type: true,
          value: 50000,
          startDate: null,
          endDate: null,
          minSpend: 400000,
          maxSpend: 500000,
          quantityUsed: 2,
          status: 1,
          createdDate: null,
          lastModifiedDate: null,
        },
        description: "không",
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        productDetails: [
          {
            createdBy: "AA",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedBy: "AA",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            id: 1,
            sku: "SP001",
            name: "Áo T-shirt nam MS001",
            image: "''",
            price: 123000,
            sold: 12,
            featured: true,
            status: 1,
          },
          {
            createdBy: "AA",
            createdDate: "2024-03-05T16:37:47.040007Z",
            lastModifiedBy: "AA",
            lastModifiedDate: "2024-03-05T16:37:47.040007Z",
            id: 2,
            sku: "SP002",
            name: "Áo polo nữ MS004",
            image: "''",
            price: 123000,
            sold: 12,
            featured: true,
            status: 1,
          },
        ],
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    subCategories: [
      {
        id: 21,
        name: "Quần âu",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/nam-15_1690536219.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 23,
        name: "Quần jean",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/nam-15_1690536219.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 29,
        name: "Bộ vest",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/nam-16_1690536241.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 2,
    name: "nữ",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-nu-savani_1706273969.jpg",
    description: "dd",
    subCategories: [
      {
        id: 2,
        name: "Áo polo",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/_wpf012-2b1065-2_1690183051.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 20,
        name: "Áo len",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/_wts004-2p0073-1_1690183033.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 11,
        name: "Áo nỉ",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/ao-so-mi-ngan-tay-basic-nu_1690183018.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 24,
        name: "Quần jean",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/mqj002-3-a6837--01_1690183067.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 26,
        name: "Quần short",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/mqj002-3-a6837--01_1690183067.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    products: [
      {
        id: 4,
        code: "MS004",
        name: "Áo polo nữ",
        subCategory: {
          id: 2,
          name: "Áo polo",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        promotion: null,
        description: "không",
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        productDetails: [],
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 5,
        code: "MS099",
        name: "Áo len nữ",
        subCategory: {
          id: 2,
          name: "Áo polo",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        promotion: null,
        description: "không",
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        productDetails: [],
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 3,
    name: "trẻ em",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-tre-em_1706274031.jpg",
    description: "dd",
    subCategories: [
      {
        id: 36,
        name: "Bộ xuân hè",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/kid-06_1690536385.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 37,
        name: "Bộ thu đông",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/kid-05_1690536391.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 27,
        name: "Quần short",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/kid-03_1690536425.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    products: [],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
  {
    id: 4,
    name: "đồng phục",
    thumbnail:
      "https://savani.vn/images/menus/thoi-trang-gia-dinh-savani_1706274051.jpg",
    description: "dd",
    subCategories: [
      {
        id: 6,
        name: "Áo T-Shirt",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/dp-11_1690536291.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 4,
        name: "Áo polo",
        image:
          "https://savani.vn/images/products/cat/2023/07/resized/dp-09_1690536301.webp",
        description: "none",
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    products: [
      {
        id: 2,
        code: "MS002",
        name: "Áo T-shirt nữ",
        subCategory: {
          id: 6,
          name: "Áo T-Shirt",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        promotion: null,
        description: "không",
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        productDetails: [],
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
      {
        id: 3,
        code: "MS0090",
        name: "Áo T-shirt nữ",
        subCategory: {
          id: 6,
          name: "Áo T-Shirt",
          image: "''",
          description: "none",
          createdDate: "2024-03-05T16:37:47.040007Z",
          lastModifiedDate: "2024-03-05T16:37:47.040007Z",
          status: 1,
        },
        price: 23525,
        showDiscount: 10,
        priceBeforeDiscount: 23523562,
        promotion: null,
        description: "không",
        thumbnail:
          "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
        productDetails: [],
        createdDate: "2024-03-05T16:37:47.040007Z",
        lastModifiedDate: "2024-03-05T16:37:47.040007Z",
        status: 1,
      },
    ],
    status: 1,
    createdDate: "2024-03-05T16:37:47.040007Z",
    lastModifiedDate: "2024-03-05T16:37:47.040007Z",
  },
];

// export const dataProductsByCategoryId1: IResponseData = {
//   content: [
//     {
//       id: 3,
//       code: "MS003",
//       name: "Áo polo nam",
//       subCategory: {
//         id: 1,
//         name: "Áo polo",
//         image: "''",
//         description: "none",
//         createdDate: "2024-03-05T16:37:47.040007Z",
//         lastModifiedDate: "2024-03-05T16:37:47.040007Z",
//         status: 1,
//       },
//       promotion: null,
//       description: "không",
//       thumbnail:
//         "https://savani.vn/images/image/2024/04/01/large/MPS002S4-3-E02-polo-nam-3.jpg",
//       productDetails: [],
//       createdDate: "2024-03-05T16:37:47.040007Z",
//       lastModifiedDate: "2024-03-05T16:37:47.040007Z",
//       status: 1,
//     },
//   ],
//   pageable: {
//     pageNumber: 0,
//     pageSize: 20,
//     sort: {
//       empty: true,
//       sorted: false,
//       unsorted: true,
//     },
//     offset: 0,
//     unpaged: false,
//     paged: true,
//   },
//   last: true,
//   totalElements: 1,
//   totalPages: 1,
//   size: 20,
//   number: 0,
//   sort: {
//     empty: true,
//     sorted: false,
//     unsorted: true,
//   },
//   first: true,
//   numberOfElements: 1,
//   empty: false,
// };

export interface IDataNews {
  id: number;
  image: string;
  title: string;
  createDate: string;
}
export const dataNews: IDataNews[] = [
  {
    id: 1,
    image:
      "https://savani.vn/images/news/2024/04/home/phoi-so-mi-tay-ngan-cung-quan-au-thoi-thuong_1712973652.png",
    title:
      "Tips phối đồ quần tây áo sơ mi nam thời thượng - nâng tầm phong cách | Savani.vn",
    createDate: "13/04/2024",
  },
  {
    id: 2,
    image:
      "https://savani.vn/images/news/2024/04/home/chinh-thuc-ra-mat_1712800591.png",
    title:
      "Chính Thức Ra Mắt Polo Công Nghệ Mới 2024 - Giá Trải Nghiệm Chỉ 229K",
    createDate: "13/04/2024",
  },
  {
    id: 3,
    image:
      "https://savani.vn/images/news/2024/04/home/10-shop-ban-ao-thun-co-co-uy-tin-chinh-hang-min_1712558499.png",
    title: "10+ shop bán áo thun nam có cổ uy tín - chính hãng 2024",
    createDate: "13/04/2024",
  },
];
