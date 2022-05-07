import Button from "../../Components/Button"
import ReviewCard from "../../Components/ReviewCard"
import useReviews from "../../Stores/reviewStore"

import hero from "../../Assets/images/hero.png"
import './home.scss'
// import {ReactComponent as Hero} from ''

const Home = () => {
	const reviews = useReviews((state: any) => state.reviews)

	return (
		<main className="Home">
			<section className="hero">
				<div className="herotext">
					<h1>Your Skin deserves the Best!</h1>
					<p>Let your skin speak before you do.</p>
					<Button />
				</div>
				<img src={hero} alt="hero" />
			</section>
			<section className="reviews">
				<ul>
					{// map through reviews	and display them	in a list	with a button to view the review
					}
					{reviews.map((review: any) => (
						<ReviewCard key={review.id} {...review} />
					))}
				</ul>
			</section>
		</main>
	)
}
export default Home