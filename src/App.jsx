import "./App.css";
import { memo } from "react";
import { useState, useEffect } from "react";
import { portfolioContext } from "./context/context";
import PieChart from "./components/PieChart";
import Investmentform from "./components/Investmentform";
import InvestmentTable from "./components/InvestmentTable";
import Updateinvestmentform from "./components/Updateinvestmentform";

function App() {
  const [investment, setinvestment] = useState([]);
  const [totalPortfoliValue, settotalPortfoliValue] = useState(0); //display the total Portfoli Amount
  const [displayInvestmentForm, setdisplayInvestmentForm] = useState(false); //display the Investment Form
  const [displayUpdateForm, setdisplayUpdateForm] = useState(false); //display the Updation from
  const [idstate, setidstate] = useState("");

  const addInvestmentButton = () => {
    if (displayInvestmentForm === false) {
      setdisplayInvestmentForm(true);
    }
  };

  /*
  Following useEffect gets executed only once when the App component gets render
  It stores the previous value present in the localstorage if any into a variable and set that variable to the investment state
  */
  useEffect(() => {
    let prevInvestment = localStorage.getItem("investment");
    if (prevInvestment) {
      let prevInvest = JSON.parse(prevInvestment);
      setinvestment(prevInvest);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("investment", JSON.stringify(investment));
    let sum = 0;
    let totalportfolivalue = investment.map((item) => {
      return item.currentamount;
    });
    for (let i = 0; i < totalportfolivalue.length; i++) {
      sum = sum + totalportfolivalue[i];
    }
    settotalPortfoliValue(sum);
  }, [investment]);

  return (
    <>
      <portfolioContext.Provider
        value={{
          investment,
          setinvestment,
          displayInvestmentForm,
          setdisplayInvestmentForm,
          displayUpdateForm,
          setdisplayUpdateForm,
          idstate,
          setidstate,
        }}
      >
        <div className="parentcontainer relative w-[100vw] h-[100vh]">
          <header>
            <div className="title text-white mobile:w-[250px] mobile:h-[50px] sm:w-[500px] sm:h-[50px] md:w-[600px] md:h-[65px]  xl:w-[700px] xl:h-[65px] m-auto mt-[0.5rem]">
              <p className="w-[100%] h-[100%] flex justify-center items-center  text-center font-bold mobile:text-[13px] mobile:font-bold sm:text-2xl md:text-3xl xl:text-4xl uppercase">
                Investment Portfolio Tracker
              </p>
            </div>

            <div className="valuetitle mobile:w-[200px] mobile:h-[30px] sm:w-[400px] sm:h-[50px] md:w-[500px] xl:w-[600px] xl:h-[65px] m-auto mt-[1rem] mb-[1rem] mobile:text-[10px] sm:text-xl md:text-2xl xl:text-3xl font-bold text-red-400 uppercase">

              <p className="w-[100%] h-[100%] flex gap-[10px] justify-center items-center">
                Total Portfolio value:- {totalPortfoliValue}
              </p>
            </div>
          </header>

          <main className="flex flex-col items-center gap-[1rem]">
            <button
              className="investmentbutton mobile:w-[170px] mobile:h-[35px] sm:w-[300px] sm:h-[60px] m-auto w-max mt-[1.5rem] mobile:text-[10px]  sm:text-2xl font-bold uppercase"
              onClick={addInvestmentButton}
            >
              Add Investment
            </button>

            <div>
              <p className="mobile:text-xl sm:text-2xl text-center font-semibold text-red-400 uppercase">
                Investment List
              </p>
              {/* The Investment table starts from here */}
              {investment.length === 0 ? (
                <p className="text-white text-2xl uppercase text-center mt-[1rem] font-semibold">
                  No Investment to display
                </p>
              ) : (
                <ul className="investtable flex flex-col mobile:w-[85vw] xl:w-[70vw] mb-[1rem] border-[2px] rounded-bl-lg rounded-tr-lg border-black border-b-0">
                  <InvestmentTable />
                </ul>
              )}
            </div>
            {investment.length===0?<p className="text-white font-semibold text-2xl uppercase">No Visualization to display!</p>:<PieChart />}
          </main>
          <Investmentform />
          <Updateinvestmentform />
        </div>
      </portfolioContext.Provider>
    </>
  );
}
export default memo(App);
