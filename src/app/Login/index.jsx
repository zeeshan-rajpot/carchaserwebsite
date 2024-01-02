import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData , setFromData] =useState({
        email:'',
        password:'',
        
        }
         );
        
         const handleInput = (event) => {
          const name = event.target.name;
          const value = event.target.value;
        
          setFromData((prev) => {
            return { ...prev, [name]: value };
          });
          console.log(`Value of ${name}: ${value}`);
        };
  return (
    <>
    <div className="loginbackground vh-100"
     style={{ backgroundImage: `url(/public/Rectangle\ 8.svg)`,
     height: '100vh', // Make sure the container takes the full height of the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}
     >
    <Container className=" ">
        <Row className=" rounded-5 ">
          <Col
            md={6}
            className="vh-70  d-flex align-item-center justify-content-center loginbackground rounded-start-5  shadow"
          >
            <img
              className="login-img"
              src="/loop-cars-concept-collage 1.svg"
              alt="My Image"
              style={{objectFit:"cover"}}
            />
          </Col>
          <Col
            md={6}
            className="vh-70 d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow "
            
          >
          
            {/* logo */}
            <img src="/ion_car-sport-outline.svg" alt="" />
{/* heading */}
              <h1
              className="  text-center fw-bold"
              width="80%"
              
            >
        <span className="" >Car</span>       <span>Cherse</span>
           
            </h1>
            <h3
              className=" mt-4 mb-4 text-center "
              style={{ color: "var(--primary-color)" }}
            >
              Sign In
            </h3>
            <div className="input-container rounded-5  shadow bg-light ">
              {/* <FaUser className='icon' /> */}
              <img src= "/Group 17234.svg" />
              <input type="text" name='email' value={formData.email} onChange={handleInput} placeholder="Phone Number" className="bg-light" />
            </div>
         
            <div
              className="text-end mt-2"
              style={{ width: "80%",  }}
            >
              <p className="text-secondary me-4">Forget Password</p>
            </div>
            <Link to="/Dashbord" onClick={handleInput} >

            <button className="Signin-btn">
              {" "}
                {" "}
                Sign In{" "}
            </button>
            </Link>

            <p className="text-secondary mt-3">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-secondary">
                {" "}
                Sign up{" "}
              </Link>{" "}
            </p>
          </Col>
        </Row>
      </Container>

    </div>

    </>
  )
}

export default Login