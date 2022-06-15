import {
  useLayoutEffect, useRef,
} from 'react';

// export const useScrollPosition = () => {
// 	const [scroll, setScroll] = useState(0);

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			setScroll(window.scrollY);
// 		};

// 		window.addEventListener("scroll", handleScroll);

// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	return scroll;
// }

export const useScrollToTop = () => {
  window.scrollTo(0, 50);
};

export const useFadeIn = () => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const element = ref.current

    if (element) {
      element.style.opacity = '0';

      setTimeout(() => {
        if (element) {
          element.style.transition = 'all 0.2s ease-out';
          element.style.opacity = '1';
        }
      });
    }
    return () => {
      if (element) {
        element.style.transition = '';
      }
    };
  }, []);

  return ref;
};
