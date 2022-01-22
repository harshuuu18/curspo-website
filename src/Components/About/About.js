import React from "react";
import "../../App.css";
import "../About/About.css";

const About = ({ about }) => {
  return (
    <div className="container about">
      <h4>About Me</h4>
      <p>{about?.about}</p>
    </div>
  );
};

export default About;
