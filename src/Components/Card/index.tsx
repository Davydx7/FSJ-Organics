import { Props } from "./typings"

const ProductCard : React.FC<Props> = ({name, description, src, alt}) => {
	return (
		<div>
			<div>
				<img src={src} alt={alt} />
			</div>
			<p>{name}</p>
			<p>{description}</p>
		</div>
	)
}
export default ProductCard