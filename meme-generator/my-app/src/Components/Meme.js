import React from 'react';

const Form = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    buttomText: '',
    randomImage: './Images/meme.png',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    // fetch('https://api.imgflip.com/get_memes')
    //   .then((res) => res.json())
    //   .then((data) => setAllMemes(data.data.memes));

    async function getMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemes(data.data.memes);
    }

    getMemes();
  }, []);

  const randomMemePhoto = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length);
    const memeImageUrl = allMemes[randomNum].url;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memeImageUrl,
      };
    });

    meme.topText = '';
    meme.buttomText = '';
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((preState) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  }

  return (
    <div className="Form">
      <div className="Inputs-container">
        <input
          className="Form--input"
          placeholder="Shut up"
          type="text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          className="Form--input"
          placeholder="and take my money"
          type="text"
          value={meme.buttomText}
          name="buttomText"
          onChange={handleChange}
        ></input>
      </div>
      <div className="Form--btn-container">
        <button onClick={randomMemePhoto} className="Form-Btn">
          Get a new meme image🖼️
        </button>
      </div>
      <div className="Meme--img-container">
        <h1 className="top-text">{meme.topText}</h1>
        <img className="Meme--img" src={meme.randomImage} alt="Meme"></img>
        <h1 className="top-bottom">{meme.buttomText}</h1>
      </div>
    </div>
  );
};

export default Form;
