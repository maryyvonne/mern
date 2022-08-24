import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'

const Messages = () => {
  return (
    <div className='messages'>
      <Card>
        <CardHeader>Messages</CardHeader>
        <CardBody>
          These items require your attention:
        </CardBody>
      </Card>
    </div>
  )
}

export default Messages