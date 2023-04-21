import './card.styles.css';

const Card = ({ id, name, email }) => {
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2$size=10`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
