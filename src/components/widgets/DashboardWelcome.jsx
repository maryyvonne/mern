import React from "react";
import { Col, Row } from "reactstrap";
import { GetCurrentDate } from "../../utils/GetCurrentDate";
import Messages from "../../widgets/messages/Messages";
import DashboardGreeting from "./DashboardGreeting";

const DashboardWelcome = () => {
  const currentDate = GetCurrentDate();
  return (
    <>
    <div className="dashboardWelcome">
      <Row>
        <DashboardGreeting />
      </Row>
      <Row className="dashboardDate">{currentDate}</Row>
      <Row>
        <Messages />
      </Row>
      
    </div>
   
      </>
  );
};

export default DashboardWelcome;
