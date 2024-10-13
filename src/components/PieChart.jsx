import React, { useContext } from "react";
import { Chart, ArcElement, Title, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(Title, Tooltip, ArcElement);
import { portfolioContext } from "../context/context";

const PieChart = () => {
  const value = useContext(portfolioContext);
  const option = {
    aspectRatio:1
  };

  const data = {
    labels: value.investment.map((item)=>{
        return item.assetname
    }),
    datasets: [
      {
        label: "Investment",
        data: value.investment.map((item)=>{
            return item.amountinvested
        }),
        backgroundColor: "#F39F0E",
        hoverOffset: 10,
        borderJoinStyle:'miter',
        radius:"80%"
      },
    ],
  };

  return (
    <div className="piechartbox rounded-bl-lg rounded-tr-lg mobile:w-[250px] mobile-2:w-[300px] sm:w-[500px] sm:h-[500px] md:w-[550px] md:h-[550px] lg:w-[600px] lg:h-[600px] xl:w-[650px] xl:h-[650px] mb-[2rem] flex justify-start items-center gap-[3rem] flex-col  border-orange-400 border-[2px]">
      <div className="w-[100%] flex justify-center items-center bg-orange-500 h-[50px] font-semibold text-white mobile:text-xl sm:text-2xl uppercase">
        Investment Pie Chart
      </div>
      <Pie options={option} data={data}></Pie>
    </div>
  );
};
export default PieChart;