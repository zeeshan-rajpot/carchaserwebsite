import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [formData, setFromData] = useState({
        phone: "",
        firstname: "",
        lastname: "",
        email :"",
        City:"",
        postal:""
      });
    
      const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
    
        setFromData((prev) => {
          return { ...prev, [name]: value };
        });
        console.log(`Value of ${name}: ${value}`);
      };

      const inputFields = [
        {
          id: 'firstname',
          iconSrc: '/person.svg',
          value: formData.firstname,
          onChange: handleInput,
          placeholder: 'First Name',
        },
        {
            id: 'lastname',
            iconSrc: '/person.svg',
            value: formData.lastname,
            onChange: handleInput,
            placeholder: 'Last Name',
          },
          {
            id: 'email',
            iconSrc: '/email.svg',
            value: formData.email,
            onChange: handleInput,
            placeholder: 'Email',
          },
          {
            id: 'phone',
            iconSrc: '/Group 17234.svg',
            value: formData.phone,
            onChange: handleInput,
            placeholder: 'Phone Number',
          },
      ];
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
              className="d-none  d-md-flex align-item-center justify-content-center loginbackground rounded-start-5  shadow"
              style={{height:'75vh'}}
            >
              <img
                className="login-img"
                src="/loop-cars-concept-collage 1.svg"
                alt="My Image"
                style={{ objectFit: 'contain' , height:'auto'}}

              />
            </Col>
            <Col
              md={6}
              className=" d-flex justify-content-center align-items-center flex-column bg-light  rounded-end-5  shadow mobr0 mob100"
              style={{height:'75vh'}}
            >
         
              <h2 className="  text-center fw-bold " width="80%">
              Sign Up
              </h2>
            
              


    {inputFields.map((field) => (
      <div key={field.id} className="mt-3 input-container rounded-5 shadow bg-light">
        <img src={field.iconSrc} alt="icon" />
        <input
          type="text"
          name={field.id}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
          className="bg-light"
        />
      </div>
    ))}
    <div className="d-md-flex align-items-center  justify-content-between mt-3  d-contents d-none ">

<div className="input-container rounded-5  shadow bg-light w-100">
                {/* <FaUser className='icon' /> */}
                <img src="/Path 24043.svg" />
                <input
                  type="text"
                  name="postal"
                  value={formData.postal}
                  onChange={handleInput}
                  placeholder="Postal Code"
                  className="bg-light"
                />
              </div>

<div className="input-container rounded-5  shadow bg-light w-100">
                {/* <FaUser className='icon' /> */}
                <img src="/Path 24043.svg" />
                <input
                  type="text"
                  name="City"
                  value={formData.City}
                  onChange={handleInput}
                  placeholder="City"
                  className="bg-light"
                />
              </div>

    </div>







{/* for mobile screen lasr 2 input values  */}




<div className="mt-3 d-md-none  input-container rounded-5  shadow bg-light w-100">
                {/* <FaUser className='icon' /> */}
                <img src="/Path 24043.svg" />
                <input
                  type="text"
                  name="postal"
                  value={formData.postal}
                  onChange={handleInput}
                  placeholder="Postal Code"
                  className="bg-light"
                />
              </div>
              <div className="mt-3 d-md-none  input-container rounded-5  shadow bg-light w-100">
                {/* <FaUser className='icon' /> */}
                <img src="/Path 24043.svg" />
                <input
                  type="text"
                  name="City"
                  value={formData.City}
                  onChange={handleInput}
                  placeholder="City"
                  className="bg-light"
                />
              </div>


              <div className="text-end mt-2" style={{ width: "80%" }}>
                {/* <p className="text-secondary me-4">Forget Password</p> */}
              </div>
       
                <button className="Signin-btn mt-3 ">  Sign Up  </button>


              <p className=" mt-3">
              Already have an account?{" "}
                <Link to="/Login" className=" text-decoration-none ">
                  {" "}
                  <span className="pgreen">
                    {" "}
                    <b> Sign In</b>
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

export default SignUp