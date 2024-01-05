import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const recentCarsData = [
  {
    imageSrc: "/car2.svg",
    title: "Volkswagen Altas Exceline",
    year: "2013",
    description: "Share details to receive a solid offer within minutes.",
    distance: "20000 km",
  },
  {
    imageSrc: "/5d4db6e517a689e87c4266f61d77f803.svg",
    title: "Audi A3",
    year: "2013",
    description: "Share details to receive a solid offer within minutes.",
    distance: "345400 km",
  },
  
  // Add more recent cars data as needed
];

const RecentCars = () => {
  return (
    <>
    
    <div className='pt-5 d-flex align-items-center  justify-content-between '>
      <div>
      <b> Recent Car's</b> 
      </div>
      <div>
        <Link to='/Recent' className='porange' >
        <b> View All</b> 
        </Link>
  
      </div>


    </div>

      <Container >
        <Row>
          {recentCarsData.map((car, index) => (
            <Col key={index} md={12}   className="mt-5 rounded-5 shadow pe-0">
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
                      className="text-light py-3 pe-5 rounded-start-5 "
                      style={{ background: "#F3B755" ,paddingLeft:'60px' }}
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
  );
};

export default RecentCars;
