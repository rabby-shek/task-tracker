import React, { useEffect } from 'react'
import Navbar from './components/website/navbar/Navbar'
import Footer from './components/website/footer/Footer'
import HeroSection from './components/website/hero-section/HeroSection'
import WhyChooseUs from './components/website/why-choose-us/WhyChooseUs'
import Features from './components/website/features/Features'
import PlanAndPricing from './components/website/plan-and-pricing/PlanAndPricing'
import Aos from "aos";
import "aos/dist/aos.css";
import Review from './components/website/review/Review'
const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    < >
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Features />
      <PlanAndPricing />
      <Review />
      <Footer />
    </>
  )
}

export default App
