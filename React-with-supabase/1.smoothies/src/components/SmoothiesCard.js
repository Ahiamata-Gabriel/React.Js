const SmoothiesCard = ({ smoothie }) => {
  const { title, method, rating } = smoothie;
  return (
    <div className="smoothie-card">
      <h3>{title}</h3>
      <p>{method}</p>
      <div className="rating">{rating}</div>
    </div>
  );
};

export default SmoothiesCard;
