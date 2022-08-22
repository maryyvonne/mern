import React, { useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faBootstrap,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import ProgressBar from "./ProgressBar";
import { selectAllProjectCategories } from "../../features/projectCategories/projectCategoriesSlice";

const ProgressBarChart = () => {
  const [progressItems, setProgressItems] = useState(selectAllProjectCategories);

  return (
  <div>
    <Card className="card">
      <CardHeader><h2>Project Progress</h2></CardHeader>
      <CardBody>
        {progressItems.map((cat) => (
          <ProgressBar id={cat.id} key={cat.title} title={cat.title} bgcolor="orange" progress='30'  height={30}/>
        ))}
      </CardBody>
    </Card>
  </div>
  )
};

export default ProgressBarChart;
