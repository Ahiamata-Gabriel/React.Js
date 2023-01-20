import img1 from '../Images/person-1.png';
import icon1 from '../Images/Star-01.png';

export default function Card() {
  return (
    <div className="Cards-container">
      <div className="Card">
        <div className="Card--img-container">
          <img className="Card--img" src={img1} alt="Card"></img>
          <button className="Card-btn">SOLD OUT</button>
        </div>
        <div className="Card--text-container">
          <div className="Card--icon-container">
            <img className="Card--icon" src={icon1} alt="Card-icon"></img>
            <p>
              5.0 <span className="light-text">(6) . USA</span>
            </p>
          </div>
          <h3 className="Card-phrase">Life lessons with Katie Zaferes</h3>
          <h4 className="Card-price">
            From $136 <span className=" "> / person</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
