import React from "react";

const Card2 = (props) => {
  return (
    <div className="nav-card w-full h-40 bg-base-100 shadow-xl text-center">
      <div className="nav-link">
        <a href={props.link}>
          <h2 className="card-title">{props.title}</h2>
        </a>
      </div>
    </div>
  );
};

export default Card2;
