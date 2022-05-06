import ProductCard from "../../Components/ProductCard";
import useProducts from "../../Stores/productStore"
import { ProductStore } from "../../Stores/typings"
// import { Props } from "../../Components/ProductCard/typings"


const Products: React.FC = () => {
	const products = useProducts((state: ProductStore) => state.products)
	return (
		<main>
			{products.map((product: any) => <ProductCard key={product.id} {...product} />)}
		</main>
	)
}
export default Products