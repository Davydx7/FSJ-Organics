import './navbar.scss';
import { NavLink } from 'react-router-dom';
// import classnames from 'classnames';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/products">Products</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/about">About</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">Contact</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/blog">Blog</NavLink>
			</ul>
		</nav>
	)
}
export default Navbar