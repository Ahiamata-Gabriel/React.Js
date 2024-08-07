import { Link } from "react-router-dom";

const SmoothiesCard = ({ smoothie }) => {
  const { title, method, rating, id } = smoothie;
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method}</p>
      <div className="rating">{rating}</div>
      <div className="bottons">
        <Link to={`/${id}`}>
          <i className="material-icons">edit</i>
        </Link>
      </div>
    </div>
  );
};

export default SmoothiesCard;
