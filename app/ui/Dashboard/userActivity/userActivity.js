import { useEffect, useState } from "react";
import BarComponent from "./bar";
import DonutChart from "./donut";
import NavChart from "./chart";
import styles from "./styles.module.css";

const UserActivity = () => {
  const [mutualFundData, setMutualFundData] = useState([]);

  useEffect(() => {
    const fetchMutualFundData = async () => {
      try {
        const response = await fetch("https://api.mfapi.in/mf/122640");
        const data = await response.json();
        setMutualFundData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMutualFundData();
  }, []);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <div className={styles.totalUser}>
          <NavChart data={mutualFundData.data} />
        </div>
        <div className={styles.trafficWebsite}>traffic by website</div>
      </div>
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ flex: 2 }}>
          <div className={styles.trafficDevice}>
            <BarComponent />
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div className={styles.traficCountry}>
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserActivity;
