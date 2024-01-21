"use client";
import { useEffect, useState } from "react";
import Card from "./card/card";
import styles from "./styles.module.css";
import Transactions from "./transactions/transactions";
import { Line } from "react-chartjs-2";
import NavChart from "./userActivity/chart";
import LineChart from "./userActivity/chart";
import MutualFundChart from "./userActivity/chart";
import DonutChart from "./userActivity/donut";
import BarComponent from "./userActivity/bar";
import TotalUser from "./Totaluser/totaluser";
import UserActivity from "./userActivity/userActivity";

const cardDetails = [
  {
    title: "Views",
    count: "7265",
    activity: "11.02",
    style: {
      background: "var(--Primary-Blue, #E3F5FF)",
    },
  },

  {
    title: "Visits",
    count: "3671",
    activity: "0.03",
    style: {
      background: "var(--Primary-Purple, #E5ECF6)",
    },
  },

  {
    title: "New users",
    count: "156",
    activity: "15.03",
    style: {
      background: "var(--Primary-Blue, #E3F5FF)",
    },
  },

  {
    title: "Active users",
    count: "2314",
    activity: "6.08",
    style: {
      background: "var(--Primary-Purple, #E5ECF6)",
    },
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cardDetails.map((card) => {
            return <Card key={card.title} {...card} />;
          })}
        </div>

        <UserActivity />

        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
