import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Components/Navbar";
import Crousel from "./Crousel";
import CarSpec from "./CarSpec";

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

            <CarSpec/>
            </Col> 
        </Row>
      </Container>
    </>
  );
};

export default DetailCar;
