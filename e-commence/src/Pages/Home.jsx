import React from 'react';
import Announcement from '../components/Announcement';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
