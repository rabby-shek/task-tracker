import React from "react";
import HeroPhoto from "../../../assets/images/hero-section.png";
import bgPhoto from "../../../assets/images/hero-text-bg.svg";
const HeroSection = () => {
  return (
    <section className="container hero-section">
      <img className="bg-img-rounder" src={bgPhoto} alt=" photo" />
      <div className="row g-3">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start hero-left">
          <div className="hero-data">
            <h1>Welcome to <span className="hero-task">Task</span> Tracker</h1>
            <p className="lead">
            Take control of your day with our intuitive task tracker. Stay organized, prioritize tasks, and meet your deadlines effortlessly. Whether you're managing a project or just your daily to-dos, our app ensures you never miss a beat.
            </p>
            <a className="btn hero-btn" href="#" role="button">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-md-6 hero-right d-flex flex-column justify-content-end align-items-center">
          <img className="w-100" src={HeroPhoto} alt="hero" data-aos="flip-right" data-aos-duration="700" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
