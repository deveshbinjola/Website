import React from "react";
import {Row, Col, Container} from "reactstrap";

function ExploreSection() {
  
    return (
      <>
      <Container>
        <h2 className="text-center">
          Explore
        </h2>
          <Row>
            <Col sm="4" lg="3">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/smoky_1.jpg")}
                  height='400px'
                  width='300px'
                />
                <h4 className="text-center">Hiking</h4>

            </Col>
            <Col sm="4" lg="3">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/8.jpg")}
                  height='400px'
                  width='300px'
                />
                <h4 className="text-center">Travel Tips</h4>
            </Col>          
            <Col sm="4" lg="3">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='400px'
                  width='300px'
                />
            <h4 className="text-center">Weekend in Paris</h4>
            </Col>
            <Col sm="4" lg="3">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='400px'
                  width='300px'
                />
            <h4 className="text-center">Weekend in Paris</h4>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
  
  export default ExploreSection;
  