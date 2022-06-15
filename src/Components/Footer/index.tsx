import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul>
        <li><Link to="#">Instagram</Link></li>
        <li><Link to="#">Facebook</Link></li>
        <li><Link to="#">Whatsapp</Link></li>
      </ul>
      <p>All rights reserved &copy; 2022</p>
    </footer>
  );
}
export default Footer;
