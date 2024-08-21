import React from "react";

const WhyChooseUsCard = ({cardTitle, cardSubtitle, cardDescription}) => {
  return (
    <div class="choose-us-card">
      <div class="card-body">
        <h5 class="card-title text-center">{cardTitle}</h5>
        <p class="card-text mt-2">{cardDescription}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
