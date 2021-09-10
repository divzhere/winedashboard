import React from "react";
import "./sidebar.scss";

import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as InventoryIcon } from "../../assets/inventory_icon.svg";
import { ReactComponent as OrdersIcon } from "../../assets/orders_icon.svg";
import { ReactComponent as CustomersIcon } from "../../assets/customers_icon.svg";
import { ReactComponent as ReportsIcon } from "../../assets/reports_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings_icon.svg";
import { ReactComponent as GreyLogo } from "../../assets/corpOwl_grey.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow_right.svg";

export default function SideBar() {
  return (
    <>
      <div className="side_bar">
        <div>
          <div className="side_bar_option selected">
            <DashboardIcon />
            <span>Dashboard</span>
          </div>
          <div className="side_bar_option">
            <InventoryIcon />
            <span>Inventory</span>
          </div>
          <div className="side_bar_option">
            <OrdersIcon />
            <span>Orders</span>
          </div>
          <div className="side_bar_option">
            <CustomersIcon />
            <span>Customers</span>
          </div>
          <div className="side_bar_option">
            <ReportsIcon />
            <span>Reports</span>
          </div>
          <div className="side_bar_option">
            <SettingsIcon />
            <span>Settings</span>
          </div>
        </div>

        <div className="sidebar_footer">
          <GreyLogo />
          <div className="copyright">
            &copy; 2021 CorkOwl, All Rights Reserved.
          </div>
        </div>
        {/* <div className="collapse_button">
          <ArrowRight />
        </div> */}
      </div>
    </>
  );
}
