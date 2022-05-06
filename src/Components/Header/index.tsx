import './header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useTheme from '../../Stores/themeStore';

const Header = () => {
	const changeTheme = useTheme(state => state.changeTheme);

	return (
		<header>
			<Link to="#">Logo</Link>
			<h1>Best Beauty Brand</h1>
			<Button onclick={changeTheme}>
				Change Theme
			</Button>
		</header>
	)
}
export default Header