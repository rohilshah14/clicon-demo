import { useState } from "react";
import TabContent from "./product-tab-content";
import classes from "./product-details.module.css";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className={classes.tabs}>
      <ul>
        <li
          className={activeTab === "info" ? classes.active : ""}
          onClick={() => setActiveTab("info")}
        >
          Product info
        </li>
        <li
          className={activeTab === "reviews" ? classes.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </li>
        <li
          className={activeTab === "warranty" ? classes.active : ""}
          onClick={() => setActiveTab("warranty")}
        >
          Warranty
        </li>
        <li
          className={activeTab === "QR" ? classes.active : ""}
          onClick={() => setActiveTab("QR")}
        >
          QR
        </li>
      </ul>

      <div className={classes.tabContent}>
        <TabContent activeTab={activeTab} product={product} />
      </div>
    </div>
  );
}
