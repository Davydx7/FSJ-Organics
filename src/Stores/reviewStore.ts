import create from 'zustand'
import reviewData from './Data/Reviewdata'
import { ReviewStore } from './typings'

const useReviews = create<ReviewStore>((set) => ({
  reviews: reviewData,
}))

export default useReviews