import Button from '../../Components/Button';
import ReviewCard from '../../Components/ReviewCard';
import useReviews from '../../Stores/reviewStore';

import './home.scss';
import { Link } from 'react-router-dom';
import useUnsplash from '../../Stores/Data/unsplashData';
import { useFadeIn, useScrollToTop } from '../../Hooks';

function Home() {
  const fadeIn = useFadeIn();
  useScrollToTop();

  const reviews = useReviews((state: any) => state.reviews);
  const { data } = useUnsplash('female portrait', 6);

  return (
    <main className="Home" ref={fadeIn}>
      <section className="hero">
        <div className="herotext">
          <h1>
            Your Skin
            <br />
            Deserves the
            <br />
            Best!
          </h1>
          <p>Let your skin speak before you do.</p>
          <Link to="/products">
            <Button>
              Shop Now!
            </Button>
          </Link>
        </div>
        {/* <img src={hero} alt="hero" /> */}
      </section>
      <section className="reviews">
        {// map through reviews	and display them	in a list	with a button to view the review
				}
        {data && reviews.map((review: any, i) => (
          <ReviewCard key={review.id} {...review} img={data[i].urls.regular} />
        ))}
      </section>
    </main>
  );
}
export default Home;
