import './header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useTheme from '../../Stores/themeStore';
import {ReactComponent as Logo} from '../../Assets/SVG/logo.svg';

const Header = () => {
	const changeTheme = useTheme(state => state.changeTheme);

	return (
		<header>
			<Link to="/">
				<Logo />
			</Link>
			<h1>Flawless Skincare By Jade</h1>
			<Button onclick={changeTheme}>
				Change Theme
			</Button>
		</header>
	)
}
export default Header