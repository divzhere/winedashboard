import React from "react";
import { status } from "./statusJson";
import "./statuscard.scss";
export default function StatusCardGroup() {
  return (
    <div className="status_card_group">
      {status.map((card, i) => (
        <div className="card" key={i}>
          <div className="head">
            {card.title}
            {card.icon}
          </div>
          <div className="status_text">{card.status}</div>
        </div>
      ))}
    </div>
  );
}
