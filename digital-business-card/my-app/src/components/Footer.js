import twitter from '../icons/Twitter-Icon.png';
import facebook from '../icons/Facebook-Icon.png';
import ig from '../icons/Instagram-Icon.png';
import github from '../icons/GitHub-Icon.png';

function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-img" src={twitter} alt="icons"></img>
      <img className="footer-img" src={facebook} alt="icons"></img>
      <img className="footer-img" src={ig} alt="icons"></img>
      <img className="footer-img" src={github} alt="icons"></img>
    </div>
  );
}

export default Footer;
