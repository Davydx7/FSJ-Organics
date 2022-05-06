import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Stores/productStore"
import { ProductStore } from "../../Stores/typings"
// import { Props } from "../../Components/ProductCard/typings"


const Products: React.FC = () => {
	const products = useProducts((state: ProductStore) => state.products)
	return (
		<main className="products">
			<div>
				<input type="text" />
			</div>
			<section>
				{products.map((product: any) => <ProductCard key={product.id} {...product} />)}
			</section>
		</main>
	)
}
export default Products