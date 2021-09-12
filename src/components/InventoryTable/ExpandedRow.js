import React from "react";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
export default function ExpandedRow({ values }) {
  return (
    <div className="expanded_row">
      <div className="header">
        <div className="product_details">
          <div className="product_title">{values.product.name}</div>
          <div className="subtitle">
            <div className="label">
              <span>Region: </span>
              {values.product.country}
            </div>
            <div className="label">
              <span>Vintage: </span>
              {values.vintage}
            </div>
          </div>
        </div>
        <div className="options">
          <span>View Wine</span>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className="body">
        <div className="label">
          <div className="title">RATING</div>
          <div className="body">
            {values.product.ratingExpanded.map((rating) => (
              <div className="body_item">
                <span>{rating.ratedBy}</span>
                <span>{rating.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="label">
          <div className="title">STOCK</div>
          <div className="body">
            {values.product.stock.map((stock) => (
              <div className="body_item stock">
                <span>{stock.store}</span>
                <span>{stock.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
