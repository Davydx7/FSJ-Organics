import { useLayoutEffect, useRef } from 'react';
import { useFadeIn, useScrollToTop } from '../../Hooks';
import './blog.scss';

function Blog() {
  useScrollToTop();
  const fadeIn = useFadeIn();
  const fun = useRef<HTMLDivElement>(null);
  // console.log();

  useLayoutEffect(() => {
    let fundiv = fun.current;

    if (fundiv) {
      const child = '<i></i>'.repeat(2000);

      fundiv.innerHTML += child;
    }

  }, []);

  return (
    <main className="blog" ref={fadeIn}>
      <div ref={fun} className='upper fun'></div>
      <section className="">
        <h2>Everything Skincare!</h2>
        <p>Watch out for this Space! </p>
      </section>
      <div ref={fun} className='lower fun'></div>

    </main>
  );
}
export default Blog;
