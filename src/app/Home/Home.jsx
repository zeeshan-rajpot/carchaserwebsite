import { Col, Container, Row } from "react-bootstrap";
import './herosection.css'
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"



const Home = () => {
  return (
    <>
    
    <Navbar
      link="Dashbord"
    />
      <div
        className="bg-formm"
        style={{ background: " " }}
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "85vh" }}
            >
            
              <h1>
                <b>
                  <span style={{ color: "#4E9C0B" }}>Selling </span> your car
                </b>
              </h1>
              <h1>
                <b>
                  <span style={{ color: "#4E9C0B" }}> Privately  </span>is a Hassle
                </b>
              </h1>

             
              <p style={{fontSize:'14px'}} className=" text-secondary  w-75">
              Over 100 dealers are competiting to buy your car. </p>
              {/* <input type="text" placeholder="Enter your email address"  className="w-75 input-field border-0 p-2 shadow   rounded-5   " /> */}

     
<div className=" d-flex  align-items-center  ">
<Link to='/Add' >
<button type="button" style={{background:'#F1AD3D'}} className="border-0 rounded-2  p-3 text-light"> Sell Your Car</button> </Link> 
<Link to='/'>
<button type="button"  className=" ms-2  rounded-2  p-3  porange contactbtn" style={{border:'1px soild #F1AD3D !important'}}>Contact Us</button> </Link> 
</div>

            </Col>

            <Col
              md={6}
              className=" d-flex align-items-center justify-content-center flex-column mobile50vh"
              style={{ height: "85vh" }}
            >
      
            <img src="/pana.svg" width='80%' alt="" />
       </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Home



// Path 22750


{/* <div id="header-content" className="  "  >
<div className="m-auto w-100"  style={{ position: "relative", display: "inline-block" , width:'70%' }}>
  <input type="text" className="msgsendinput w-100 p-2" />
  <img
    className="sendimg"
    src="/ion_send.svg"
    alt="send"
  />
</div>
</div> */}