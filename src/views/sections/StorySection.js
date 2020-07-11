import React from "react";
import {Row, Col, Container} from "reactstrap";

function StorySection() {
  
    return (
      <>
      <Container>
        <h2 className="text-center">
          Story
        </h2>
          <Row>
            <Col sm="6" >
            <a href="hiking">
            <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/Photos/me.jpg")}
                  height='620px'
                  width='520px'
                />
            </a>
            </Col>
            <Col sm="6">
                <a href="travelblog">

                <h4 className="text-center">Travel Blog</h4>
                </a>
            </Col>          
            
          </Row>
          </Container>
      </>
    );
  }
  
  export default StorySection;
  