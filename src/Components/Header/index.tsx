import './header.scss';
import { Link } from 'react-router-dom';
import Button from '../Button';
import useTheme from '../../Stores/themeStore';
// import { ReactComponent as Logo } from '../../Assets/SVG/logo.svg';
import { ReactComponent as Moon } from '../../Assets/SVG/moon.svg';
import { ReactComponent as Sun } from '../../Assets/SVG/sun.svg';

function Header() {
  const changeTheme = useTheme((state) => state.changeTheme);
  const theme = useTheme((state) => state.theme);

  return (
    <header>
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <h1>Flawless Skincare </h1>
      <Button onclick={changeTheme}>
        {theme === 'light' ? (
          <Moon />
        ) : (
          <Sun />
        )}
      </Button>
    </header>
  );
}
export default Header;
