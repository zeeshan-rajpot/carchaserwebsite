import { Col, Container, Row } from "react-bootstrap"
import Navbar from "../Components/Navbar"
import RecentCars from "./RecentCars"
import PreviousCars from "./PreviousCars"


const Dashboard = () => {
  return (
    <>
    
    <Navbar
      link="Dashbord"
    />
<Container>
    <Row>

        <Col md={9}>
          <RecentCars/>
        </Col>
        <Col md={3} className="shadow" style={{height:'95vh', overflowY:'auto'}}>
        <PreviousCars/>
        </Col>
    </Row>
</Container>

    </>
  )
}

export default Dashboard

