import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";

import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "bootstrap";
import { GetCurrentDate } from "../utils/GetCurrentDate";
import DashboardGreeting from "../components/widgets/DashboardGreeting";
import PortfolioSummary from '../components/widgets/PortfolioSummary';
import PortfolioBreakdown from '../components/widgets/PortfolioBreakdown';
import TaskAssignments from '../components/widgets/TaskAssignments';
import Workstream from '../components/widgets/Workstream';

const Home = () => {
  const { currentColor, currentMode } = useStateContext();
  const currentDate = GetCurrentDate();
  return (
    <div className='mt-2'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center w-full'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <DashboardGreeting />
              <p className='text-l'>{currentDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row w-full m-3 flex-wrap justify-between gap-1 items-center'>
        <div className='col'>
          <div className='row'>
            <PortfolioSummary />
          </div>
          <div className='row'>
            <PortfolioBreakdown />
          </div>
        </div>
        <div className='col'>
          <TaskAssignments/>
        </div>
        <div className='col'>
          <Workstream/>
        </div>
      </div>
    </div>
  );
};

export default Home;
