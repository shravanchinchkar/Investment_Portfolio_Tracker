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
          ? "absolute top-0 z-10 sm:w-[100%] sm:h-[280%] md:h-[300%] lg:h-[320%] xl:h-[170%]  flex flex-col justify-center  items-center bg-green-500 bg-opacity-[90%]"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-[0.5rem] w-[500px] m-[4rem] p-[1rem] rounded-lg bg-black text-white">
        <div className="flex justify-center ">
          <p className="text-2xl uppercase font-semibold text-yellow-500">
            Add New Investment
          </p>
        </div>

        {/* The form start from here */}
        <div className="grid grid-cols-[165px] grid-rows-4 gap-[1rem]">
          <label
            htmlFor="assetname"
            className="text-yellow-500 uppercase font-semibold"
          >
            Asset Name:
          </label>
          <input
            type="text"
            id="assetname"
            className=" text-black pl-[10px] pr-[10px] pt-[5px] pb-[5px] border-none outline-none "
            value={assetName}
            placeholder="Enter Asset Name in string"
            onChange={handleAssetName}
          />

          <label
            htmlFor="investedamount"
            className="text-yellow-500 uppercase font-semibold"
          >
            Amount Invested:
          </label>
          <input
            type="text"
            id="investedamount"
            className=" text-black pl-[10px] pr-[10px] pt-[5px] pb-[5px] border-none outline-none "
            value={amountInvested}
            placeholder="Enter amount invested in numbers"
            onChange={handleInvestedAmount}
          />

          <label
            htmlFor="currentamount"
            className="text-yellow-500 uppercase font-semibold"
          >
            Current Value:
          </label>
          <input
            type="text"
            id="currentamount"
            className=" text-black pl-[10px] pr-[10px] pt-[5px] pb-[5px] border-none outline-none "
            value={currentAmount}
            placeholder="Enter current amount in numbers"
            onChange={handleCurrentAmount}
          />

          <button
            className="investformbutton justify-self-center col-span-2 mb-[1rem]"
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
