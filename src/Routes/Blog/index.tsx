import { useFadeIn, useScrollToTop } from "../../Hooks"
import './blog.scss'

const Blog = () => {
	useScrollToTop()
	const fadeIn = useFadeIn();

	return (
		<main className="blog" ref={fadeIn}>
			<section className="">
				<h2>Everything Skincare!</h2>
				<p>Watch out for this Space! </p>
			</section>
		</main>
	)
}
export default Blog