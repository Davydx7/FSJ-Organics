import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Stores/productStore"
import { ProductStore } from "../../Stores/typings"
// import { Props } from "../../Components/ProductCard/typings"


const Products: React.FC = () => {
	const products = useProducts((state: ProductStore) => state.products)
	const filterProducts = useProducts(state => state.search)
	const mappedProducts = products.map((product: any) => 
	<ProductCard key={product.id} {...product} />
	)

	return (
		<main className="products">
			<div>
				<input type="text" onChange={filterProducts} placeholder="search by name" />
			</div>
			<section>
				{mappedProducts.length ?
					mappedProducts :
					<div>
						<h2>No products matches your search</h2>
						<p>Please try searching another term</p>
					</div>}
			</section>
		</main>
	)
}
export default Products