import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Footer1 from './components/Footer'
import Footer from './components/Contact_details'
import ReviewSlider from './components/ReviewSlider'

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <ReviewSlider/>
        <Footer/>
        <Footer1/>
    </div>
  );
}

export default App;
