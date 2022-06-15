import { useState, useEffect, useLayoutEffect, useRef } from "react";

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
	window.scrollTo(0,50);
}

export const useFadeIn = () => {
	const ref = useRef<HTMLElement>(null);

	useLayoutEffect(() => {
		if (ref.current) {
			console.log('mounted')

			ref.current.style.opacity = '0';
			console.log(ref.current.style.opacity);

			setTimeout(() => {
				if (ref.current) {
					ref.current.style.transition = 'all 0.2s ease-out';
					ref.current.style.opacity = '1';
					console.log('set to 1');
				}
			})
		}
		return () => {
			if (ref.current) {
				ref.current.style.transition = '';
				console.log( 'unmounted')
				console.log(ref.current.style.transition)
			}
		}
	}, []);


	return ref;
}