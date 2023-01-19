import image from '../images/profile-pic.png';
import mail from '../icons/mail-icon.png';
import linkedin from '../icons/linkedin-icon.png';

function Info() {
  return (
    <div>
      <img className="profile-img" src={image} alt="Profile"></img>
      <h3 className="name">Gabriel Ahiamata</h3>
      <h6 className="role">Frontend Developer</h6>
      <p className="site">gabrielahiamata.tech</p>
      <div className="buttoms-container">
        <button className="btn">
          <img className="btn-img" src={mail} alt="icons"></img>Email
        </button>
        <button className="btn">
          <img className="btn-img" src={linkedin} alt="icons"></img>LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
