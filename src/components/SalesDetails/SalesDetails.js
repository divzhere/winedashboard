import React from "react";
import "./salesdetails.scss";
import { ReactComponent as RefreshIcon } from "../../assets/refresh.svg";
import { ReactComponent as DropdownIcon } from "../../assets/dropdown.svg";
import { ReactComponent as UpGraphIcon } from "../../assets/upgraph.svg";
import { ReactComponent as UpIcon } from "../../assets/upStock.svg";
import LineGraph from "./LineGraph";
export default function SalesDetails() {
  return (
    <div className="sales_container">
      <div className="title">Sales detail</div>
      <div className="sales_card">
        <div className="sales_card_header">
          <div className="title">
            <span className="title_text">Total Sales Overview</span>
            <span className="date">7-13 Aug</span>
          </div>

          <div className="sales_card_options">
            <div className="refresh_btn">
              <RefreshIcon />
              Refresh Metrcis
            </div>
            <span className="filter">Filter by |</span>
            <span className="time">
              This week <DropdownIcon />
            </span>
          </div>
        </div>
        <div className="sales_card_body">
          <div className="left_section">
            <div className="sales_card_body_row">
              <div className="sales_card_title">$74,729.00</div>
              <div className="sales_card_subtitle">
                <UpGraphIcon />
                Highest revenue since 2 weeks ago
              </div>
            </div>
            <div className="body_subtitle">
              <UpIcon />
              +21% from last week
            </div>
            <div className="sales_chart">
              <LineGraph />
            </div>
          </div>
          <div className="right_section">
            <div className="title">Total Profit</div>
            <div className="price">$12,545.00</div>
            <div className="subtitle">
              <UpGraphIcon />
              +23% from last week
            </div>
            <div className="title">Total Products Sold</div>
            <div className="products_text">329</div>
          </div>
        </div>
      </div>
    </div>
  );
}
