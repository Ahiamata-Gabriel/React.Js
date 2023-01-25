import icon1 from '../Images/Star-01.png';

export default function Card(props) {
  let badgeText;
  if (props.data.openspots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.data.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="Cards-container">
      <div className="Card">
        <div className="Card--img-container">
          <img
            className="Card--img"
            src={`./Images/${props.data.coverImg}`}
            alt="Card"
          ></img>
          {badgeText && <button className="Card-btn">{badgeText}</button>}
        </div>
        <div className="Card--text-container">
          <div className="Card--icon-container">
            <img className="Card--icon" src={icon1} alt="Card-icon"></img>
            <p>
              {props.data.stats.rating}
              <span className="light-text">
                ({props.data.stats.reviewCount}) . {props.data.country}
              </span>
            </p>
          </div>
          <h3 className="Card-phrase">{props.data.title}</h3>
          <h4 className="Card-price">
            From ${props.data.price} <span className=" "> / person</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
