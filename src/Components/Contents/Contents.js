import React from "react";
import "../../App.css";
import "../Contents/Contents.css";
import cardImg from "../../Assets/Image 23.png";

const Contents = ({ contents, programs, appointments }) => {
  return (
    <div className="container content">
      <h4>Content</h4>
      <div>
        <div className="cardText">
          <h6 className="card-title">Morning Yoga Series [Collection]</h6>
          <p className="card-text">$400</p>
        </div>
        <div className="allCards">
          {contents
            ? contents.map((c) => {
                return (
                  <div className="bodyCard">
                    <img
                      src={c?.contentThumbnail ?? ""}
                      className=""
                      alt="..."
                    />
                    <p>{c?.contentDescription}</p>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="othertext">
          <h6 className="card-title">Other Content</h6>
        </div>
        <div className="allCards">
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
        </div>
      </div>
      <h4>Programs</h4>
      <div>
        <div className="allCards">
          {programs
            ? programs.map((p) => {
                return (
                  <div className="bodyCard">
                    <img
                      src={p?.programThumbnail ?? ""}
                      className=""
                      alt="..."
                    />
                    <p>{p?.programDescription}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <h4>Appointments</h4>
      <div>
        <div className="allCards">
          {appointments
            ? appointments.map((a) => {
                return (
                  <div className="bodyCard">
                    <img
                      src={a?.contentThumbnail ?? ""}
                      className=""
                      alt="..."
                    />
                    <p>{a?.contentDescription}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <h4>Live</h4>
      <div>
        <div className="allCards">
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
          <div className="bodyCard">
            <img src={cardImg} className="" alt="..." />
            <p>
              How to lose 10kgs in a<br></br> week? Let's explore
            </p>
          </div>
        </div>
      </div>
      <h4>Contact</h4>
    </div>
  );
};

export default Contents;
