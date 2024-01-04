import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OtpInput from 'react-otp-input';

import { Link } from "react-router-dom";

const Verification = () => {
    const [otp, setOtp] = useState('');
   
  return (
    <>
    <div
      className="loginbackground vh-100"
      style={{
        // backgroundImage: `url(/public/Rectangle%8.svg)`,
        height: "100vh", // Make sure the container takes the full height of the viewport
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className=" ">
        <Row className=" rounded-5 ">
          <Col
            md={6}
            className="d-none  d-md-flex align-item-center justify-content-center  rounded-start-5  shadow"
            style={{height:'80vh' ,background: "#FCEBCF"
        }}
          >
            <img
              className="login-img"
              src="/password_has_been_reset_successfully_concept [Converted].svg"
              alt="My Image"
              style={{ objectFit: 'contain' , height:'auto'}}

            />
          </Col>
          <Col
            md={6}
            className=" d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow mobr0 mob100"
            style={{height:'80vh'}}
          >
            {/* logo */}
            <img src="/ion_car-sport-outline.svg" alt="" />
            {/* heading */}
            <h1 className="  text-center fw-bold " width="80%">
              <span className="porange">Car</span> <span className="pgreen">Chaser</span>
            </h1>
            <h3
              className=" mt-2 mb-4 text-center "
              style={{ color: "var(--primary-color)" }}
            >
  Enter Verification Code
            </h3>
            <p>We have sent OTP on your Number</p>
       {/* otp code code */}


<div className=" wmob100 " style={{width:'50%'}}>
<OtpInput
     value={otp}
     onChange={setOtp}
     numInputs={4}
     className='inputStyle my-5'
    //   renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} className='inputotp w-25 ' />}
    />
</div>
       

            <div className="text-end mt-2" style={{ width: "80%" }}>
              {/* <p className="text-secondary me-4">Forget Password</p> */}
            </div>
            <Link to="/Dashbord" >
              <button className="Signin-btn mt-3 "> <img src="/Arrow - Right.svg" alt="" />  </button>
            </Link>

            <p className=" mt-3">
            Didn't Receive a OTP?{" "}
              <Link to="/SignUp" className=" text-decoration-none ">
                {" "}
                <span className="pgreen">
                  {" "}
                  <b> Resend OTP</b>
                </span>{" "}
              </Link>{" "}
            </p>
   
          </Col>
        </Row>
      </Container>
    </div>
  </>
  )
}

export default Verification