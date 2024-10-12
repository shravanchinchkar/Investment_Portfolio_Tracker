import React, { useContext} from "react";
import { portfolioContext } from "../context/context";
import Details from "./Details";
import { memo } from "react";

const InvestmentTable = () => {
  const value = useContext(portfolioContext);
  return (
    <>
      <li className="flex text-black justify-between bg-yellow-400">
        <div className="flex items-center justify-center border-[2px] p-[0.5rem] mobile:text-[8px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem]  xl:text-xl font-semibold uppercase border-black w-[100%] border-r-0 border-l-0 border-t-0 text-center">
          Asset Name
        </div>
        <div className="flex items-center justify-center border-[2px] p-[0.5rem] mobile:text-[8px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem]  xl:text-xl font-semibold uppercase border-black w-[100%] border-r-0 border-t-0 text-center">
          Invested
        </div>
        <div className="flex items-center justify-center border-[2px] p-[0.5rem] mobile:text-[8px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem]  xl:text-xl font-semibold uppercase border-black w-[100%] border-r-0 border-t-0 text-center">
          Current
        </div>
        <div className="flex items-center justify-center border-[2px] p-[0.5rem] mobile:text-[8px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem]  xl:text-xl font-semibold uppercase border-black w-[100%] border-r-0 border-t-0 text-center">
          % Change
        </div>
        <div className="flex items-center justify-center border-[2px] p-[0.5rem] mobile:text-[8px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem]  xl:text-xl font-semibold uppercase border-black w-[100%] border-r-0 border-t-0 text-center">
          Modify Investment
        </div>
      </li>
      {value.investment.map((item) => {
        return <Details key={item.id} item={item} />;
      })}
    </>
  );
};

export default memo(InvestmentTable);
