import React from "react";
import "./card-list.css"

export const CardList = (props) => {
  let count = props.count;
  return (
    <div className="col l3 m6 s12 zoom">
      <div className="card small teal lighten-2">
        <div className="card-image ">
          <img
            className="img-responsive"
            src={require("../../images/anime" + count + ".png")}
            alt="animeimage"
          />
        </div>
        <div className="card-content">
          <b>{props.name}</b>
          <div style={{ height: "10px" }}></div>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
};
