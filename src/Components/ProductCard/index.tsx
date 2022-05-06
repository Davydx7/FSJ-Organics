import './productCard.scss'
import { Props } from "./typings"

const ProductCard : React.FC<Props> = ({name, description, img, alt, price, qty, id}) => {
	return (
		<div className="productCard">
			<div>
				<img src={img} alt={alt} />
			</div>
			<p>{name}</p>
			<p>{description}</p>
			<p>{price}</p>
			<p>{qty}</p>
		</div>
	)
}
export default ProductCard