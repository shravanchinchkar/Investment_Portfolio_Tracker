import React, { useContext, useEffect, useState } from "react";
import { portfolioContext } from "../context/context";
import { v4 as uuidv4 } from "uuid";
import { memo } from "react";

const Investmentform = () => {
  // Following state are used to take input from the user
  const [assetName, setassetName] = useState(""); //Takes assetName from the user
  const [amountInvested, setamountInvested] = useState(""); //Takes amountInvested from the user
  const [currentAmount, setcurrentAmount] = useState(""); //Takes currentAmount from the user

  const value = useContext(portfolioContext);

  const handleAssetName = (e) => {
    setassetName(e.target.value);
  };
  const handleInvestedAmount = (e) => {
    setamountInvested(e.target.value);
  };
  const handleCurrentAmount = (e) => {
    setcurrentAmount(e.target.value);
  };

  // Following handler handles the Add Investment button present in the Investment form
  const addInvestmentFormButton = () => {
    if (assetName === "" || amountInvested === "" || currentAmount === "") {
      alert("Please enter data in all the fields");
    } else {
      let aName = assetName;
      setassetName("");
      let ai = parseInt(amountInvested);
      setamountInvested("");
      let ca = parseInt(currentAmount);
      setcurrentAmount("");
      let stringRule = /^[A-Za-z\s]*$/;
      let numberRule = /^[0-9]*$/;
      if (
        stringRule.test(assetName) === false ||
        numberRule.test(ai) === false ||
        numberRule.test(ca) === false
      ) {
        alert("Please enter appropriate data");
      } else {
        let perchnage =
          ca > ai
            ? "+" + (((ca - ai) / ai) * 100).toFixed(2)
            : (((ca - ai) / ai) * 100).toFixed(2); //following formula is use to calculate the percentageChange

        const investmentcopy = [
          ...value.investment,
          {
            id: uuidv4(),
            assetname: aName,
            amountinvested: ai,
            currentamount: ca,
            percentchange: perchnage,
          },
        ];
        value.setinvestment(investmentcopy);
        if (value.displayInvestmentForm === true) {
          value.setdisplayInvestmentForm(false);
        }
      }
    }
  };

  return (
    <div
      className={
        value.displayInvestmentForm === true
          ? "absolute top-0 z-10 w-[100%] h-[100%] flex flex-col justify-center  items-center bg-green-500 bg-opacity-[90%]"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-[0.5rem] mobile:w-[290px] mobile-2:w-[380px] mobile-3:w-[450px] sm:w-[600px] m-[4rem] p-[1rem] rounded-lg bg-black text-white">
        <div className="flex justify-center ">
          <p className="mobile:text-xl sm:text-2xl uppercase font-semibold text-yellow-500">
            Add New Investment
          </p>
        </div>

        {/* The form start from here */}
        <div className="grid mobile:grid-cols-[90px] sm:grid-cols-[190px] mobile:grid-rows-4 mobile:gap-[1rem]">
          <label
            htmlFor="assetname"
            className="text-yellow-500 uppercase font-semibold mobile:text-sm sm:text-xl mobile:flex mobile:justify-center sm:justify-start mobile:items-center"
          >
            Asset Name:
          </label>
          <input
            type="text"
            id="assetname"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:text-[17px] sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={assetName}
            placeholder="Enter Asset Name in string"
            onChange={handleAssetName}
          />

          <label
            htmlFor="investedamount"
            className="text-yellow-500 uppercase font-semibold mobile:text-sm sm:text-xl mobile:flex mobile:justify-center sm:justify-start mobile:items-center"
          >
            Amount Invested:
          </label>
          <input
            type="text"
            id="investedamount"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:text-xl sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={amountInvested}
            placeholder="Enter invested amount "
            onChange={handleInvestedAmount}
          />

          <label
            htmlFor="currentamount"
            className="text-yellow-500 uppercase font-semibold mobile:text-sm sm:text-xl  mobile:flex mobile:justify-center sm:justify-start mobile:items-center "
          >
            Current Value:
          </label>
          <input
            type="text"
            id="currentamount"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:text-xl sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={currentAmount}
            placeholder="Enter current"
            onChange={handleCurrentAmount}
          />

          <button
            className="investformbutton justify-self-center col-span-2 sm:mr-0  mb-[1rem]"
            onClick={addInvestmentFormButton}
          >
            Add Investment
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Investmentform);