import ProductCard from '../../Components/ProductCard';
import './products.scss';
import { useFadeIn, useScrollToTop } from '../../Hooks';
import useProducts from '../../Stores/productStore';
import { ProductStore } from '../../Stores/typings';
import useUnsplash from '../../Stores/Data/unsplashData';
// import { Props } from "../../Components/ProductCard/typings"

const Products: React.FC = () => {
  useScrollToTop();
  const fadeIn = useFadeIn();

  const { data } = useUnsplash('skincare products', 6);

  const products = useProducts((state: ProductStore) => state.products);
  const filterProducts = useProducts((state) => state.search);

  return (
    <main className="products" ref={fadeIn}>
      <div className="search">
        <p>Search:</p>
        <input type="text" onChange={filterProducts} placeholder="search by name" />
      </div>
      <section>
        {data
          ?						products.map((product: any, i) => <ProductCard key={product.id} {...product} img={data[i].urls.regular} />)
				  : (
  <div>
    <h2>No products matches your search</h2>
    <p>Please try searching another term</p>
  </div>
				  )}
      </section>
    </main>
  );
};
export default Products;
