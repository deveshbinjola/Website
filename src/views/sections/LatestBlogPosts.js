import React from "react";
import {Row, Col, Container} from "reactstrap";

function LatestBlogPosts() {
  
    return (
      <>
      <Container>
        <h1 className="text-center">
          Latest Blog Posts
        </h1>
          <Row>
            <Col sm="6" lg="4">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/smoky_1.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">5 Days in Iceland</h4>
            </Col>
            <Col sm="6" lg="4">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/8.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">3 Days in Switzerland</h4>

            </Col>          
            <Col sm="6" lg="4">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center">Weekend in Paris</h4>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
  
  export default LatestBlogPosts;
  