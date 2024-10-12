import React, { useContext,useEffect,useState } from "react";
import { portfolioContext } from "../context/context";
import { memo } from "react";

const Updateinvestmentform = () => {
  const [updatedCurrentAmount, setupdatedCurrentAmount] = useState("")
  const value = useContext(portfolioContext);

  const tempid = value.idstate;


  let data = value.investment.filter((item) => {
    return item.id === tempid;
  });

  let selecteddata = data.length > 0 ? data[0] : null;

  const handleUpdateCurrentAmount = (e) => {
    setupdatedCurrentAmount(e.target.value)
  };

  const handleUpdateButton = () => {
    if (updatedCurrentAmount === "") {
      alert("Please enter the updated current amount");
    } else {
      let upcurramount = parseInt(updatedCurrentAmount); //convert the value into string
      setupdatedCurrentAmount("")
      // Following code update the percentagChange since the current amount gets changed
      let updatedPerChange =
        upcurramount > selecteddata.amountinvested
          ? "+" +
            ((upcurramount - selecteddata.amountinvested) /
              selecteddata.amountinvested) *
              100
          : ((upcurramount - selecteddata.amountinvested) /
              selecteddata.amountinvested) *
            100;

      value.setinvestment((prev) => [
        { ...selecteddata, currentamount: upcurramount,percentchange: updatedPerChange },
        ...prev.filter((item) => {
          return item.id !== selecteddata.id;
        }),
      ]);
    }
    if (value.displayUpdateForm=== true) {
      value.setdisplayUpdateForm(false);
    }
  };
  return (
    <div
      className={
        value.displayUpdateForm === true
          ? "absolute top-0 z-10 w-[100%] h-[100%] flex flex-col justify-center  items-center bg-yellow-500 bg-opacity-[90%]"
          : "hidden"
      }
    >
      <div className="flex flex-col gap-[0.5rem] mobile:w-[290px] mobile-2:w-[380px] mobile-3:w-[450px] sm:w-[500px] m-[4rem] p-[1rem] rounded-lg bg-black text-white">
        <div className="flex justify-center ">
          <p className="mobile:text-xl sm:text-2xl uppercase font-semibold text-green-500">
            Update Investment
          </p>
        </div>

        {/* The form start from here */}
        <div className="grid mobile:grid-cols-[90px] sm:grid-cols-[165px] grid-rows-4 gap-[1rem]">
          {/* Following input is for assetname */}
          <label
            htmlFor="assetname"
            className="text-green-500 uppercase font-semibold mobile:text-sm sm:text-xl  mobile:flex mobile:justify-center mobile:items-center sm:block"
          >
            Asset Name:
          </label>
          <input
            type="text"
            id="assetname"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={selecteddata === null ? "" : selecteddata.assetname}
            readOnly
          />

          {/* Following input is for amount Invested */}
          <label
            htmlFor="investedamount"
            className="text-green-500 uppercase font-semibold mobile:text-sm sm:text-xl  mobile:flex mobile:justify-center mobile:items-center sm:block"
          >
            Amount Invested:
          </label>
          <input
            type="text"
            id="investedamount"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={selecteddata === null ? "" : selecteddata.amountinvested}
            readOnly
          />

          {/* Following input is for Current amount */}
          <label
            htmlFor="currentamount"
            className="text-green-500 uppercase font-semibold mobile:text-sm sm:text-xl  mobile:flex mobile:justify-center mobile:items-center sm:block"
          >
            Current Value:
          </label>
          <input
            type="text"
            id="currentamount"
            className=" text-black mobile:text-[12px] mobile:p-[5px] sm:pl-[10px] sm:pr-[10px] sm:pt-[5px] sm:pb-[5px] border-none outline-none "
            value={updatedCurrentAmount}
            onChange={handleUpdateCurrentAmount}
            placeholder="Enter New Current Amount"
          />

          {/*Following is the update button*/}
          <button
            className="updateformbutton justify-self-center col-span-2 mb-[1rem]"
            onClick={handleUpdateButton}
          >
            Update Investment
          </button>
        </div>
      </div>
    </div>
  );
};
export default memo(Updateinvestmentform);