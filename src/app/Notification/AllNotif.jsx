import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AllNotif = () => {
    const notifications = [
        { text: 'This is the 1st notification', time: '12:23 pm' },
        { text: 'This is the 2nd notification', time: '1:30 pm' },
        { text: 'This is the 3rd notification', time: '3:45 pm' },
        // Add more notifications as needed
      ];
  return (
    <>
      <div style={{ background: "#f5f5f5", height: "100vh" }}>
        <Container className="">
          <Row>
            <Col md={12}>
              <h2 className="mt-5">
                <b>Notification</b>
              </h2>
            </Col>
          </Row>

          <Row
            className="bg-light"
            style={{ height: "60vh", overflowY: "auto" }}
          >
        
        <Col>
        <h5 className="m-3"><b>Today</b></h5>
        {notifications.map((notification, index) => (
  <div key={index} className="d-flex align-items-start justify-content-between p-2 m-3" style={{background:'#f5f5f5'}}>
    <div>
      <span>{notification.text}</span>
    </div>
    <div>{notification.time}</div>
  </div>
))}
        </Col>
          
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllNotif;
