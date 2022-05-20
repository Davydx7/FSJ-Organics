import './reviewCard.scss'
import { Props } from "./typings"
import { ReactComponent as Likes } from '../../Assets/SVG/likes.svg'

const ReviewCard : React.FC<Props> = ({name, img, alt, description, review, likes, id}) => {
	return (
		<div className="reviewCard">
			<div className='head'>
				<img className='image' src={img} alt={alt} />
				<div className='info'>
					<p>{name}</p>
					<span>{description}</span>
				</div>
			</div>
			<div className='body'>
				<p>{review}</p>
				<div>
					<Likes className='likes' />
					{likes}
				</div>
			</div>
		</div>
	)
}
export default ReviewCard