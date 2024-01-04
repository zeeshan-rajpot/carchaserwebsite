import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Crousel from "./Crousel";

const DetailCar = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Row>
          <Col></Col> 
        </Row>

        <Row>
          <Col md={8}>
            <Crousel/>
            </Col> 
          <Col md={4}>

            
            </Col> 
        </Row>
      </Container>
    </>
  );
};

export default DetailCar;
