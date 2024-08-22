import React from "react";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="container my-5 py-5" data-aos="fade-up" id="reviews">
      <div className="section-title" data-aos="flip-up">
        User Reviews
      </div>
      <div className="row g-3">
        <div className="col-lg-4 col-sm-6">
          <div className="card h-100 position-relative overflow-hidden">
            <div className="card-body text-center">
              <h5 className="card-title">User Review</h5>
              <p className="card-text">
                "This app has transformed how I manage my tasks!"
              </p>
              <div className="d-flex justify-content-center">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="card-bg"></div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card h-100 position-relative overflow-hidden">
            <div className="card-body text-center">
              <h5 className="card-title">User Review</h5>
              <p className="card-text">
                "A must-have for anyone looking to boost productivity!"
              </p>
              <div className="d-flex justify-content-center">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="card-bg"></div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="card h-100 position-relative overflow-hidden">
            <div className="card-body text-center">
              <h5 className="card-title">User Review</h5>
              <p className="card-text">"Highly intuitive and easy to use."</p>
              <div className="d-flex justify-content-center">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </div>
            </div>
            <div className="card-bg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
