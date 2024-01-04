import Navbar from "../Components/Navbar"
import { Col, Container, Row } from "react-bootstrap";

function Previous() {
    const recentCarsData = [
        {
          imageSrc: "/car2.svg",
          title: "Volkswagen Altas Exceline",
          year: "Year",
          description: "Share details to receive a solid offer within minutes.",
          distance: "20000km",
        },
        {
          imageSrc: "/car2.svg",
          title: "Volkswagen Altas Exceline",
          year: "Year",
          description: "Share details to receive a solid offer within minutes.",
          distance: "20000km",
        },
        {
          imageSrc: "/car2.svg",
          title: "Volkswagen Altas Exceline",
          year: "Year",
          description: "Share details to receive a solid offer within minutes.",
          distance: "20000km",
        },
        {
          imageSrc: "/car2.svg",
          title: "Volkswagen Altas Exceline",
          year: "Year",
          description: "Share details to receive a solid offer within minutes.",
          distance: "20000km",
        },
        // Add more recent cars data as needed
      ];
  return (
    <>
        <Navbar
        link='Previous'/>
    <Container>
    <Row className="w-75 m-auto mt-4">
        <h4><b>Previous</b></h4>
    </Row>
    </Container>

    <Container style={{height:'90vh', overflowY:'auto'}}>
        <Row>
          {recentCarsData.map((car, index) => (
            <Col key={index} md={12}   className="mt-3 rounded-5 shadow pe-0 w-75 m-auto ">
              <div className="d-flex">
                <div>
                  <img
                    src={car.imageSrc}
                    alt=""
                    style={{ width: "386px", height: "240px" }}
                  />
                </div>
                <div className="w-100">
                  <h3 className="mt-3 text-capitalize" style={{ color: "#707070" }}>
                    {car.title}
                  </h3>
                  <h5 className="mt-3" style={{ color: "#707070" }}>
                    <b>{car.year}</b>
                  </h5>
                  <p style={{ color: "#515151" }}>{car.description}</p>
                  <div className="text-end mt-5">
                    <span
                      className="text-light py-3 px-5 rounded-start-5 "
                      style={{ background: "#F3B755" }}
                    >
                      {car.distance}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Previous