import React, { useState } from "react";
import { Card, CardBody, CardColumns, CardHeader, Row } from "reactstrap";
import { ResponsiveContainer } from "recharts";
import ExpenseChart from "./ExpenseChart";

const ExpenseChartCard = () => {
  const [uv, setUv] = useState(100000);
  const [pv, setPv] = useState(2400000);
  const [amt, setAmt] = useState(2500000);

  const [data, setData] = useState([
    {
      name: "Expenses",
      uv: uv,
      pv: pv,
      amt: amt,
    },
  ]);
  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Expenses</h2>
        </CardHeader>
        <CardBody>
          <Row>
            <CardColumns className="col-4">
              <Row>
                <h3>Project Budget:</h3>
                <h2>${amt}</h2>
              </Row>
              <Row>
                <h3>Total Spent:</h3>
                <h2>${uv}</h2>
              </Row>
              <Row>
                <h3>Remaining Budget:</h3>
                <h2>${pv}</h2>
              </Row>
            </CardColumns>
            <CardColumns className="col">
              <Row>
                <ExpenseChart />
              </Row>
            </CardColumns>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExpenseChartCard;
