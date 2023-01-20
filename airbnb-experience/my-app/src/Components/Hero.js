import gridImg from '../Images/grid-pictures.png';

function Hero() {
  return (
    <section className="Hero-section">
      <div className="Img-container">
        <img className="Img" src={gridImg} alt="Logo"></img>
      </div>
      <h1 className="Heading">Online Experiences</h1>
      <p className="Phrase">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
