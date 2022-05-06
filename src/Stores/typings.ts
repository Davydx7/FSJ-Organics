export type ProductStore = {
  products: object[];
  deleteOne: () => void
}
export type ThemeStore = {
  theme: string;
  changeTheme: () => void;
}