import { useFadeIn, useScrollToTop } from "../../Hooks"

const About = () => {
	useScrollToTop()
	const fadeIn = useFadeIn()

	return (
		<main className="about" ref={fadeIn}>
			<section className="we">
				<h1>A YouFirst skincare brand</h1>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.</p>
			</section>
		</main>
	)
}
export default About