import React, { useContext } from "react";
import { Chart, ArcElement, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(Title, Tooltip, ArcElement);
import { portfolioContext } from "../context/context";

const PieChart = () => {
  const value = useContext(portfolioContext);
  let investmentCopy = value.investment;
  console.log("Investment from Pie Chart", investmentCopy);

  const option = {
    aspectRatio:1
  };
  const data = {
    labels: investmentCopy.map((item)=>{
        return item.assetname
    }),
    datasets: [
      {
        label: "Investment",
        data: investmentCopy.map((item)=>{
            return item.amountinvested
        }),
        backgroundColor: "#F39F0E",
        hoverOffset: 10,
        borderJoinStyle:'miter',
        radius:"80%"
      },
    ],
  };
  console.log("Labels for the pie chart:-", data.labels);
  console.log("Data for the pie chart:-", data.datasets);

  return (
    <div className={value.displayPieChart===true?"piechartbox rounded-bl-lg rounded-tr-lg w-[650px] h-[650px] mb-[2rem] flex justify-start items-center gap-[3rem] flex-col  border-orange-400 border-[2px]":"hidden"}>
      <div className="w-[100%] text-center bg-orange-500 h-[50px] font-semibold text-white text-2xl uppercase">
        Investment Pie Chart
      </div>
      <Pie options={option} data={data}></Pie>
    </div>
  );
};
export default PieChart;