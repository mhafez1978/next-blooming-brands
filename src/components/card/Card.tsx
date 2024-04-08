import React from "react";

const Card = (props: {
  cardImg?: string;
  cardImgDesc?: string;
  cardTitle: string;
  cardSubheading?: string;
  cardActionText?: string;
}) => {
  return (
    <div className="card w-64 h-64 bg-white shadow-xl image-full">
      <figure>
        <img
          src={
            props?.cardImg ||
            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt={props?.cardImgDesc}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.cardTitle}</h2>
        <p>{props.cardSubheading}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">{props?.cardActionText}</button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
