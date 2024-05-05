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

  const { data, error: unsplashError } = useUnsplash('skincare cream and oils', 30);

  const products = useProducts((state: ProductStore) => state.products);
  const filterProducts = useProducts((state) => state.search);

  return (
    <main className="products" ref={fadeIn}>
      <div className="search">
        <p>Search:</p>
        <input type="text" onChange={filterProducts} placeholder="search by name" />
      </div>
      <section>
        {unsplashError
          ? (
            <div>
              <h2 style={{
                // fontSize: "5rem",
                // fontWeight: "bold"
              }}>No products to display</h2>
              <p>Check your connection and reload</p>
            </div>
          )
          : products.length
            ? (
              products.map((product: any, i) => <ProductCard key={product.id} {...product} img={data ? data[i].urls.regular : ''} />)
            )
            : (
              <div>
                <h2 style={{
                  // fontSize: "5rem",
                  // fontWeight: "bold"
                }} >No products matched your Search</h2>
                <p>Try searching for a different term</p>
              </div>
            )
        }
      </section>
    </main>
  );
};
export default Products;
