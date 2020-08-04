import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";

function TravelBlog() {
  
  return (
    <>
    <NavBar />
      <Container>
      <h6 className="display-3 text-center" style={{ color: 'black' }}><span id="textSpan" style={{fontWeight:'bold'}}>Travel Blog</span></h6>

        <br />
        <Row>
          <Col sm="6" lg="4">
          <a href="iceland">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/Photos/smoky_1.jpg")}
                height='450px'
                width='350px'
              />
             <h4 className="text-center" style={{ color: 'black' }}>5 Days in Iceland</h4>
          </a>
          </Col>
          <Col sm="6" lg="4">
          <a href="switzerland">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/Photos/8.jpg")}
                height='450px'
                width='350px'
              />
               <h4 className="text-center" style={{ color: 'black' }}>3 Days in Switzerland</h4>
          </a>
          </Col>          
          <Col sm="6" lg="4">
          <a href="paris">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/Photos/paris.jpg")}
                height='450px'
                width='350px'
              />
                <h4 className="text-center" style={{ color: 'black' }}>Weekend in Paris</h4>
          </a>
          </Col>
        </Row>
      </Container>
      <DemoFooter />
    </>
  );
}

export default TravelBlog;
