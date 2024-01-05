import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
// import img1 from '../assets/imgs/heror-img-webp.webp';
import { sliderItems } from '../assets/data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #aeba73;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: Absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100%;
//   transition: all 1.6s ease;
//   transform: translateX(${(props) => props.slideindex * -100}vw);
// `;

// const Slide = styled.div`
//   background-color: ${(props) => props.bg};
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
// `;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideindex, setslideindex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setslideindex(slideindex > 0 ? slideindex - 1 : sliderItems.length - 1);
    } else {
      setslideindex(slideindex < sliderItems.length - 1 ? slideindex + 1 : 0);
    }
  };

  return (
    <Container>
      {/* <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow> */}
      <Wrapper slideindex={slideindex}>
        {sliderItems.map((sliderItem) => (
          <Slide key={sliderItem.id} bg={sliderItem.bgColor}>
            <ImgContainer>
              <Image src={sliderItem.image}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>{sliderItem.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow> */}
    </Container>
  );
};

export default Slider;
