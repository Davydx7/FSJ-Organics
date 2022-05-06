import create from 'zustand'
import data from '../data'
import { ProductStore } from './typings'

const useProducts = create<ProductStore>((set) => ({
  products: data,
  deleteOne() {
    set(state => {
      let newState = { ...state }
      newState.products.pop()
      return newState
    }
  ),
}))

export default useProducts