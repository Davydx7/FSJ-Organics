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

export type unsplashData = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
      username: string;
      name: string;
    };
}

export type ProductStore = {
  products: ProductData[];
  deleteOne: () => void
  search: React.ChangeEventHandler<HTMLInputElement>
}

export type ReviewStore = {
  reviews: ReviewData[];
}

export type ThemeStore = {
  theme: string;
  changeTheme: () => void;
}
