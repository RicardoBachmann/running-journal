import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card--container">
        <div className="image--container">
          <div className="badge-container">
            {props.isSuperhalf && (
              <div className="badge-text">Superhalf 🥇</div>
            )}
            <div className="race-status">
              {props.isOpen ? "Open spots ✅" : "Open spots ❌"}
            </div>
          </div>
          <img src={props.imageUrl} alt=""></img>
        </div>
        <div className="info--container">
          <div className="info--container_header">
            <h1>{props.title}</h1>
            <p>{props.startDate}</p>
          </div>
          <div className="info--container_subHeader">
            <p>{props.location}</p>
            <p>({props.distance})</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}
