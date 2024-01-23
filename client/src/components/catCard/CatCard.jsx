import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div style={{ backgroundImage: `url("${card.img}")`, backgroundSize: "cover" }} className="catCard">
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
