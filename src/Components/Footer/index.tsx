import './footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<ul>
				<li><NavLink to="#">Instagram</NavLink></li>
				<li><NavLink to="#">Facebook</NavLink></li>
				<li><NavLink to="#">Whatsapp</NavLink></li>
			</ul>
			<p>All rights reserved &copy; 2022</p>
		</footer>
	)
}
export default Footer