import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Card, CardBody, CardTitle,Progress} from 'reactstrap'

const CityRanking = () => {
  return (
    <>
        <Card>
            <CardBody>
                <CardTitle className="mb-4">Top Selling Cities</CardTitle>
                <div className="text-center">
                    <div className="mb-4">
                        <FontAwesomeIcon icon='fa-solid fa-location-dot'/>
                    </div>
                    <h2>3,6722</h2>
                    <p>Seattle</p>
                </div>
                <div className="table-responsive mt-4">
                    <table className="table align-middle table-nowrap">
                        <tr>
                            <td style={{width:'30%'}}>
                                <p className="mb-0">Seattle</p>
                            </td>
                            <td style={{width:'25%'}}>
                                <p className="mb-0">2,179</p>
                            </td>
                            <Progress value='94' color='primary' className="bg-transparent progress-sm" size='sm'/>
                        </tr>
                        <tr>
                            <td style={{width:'30%'}}>
                                <p className="mb-0">Houston</p>
                            </td>
                            <td style={{width:'25%'}}>
                                <p className="mb-0">1,199</p>
                            </td>
                            <Progress value='80' color='secondary' className="bg-transparent progress-sm" size='sm'/>
                        </tr>
                        <tr>
                            <td style={{width:'30%'}}>
                                <p className="mb-0">San Francisco</p>
                            </td>
                            <td style={{width:'25%'}}>
                                <p className="mb-0">3,765</p>
                            </td>
                            <Progress value='69' color='primary' className="bg-transparent progress-sm" size='sm'/>
                        </tr>
                    </table>
                </div>
            </CardBody>
        </Card>
    </>
  )
}

export default CityRanking