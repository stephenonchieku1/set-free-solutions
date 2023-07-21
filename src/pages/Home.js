import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';
import Nav from '../components/Nav';
import Services from "../components/Services/Services";
import  Index from "../components/Index"

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <HomeSection />
      <Services/>          
      <Footer />
      <Index/>
    </div>
  );
};

export default Home;