export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IFormInfo {
  fullName: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: string;
  subscribe: boolean;
  policy: boolean;
}
