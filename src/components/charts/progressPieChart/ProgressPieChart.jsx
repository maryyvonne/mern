import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardColumns, CardHeader, Col, Row } from "reactstrap";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  getCompletedPercent,
  getIncompletePercent,
  selectAllBuildItems,
} from "../../features/buildItems/buildItemsSlice";

const ProgressPieChart = () => {
  const COLORS = ["#00FF00", "#ff0000"];
  const buildItems = useSelector(selectAllBuildItems);

  const complete = (buildItems) => {
    let completed = buildItems.filter(
      (buildItem) => buildItem.completed === true
    );
    return (completed.length / buildItems.length) * 100;
  }
  const incomplete = (buildItems) => {
    let outstanding = buildItems.filter(
      (buildItem) => buildItem.completed === false
    );
    return (outstanding.length / buildItems.length) * 100;
  };

  const [pieData, setPieData] = useState([
    {
      name: "Complete",
      value: complete
    },
    {
      name: "Incomplete",
      value: incomplete,
    },
  ]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <div>
      <ResponsiveContainer width="100%" max-height="50%">
        <Card className="card" width="100%" height="100%">
          <CardHeader>
            <h2>Project Completion</h2>
          </CardHeader>
          <CardBody>
            <Row>
              <CardColumns title="Build Item Completion" className="col-3">
                <Row>
                  <h3>Build Item Completion</h3>
                </Row>
                <Row>
              <h4>Complete</h4>
              {/* <ul>
                {buildItems
                  .filter((buildItem) => buildItem.completed === true)
                  .map((buildItem) => (
                    <li>{buildItem.title}</li>
                  ))}
              </ul> */}
            </Row>
            <Row>
              <h4>Incomplete</h4>
              {/* <ul>
                {buildItems
                  .filter((buildItem) => buildItem.completed === false)
                  .map((buildItem) => (
                    <li>{buildItem.title}</li>
                  ))}
              </ul> */}
            </Row>
              </CardColumns>
              <CardColumns className="col-9">
              <PieChart width={500} height={300} position="flex">
                <Pie
                  data={pieData}
                  color="#000000"
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />

                <Legend />
              </PieChart>
            </CardColumns>
            </Row>

           
            

            
          </CardBody>
        </Card>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressPieChart;
