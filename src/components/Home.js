import React from "react";
import Header from "./Header/Header";
import SideBar from "./Sidebar/SideBar";
import "./home.scss";
import { ReactComponent as AddIcon } from "../assets/add_icon.svg";
import StatusCardGroup from "./StatusCard/StatusCardGroup";
import SalesDetails from "./SalesDetails/SalesDetails";
import InventoryTable from "./InventoryTable/InventoryTable";
export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <section className="dashboard_section">
        <div className="title_container">
          <span className="title_text">Overview</span>
          <button className="secondary_btn">
            <AddIcon />
            ADD NEW WINE
          </button>
        </div>
        <StatusCardGroup />
        <SalesDetails />
        <InventoryTable />
      </section>
    </>
  );
}
