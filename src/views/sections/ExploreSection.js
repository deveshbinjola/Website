import React from "react";
import {Row, Col, Container} from "reactstrap";

function ExploreSection() {
  
    return (
      <>
      <Container>
      <h6 className="display-4 text-center"><span id="textSpan" style={{fontWeight:'bold'}}>Explore</span></h6>

          <Row>
            <Col sm="4" lg="3">
            <a href="hiking">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/smoky_1.jpg")}
                  height='350px'
                  width='300px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>Hiking</h4>
            </a>
            </Col>
            <Col sm="4" lg="3">
                <a href="travelblog">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/8.jpg")}
                  height='350px'
                  width='300px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>Travel Blog</h4>
                </a>
            </Col>          
            <Col sm="4" lg="3">
            <a href="traveltips">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='350px'
                  width='300px'
                />
            <h4 className="text-center" style={{ color: 'black' }}>Travel Tips</h4>
            </a>
            </Col>
            <Col sm="4" lg="3">
            <a href="">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='350px'
                  width='300px'
                />
            <h4 className="text-center" style={{ color: 'black' }}>How to travel cheaper, smarter, better?</h4>
            </a>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
  
  export default ExploreSection;
  