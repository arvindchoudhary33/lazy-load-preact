import { h } from "preact";
import style from "./index.css";
import BarChart from "./BarChart.js";
import { useState } from "preact/hooks";
import { UserData } from "../Data/data.js";
const GraphDemo = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["Black", "Bisque"],
      },
    ],
  });
  return (
    <div class={style.graphMainContainer}>
      <BarChart chartData={userData} />
    </div>
  );
};

export default GraphDemo;
