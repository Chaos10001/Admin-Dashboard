import React from 'react'
import { Card,Row,Col } from 'reactstrap'

const CardComp = () => {
  return (
    <>
        <Card className='overflow-hidden text-white bg-primary border-0 credit-card-container'>
            <Row>
                <Col>
                    <div>
                        <p className='fw-normal'>Name</p>
                        <p className='fw-bold'>Tony</p>
                    </div>
                    <div className='pt-1'>
                        <p className='fw-normal'>Card Number</p>
                        <p>4521 0830 9572</p>
                    </div>
                    <div className='pt-2 d-flex justify-content-between'>
                        <div>
                            <p className='fw-normal'>Valid</p>
                            <p className='fw-bold'>11/15</p>
                        </div>
                        <div>
                            <p className='fw-normal'>Expiry</p>
                            <p className='fw-bold'>03/25</p>
                        </div>
                        <div>
                            <p className='fw-normal'>CVV</p>
                            <p className='fw-bold'>...</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    </>

  )
}

export default CardComp