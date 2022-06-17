import { useFadeIn, useScrollToTop } from '../../Hooks';
import useUnsplash from '../../Stores/Data/unsplashData';

import './about.scss'

function About() {
  useScrollToTop();
  const fadeIn = useFadeIn();

  const { data } = useUnsplash('company building', 5);

  return (

    <main className="about" ref={fadeIn}>
      <section className="we">
        <div className="imgbox">
          {data ? <img src={data[0].urls.regular} alt="aboutImg" /> : ''}
        </div>
        <div className="note">
          <h2>A YouFirst skincare brand</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.</p>
        </div>
      </section>
      <section className="we">
        <div className="imgbox">
          {data ? <img src={data[1].urls.regular} alt="aboutImg" /> : ''}
        </div>
        <div className="note">
          <h2>Why Choose us?</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.</p>
        </div>
      </section>
      <section className="we">
        <div className="imgbox">
          {data ? <img src={data[2].urls.regular} alt="aboutImg" /> : ''}
        </div>
        <div className="note">
          <h2>Our Edge over the Competition</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.</p>
        </div>
      </section>
      <section className="we">
        <div className="imgbox">
          {data ? <img src={data[3].urls.regular} alt="aboutImg" /> : ''}
        </div>
        <div className="note">
          <h2>The future of the brand!</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.</p>
        </div>
      </section>
      <section className="we">
        <div className="imgbox">
          {data ? <img src={data[4].urls.regular} alt="aboutImg" /> : ''}
        </div>
        <div className="note">
          <h2>What we have been up to!</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi facilis sunt eius odio aperiam, commodi perferendis, eligendi quaerat nesciunt, qui illum totam in. Aliquid dignissimos autem velit iste nesciunt quod.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tempora numquam rerum at facilis asperiores, id quia reiciendis maiores aliquam excepturi nobis quos. Pariatur qui quas repellendus dolor, a facilis.
          </p>
        </div>
      </section>
    </main>
  );
}
export default About;
