import React from "react";
import {Row, Col, Container} from "reactstrap";
import {Link} from "react-router-dom"

function ExploreSection() {
  
    return (
      <>
      <Container>
      <h6 className="display-4 text-center"><span id="textSpan" style={{fontWeight:'bold'}}>Explore</span></h6>

          <Row>
            <Col sm="4" lg="3">
                <Link to="travelblog">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/8.jpg")}
                  height='350px'
                  width='300px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>Travel Blog</h4>
                </Link>
            </Col>    
            <Col sm="4" lg="3">
            <Link to="hiking">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/Switzerland/6.jpg")}
                  height='350px'
                  width='300px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>Hiking</h4>
            </Link>
            </Col>      
            <Col sm="4" lg="3">
            <Link to="traveltips">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/traveltips.jpg")}
                  height='350px'
                  width='300px'
                />
            <h4 className="text-center" style={{ color: 'black' }}>Travel Tips</h4>
            </Link>
            </Col>
            <Col sm="4" lg="3">
            <Link to="/travelsmarter">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/car.jpg")}
                  height='350px'
                  width='300px'
                />
            <h4 className="text-center" style={{ color: 'black' }}>How to travel cheaper, smarter, better?</h4>
            </Link>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
  
  export default ExploreSection;
  