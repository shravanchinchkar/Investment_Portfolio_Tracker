import React, { useContext } from "react";
import { portfolioContext } from "../context/context";
import { memo } from "react";

const Details = ({ item }) => {
  const value = useContext(portfolioContext);

  const handleUpdate = (e) => {
    if (value.displayUpdateForm === false) {
      value.setdisplayUpdateForm(true); //Because of this line the updateForm gets displayed
    }
    value.setidstate(e.target.id);
  };

  const handleDelete = (e) => {
    let deleteButtonId = e.target.id;
    const investmentCopy = value.investment.filter((item) => {
      return item.id !== deleteButtonId;
    });
    value.setinvestment(investmentCopy);
  };

  return (
    <>
      <li className="flex text-black bg-orange-400" id={item.id}>
        <div className="border-[2px] p-[0.5rem] text-center mobile:text-[10px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem] xl:text-xl font-semibold uppercase flex justify-center  items-center   border-black w-[100%] border-r-0 border-l-0 border-t-0">
          {item.assetname}
        </div>
        <div className="border-[2px] p-[0.5rem] mobile:text-[10px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem] xl:text-xl font-semibold uppercase flex justify-center  items-center border-black w-[100%] border-r-0 border-t-0 ">
          {item.amountinvested}
        </div>
        <div className="border-[2px] p-[0.5rem] mobile:text-[10px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem] xl:text-xl font-semibold uppercase flex justify-center  items-center border-black w-[100%] border-r-0 border-t-0">
          {item.currentamount}
        </div>
        <div className="border-[2px] p-[0.5rem] mobile:text-[10px] mobile-2:text-[11px] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem] xl:text-xl font-semibold uppercase flex justify-center  items-center border-black w-[100%] border-r-0 border-t-0">
          {item.percentchange}%
        </div>
        <div className="border-[2px] p-[0.5rem] sm:text-sm md:text-[1.15rem] lg:text-[1.45rem] xl:text-xl font-semibold uppercase flex gap-[10px] justify-around border-black w-[100%] border-r-0 border-t-0 text-center">
          <button
            className="border-black border-[1px] uppercase mobile:hidden xl:block  xl:p-[7px] rounded-lg bg-green-500"
            onClick={handleUpdate}
            id={item.id}
          >
            Update
          </button>
          {/* Following is update svg */}
          <img
            src="./assets/update.svg"
            alt="update"
            onClick={handleUpdate}
            className="mobile:block xl:hidden sm:w-[25px] md:w-[30px]"
            id={item.id}
          />
      
          <button
            className="border-black border-[1px] uppercase mobile:hidden xl:block xl:p-[7px] rounded-lg bg-red-500"
            onClick={handleDelete}
            id={item.id}
          >
            Delete
          </button>
          {/* Following is delete svg */}
          <img
            src="./assets/delete.svg"
            alt="delete"
            className="mobile:block xl:hidden sm:w-[25px] md:w-[30px]"
            id={item.id}
            onClick={handleDelete}
          />
        </div>
      </li>
    </>
  );
};
export default memo(Details);
