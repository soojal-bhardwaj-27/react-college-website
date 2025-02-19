import React from 'react';
import Header from '../components/Header/Header';
import Campus from '../components/Campus/Campus';
import Facilities from '../components/Facilities/Facilities';
import Testimonials from '../components/Testimonials/Testimonials';
import Cta from '../components/Cta/Cta';

const Home = () => {
  return (
    <>
      <Header />
      <Campus />
      <Facilities />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Home;
