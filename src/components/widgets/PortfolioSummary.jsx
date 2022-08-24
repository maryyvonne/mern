import React from "react";
import { Col, Row } from "reactstrap";
import CostAnalysis from '../finance/CostAnalysis';
import Pipeline from './Pipeline'


const PortfolioSummary = () => {
  return (
    <>
      <div className='container'>
        <Row>
          <div className='h2 font-bold text-gray-400'>Portfolio Summary</div>
        </Row>
        <Row>
          <Col className='col-6'>
            <Pipeline />
          </Col>

          <Col className='col-6'>
            <CostAnalysis />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PortfolioSummary;
