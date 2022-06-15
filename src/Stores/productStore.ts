import create from 'zustand';
import productData from './Data/Productdata';
import { ProductStore } from './typings';

const useProducts = create<ProductStore>((set) => ({
  products: productData,
  deleteOne() {
    set((state) => {
      const newState = { ...state };
      newState.products.pop();
      return newState;
    });
  },
  search(e) {
    set((state) => {
      const searchTerm = e.currentTarget.value;
      const newState = { ...state };
      newState.products = productData.filter((product) =>
        // search only by name, description and price will be implemented later
        product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return newState;
    });
  },
}));

export default useProducts;
