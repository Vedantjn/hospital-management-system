import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          I'm Vedant Jain, a dedicated and forward-thinking individual currently pursuing a Bachelor's degree in Computer Engineering at the Institute of Engineering and Technology, DAVV. Committed to a vegan lifestyle for the past three years, I actively advocate for sustainable living and ethical choices. In addition to my passion for technology, I have successfully navigated the challenges of clearing the highly competitive IIT JEE Mains and Advanced exams. This accomplishment reflects my strong academic foundation, problem-solving skills, and resilience in the face of rigorous academic challenges. In addition to my academic pursuits, technological achievements, and vegan lifestyle, I aspire to make a lasting impact by starting a startup focused on providing affordable vegan alternatives. This endeavor reflects my commitment to promoting ethical and sustainable practices while making plant-based options accessible to a broader audience. Looking ahead, I am eager to combine my passion for technology with my dedication to a vegan lifestyle, contributing to a more sustainable and compassionate future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
