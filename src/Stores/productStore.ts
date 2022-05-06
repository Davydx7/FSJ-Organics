import create from 'zustand'
import data from './Data/Productdata'
import { ProductStore } from './typings'

const useProducts = create<ProductStore>((set) => ({
  products: data,
  deleteOne() {
    set(state => {
      let newState = { ...state }
      newState.products.pop()
      return newState
    })
  },
  search(e) {
    set((state) => {
      let searchTerm = e.currentTarget.value
      let newState = { ...state }
      newState.products = data.filter(product => {
        //search only by name, description and price will be implemented later
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      return newState;
    })
  }
}))

export default useProducts