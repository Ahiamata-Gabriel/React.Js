const Journal = (props) => {
  return (
    <div className="Journal">
      <div className="Img-container">
        <img src={`./Images/${props.data.imageUrl}`} alt=""></img>
      </div>
      <div className="Text-container">
        <img
          className="Location-icon"
          src="../Images/location-icon.png"
          alt=""
        ></img>
        <span className="Country">{props.data.location}</span>
        <span>
          <a className="Link" href={props.data.googleMapsUrl}>
            View on Google Maps
          </a>
        </span>
        <h1 className="City">{props.data.title}</h1>
        <h3 className="Date">
          <span>{props.data.startDate}</span>-<span>{props.data.endDate}</span>
        </h3>
        <p className="Desc">{props.data.description}</p>
      </div>
    </div>
  );
};

export default Journal;
