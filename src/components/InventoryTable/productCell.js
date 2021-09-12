import React from "react";

export default function ProductCell({ value }) {
  return (
    <div className="product_cell">
      <img className="product_img" src={value.image} alt={value.name}></img>
      <div className="product_details">
        <span className="wine_name">{value.name}</span>
        <span className="country">{value.country}</span>
      </div>
    </div>
  );
}
