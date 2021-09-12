import React from "react";

export default function RatingsCell({ value }) {
  return (
    <div className="ratings_cell">
      {value.map((rate, i) => (
        <div className="ratings" key={i}>
          {rate}
        </div>
      ))}
    </div>
  );
}
