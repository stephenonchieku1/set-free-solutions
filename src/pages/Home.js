import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';
import Nav from '../components/Nav';
import Services from "../components/Services/Services";
import 

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <HomeSection />
      <Services/>          
      <Footer />
    </div>
  );
};

export default Home;