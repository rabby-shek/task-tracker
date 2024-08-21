import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { CiCalendarDate } from "react-icons/ci";
const WhyChooseUs = () => {
  return (
    <section className="container" id="choose-us">
      <div className="section-title"  data-aos="flip-up">Why Choose us</div>
      <div className="row g-3 mt-3">
        <div className="col-lg-4" data-aos="fade-right">
          <WhyChooseUsCard
            cardTitle= {<CiCalendarDate />}
            cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-lg-4" data-aos="flip-up">
          <WhyChooseUsCard
            cardTitle={<CiCalendarDate />}
            cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-lg-4" data-aos="fade-left">
          <WhyChooseUsCard
            cardTitle={<CiCalendarDate />}
            cardDescription="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
