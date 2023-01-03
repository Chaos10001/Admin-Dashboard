import React from 'react'
import Breadcrumbs from '../../component/common/Breadcrumbs'
import { Container,Row,Col,Card,CardBody} from 'reactstrap'  
import CardComp from './CardComp'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import MetricsComp from './MetricsComp'
import ColumnChart from './ColumnChart'
import AdComp from './AdComp'
import ActivityComp from './ActivityComp'
import CityRanking from './CityRanking'

const DashBoard = () => {
  const reports=[
    {
      title:'Orders',
      iconClass:'fa-bag-shopping',
      description:'1,235',
      percent:'+1.2'
    },
    {
      title: 'Revenue', 
      iconClass:'fa-money-check-dollar', 
      description:'53,723',
      percent:'-5'
    },
    {
      title: 'Sales', 
      iconClass:'fa-sack-dollar', 
      description:'51,234',
      percent:'+20'
    }
  ]
  return (
    <>
      <Container fluid>
        <Breadcrumbs title='Admin' breadcrumbItem='Dashboard'/>
        <Row>
          <Col xl='4'>
            <CardComp/>
            <MetricsComp/>
          </Col>
          <Col xl='8'>
            <Row>
              {reports.map((report,key)=>{
                return(

                <Col md='4' key={'_col_' + key}>
                  <Card className={'mini-stats-vid' + key}>
                    <CardBody>
                      <div className="d-flex">
                        <div className="flex-grow-1 text-center">
                          <p className="text-muted fw-medium">
                            {report.title}
                          </p>
                          <h4 className='mb-0'>{report.description}</h4>
                        </div>
                        <div className="icons-sm rounded-circle  align-self-center mini-stat-icon">
                          <span className="icon-container rounded-circle bg-primary">
                            <FontAwesomeIcon icon={`fa-solid ${report.iconClass}`}/>
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                )
              })
              }
            </Row>
            <Row>
              <Col xs='12'>
                <Card>
                  <ColumnChart dataColor={['#800080','#0000ff','#add8e6']}/>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
         <Row>
              <Col xl='5'>
                <AdComp/>
              </Col>
              <Col xl='5'>
                <ActivityComp/>
              </Col>
              <Col xl='5'>
                <CityRanking/>
              </Col>
            </Row>
      </Container>
    </>
  )
}

export default DashBoard