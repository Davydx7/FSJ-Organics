import './footer.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Email } from '../../Assets/SVG/email.svg';
import { ReactComponent as Github } from '../../Assets/SVG/github.svg';
import { ReactComponent as LinkeIn } from '../../Assets/SVG/linkedIn.svg';
import { ReactComponent as Twitter } from '../../Assets/SVG/twitter.svg';
import { ReactComponent as MyLogo } from '../../Assets/SVG/mylogo.svg';

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <ul>
        <li><a href="https://github.com/Davydx7" target='_blank'>
          <Github />Github
        </a></li>
        <li><a href="https://twitter.com/olufemi_david11" target='_blank'>
          <Twitter />Twitter
        </a></li>
        <li><a href="https://www.linkedin.com/in/davidolufemi/" target='_blank'>
          <LinkeIn />LinkedIn
        </a></li>
        <li><a href="mailto:oludave0511@gmail.com" target='_blank'>
          <Email />Email
        </a></li>
      </ul>
      <span> David O. <MyLogo /> &copy; {year}</span>
      <p>All rights reserved.</p>
    </footer>
  );
}
export default Footer;
