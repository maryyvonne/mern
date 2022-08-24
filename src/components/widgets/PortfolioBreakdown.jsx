import React from 'react'
import { Row } from 'reactstrap'
import DataTable from '../tables/DataTable'

const PortfolioBreakdown = () => {
  return (
    <>
    <div className="container">
      <Row>
        <div className='h2 font-bold text-gray-400'>Portfolio Breakdown</div>
      </Row>
      <Row>
        <DataTable />
      </Row>
      Table 
      Headings: Project, Cost, Workload, Progress, Total Cost
      </div>
    </>
  )
}

export default PortfolioBreakdown