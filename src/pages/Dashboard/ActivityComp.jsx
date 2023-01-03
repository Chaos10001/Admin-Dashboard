import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Card, CardBody, CardTitle } from 'reactstrap'

const ActivityComp = () => {
  return (
    <>
        <Card>
            <CardBody>
                <CardTitle className="mb-3">
                    Activity
                </CardTitle>
                <ul className="verti-timeline list-unstyled">
                    <li className="event-list">
                        <div className="event-timeline-icon">
                            <FontAwesomeIcon icon='fa-solid fa-dice-one' style={{color:'#3258f2'}}/>
                        </div>
                        <div className="flex-shrink-0 d-flex">
                            <div className="me-3">
                                <h4 className="font-size-14">
                                    1 Jan { '' }
                                </h4>
                            </div>
                            <div className="flex-grow-1">
                                <div>Release of an Alpha Version</div>
                            </div>
                        </div>
                    </li>
                    <li className="event-list">
                        <div className="event-timeline-icon">
                            <FontAwesomeIcon icon='fa-solid fa-user-line' style={{color:'#f25458'}}/>
                        </div>
                        <div className="flex-shrink-0 d-flex">
                            <div className="me-3">
                                <h4 className="font-size-14">
                                    13 Feb { '' }
                                </h4>
                            </div>
                            <div className="flex-grow-1">
                                <div>Bug fixes and Beta release to a small group of users for testing... <Link to='#'>Read More</Link> </div>
                            </div>
                        </div>
                    </li>
                    <li className="event-list">
                        <div className="event-timeline-icon">
                            <FontAwesomeIcon icon='fa-solid fa-money-bill-trend-up' style={{color:'#a93f55'}}/>
                        </div>
                        <div className="flex-shrink-0 d-flex">
                            <div className="me-3">
                                <h4 className="font-size-14">
                                    12 Oct { '' }
                                </h4>
                            </div>
                            <div className="flex-grow-1">
                                <div>Pre-seed funding is complete</div>
                            </div>
                        </div>
                    </li>
                    <li className="event-list">
                        <div className="event-timeline-icon">
                            <FontAwesomeIcon icon='fa-solid fa-person-thrug-window' style={{color:'#08a3a5'}}/>
                        </div>
                        <div className="flex-shrink-0 d-flex">
                            <div className="me-3">
                                <h4 className="font-size-14">
                                    11 Mar{ '' }
                                </h4>
                            </div>
                            <div className="flex-grow-1">
                                <div>Product Market fit found</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="text-center mt-4">
                    <Link to='' className="btn btn-primary btn-sm btn-text">
                        View More <i className="mdi mdi-arrow-right ms-1"></i>
                    </Link>
                </div>
            </CardBody>
        </Card>
    </>
  )
}

export default ActivityComp