import { useQuery } from 'react-query';
import { createApi } from 'unsplash-js';
// import { unsplashData } from '../typings';

// type Photo = {
//   id: number;
//   width: number;
//   height: number;
//   urls: { large: string; regular: string; raw: string; small: string };
//   color: string | null;
//   user: {
//     username: string;
//     name: string;
//   };
// };

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const unsplash = createApi({
  accessKey: `${API_KEY}`,
});

function splash({ queryKey }) {
  const [, query, num] = queryKey;

  return unsplash.search.getPhotos({
    query,
    perPage: num,
  })
    .then((result) => {
      console.log(result.response?.results);
      return result.response?.results;
    });
}

export default function useUnsplash(query, num) {
  return useQuery<any, Error>(['unsplash', query, num], splash, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
}
