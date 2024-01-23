import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import TraficByWebsite from "./website";
import TotalUsers from "./totalUser";
import TraficByLocation from "./traficByLocation";
import TraficByDevice from "./traficByDevice";

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
      <div style={{ display: "flex", gap: 20  }}>
        <div className={styles.totalUser}>
          <TotalUsers data={mutualFundData.data} />
        </div>
        <div className={styles.trafficWebsite}>
            <TraficByWebsite/>
        </div>
      </div>



      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ flex: 2 }}>
          <div className={styles.trafficDevice}>
            <TraficByDevice />
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <div className={styles.traficCountry}>
            <TraficByLocation />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserActivity;
