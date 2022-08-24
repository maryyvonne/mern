import React from "react";
import { Row } from "reactstrap";


const Workstream = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="card-title">Workstream</div>
          <Row>
           <p>Overdue</p>
           <p>Today</p>
           <p>This Week</p>
          </Row>
        </Row>
      </div>
    </>
  );
};

export default Workstream;
