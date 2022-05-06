export type ProductData = {
  name: string;
  description: string;
  img: string;
  alt?: string;
  price: string;
  qty?: number;
  id: number;
}

export type ReviewData = {
  name: string;
  description: string;
  img: string;
  alt?: string;
  review: string;
  likes?: number;
  id: number;
}

export type ProductStore = {
  products: ProductData[];
  deleteOne: () => void
  search: (searchTerm: string) => void
}

export type ReviewStore = {
  reviews: ReviewData[];
}

export type ThemeStore = {
  theme: string;
  changeTheme: () => void;
}

