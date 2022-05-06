import create from 'zustand'
import data from './Data/Reviewdata'
import { ReviewStore } from './typings'

const useReviews = create<ReviewStore>((set) => ({
  reviews: data,
}))

export default useReviews