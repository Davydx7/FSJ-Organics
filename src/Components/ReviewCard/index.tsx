import './reviewCard.scss'
import { Props } from "./typings"

const ReviewCard : React.FC<Props> = ({name, img, alt, description, review, likes, id}) => {
	return (
		<div className="reviewCard">
			<div>
				<img src={img} alt={alt} />
			</div>
			<p>{name}</p>
			<p>{description}</p>
			<p>{review}</p>
			<p>{likes}</p>
		</div>
	)
}
export default ReviewCard