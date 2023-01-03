import React from 'react'
import { Container,Row,Col } from 'reactstrap'

const Footer = () => {
  return (
    <footer>
        <Container fluid>
            <Row>
                <Col md={6}>{new Date().getFullYear()} Chaos.</Col>
                <Col md={6}>
                    <div className="text-sm-end d-none d-sm-block">
                        in Corperation with Heric Frosh and Dashkid
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer