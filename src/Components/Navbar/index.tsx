import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/products">Products</NavLink></li>
				<li><NavLink to="/about">About</NavLink></li>
				<li><NavLink to="/contact">Contact us</NavLink></li>
			</ul>
		</nav>
	)
}
export default Navbar