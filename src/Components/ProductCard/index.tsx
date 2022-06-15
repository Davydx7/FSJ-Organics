import Button from '../Button';
import './productCard.scss';
import { Props } from './typings';

const ProductCard : React.FC<Props> = ({
  name, description, img, alt, price, qty, id,
}) => (
  <div className="productCard">
    <div className="imageBox">
      <img src={img} alt={alt} />
    </div>
    <p className="name">{name}</p>
    <p className="description">{description}</p>
    <div className="foot">
      <p className="price">{price}</p>
      <p className="qty">
        Qty:
        {qty}
      </p>
    </div>
    <Button>Order Now</Button>
  </div>
);
export default ProductCard;
