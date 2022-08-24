import React from "react";
import { Row } from "reactstrap";
import VerticalBarChart from '../charts/barChart/VerticalBarChart';


const CostAnalysis = () => {
  return (
    <div className="container">
      <Row>
        <div className="card-subtitle">Cost / Budget</div>
      </Row>
      <Row>
        <VerticalBarChart />
      </Row>
      Horizontal Bar chart to display Total Budget and Total costTracking
    </div>
  );
};

export default CostAnalysis;
