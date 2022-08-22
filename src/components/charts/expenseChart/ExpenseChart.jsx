import React, { useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ProgressBar from "../progressBarChart/ProgressBar";

const ExpenseChart = () => {
  // const [uv, setUv] = 1;
  // const [pv, setPv] = 25;
  // const [amt, setAmt] = useState(0.05);

  const [data, setData] = useState([
    {
      name: "Expenses",
      Spent: 1,
      Remaining: 24
    }
  ]);
  return (
    
    <ProgressBar id={"/finance"} key={'spent'} title={'Spent'} bgcolor="green" progress='4'  height={50} />
   
    
    
  );
};

export default ExpenseChart;
