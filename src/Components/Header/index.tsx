import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to="#">Logo</Link>
			<h1>Best Beauty Brand</h1>
		</header>
	)
}
export default Header