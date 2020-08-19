import React from "react";
import {Row, Col, Container} from "reactstrap";
import {Link} from "react-router-dom"

function LatestBlogPosts() {
  
    return (
      <>
      <Container>
      <h6 className="display-4 text-center"><span id="textSpan" style={{fontWeight:'bold'}}>Latest Blog post</span></h6>

          <Row>
            <Col sm="6" lg="4">
            <Link to="iceland">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/smoky_1.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>5 Days in Iceland</h4>
            </Link>
            </Col>
            <Col sm="6" lg="4">
            <Link to="switzerland">             
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/8.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>3 Days in Switzerland</h4>
            </Link>
            </Col>          
            <Col sm="6" lg="4">
              <Link to="paris">
            <img
                  alt="..."
                  className="img-rounded img-no-padding img-responsive"
                  src={require("assets/img/Photos/paris.jpg")}
                  height='450px'
                  width='350px'
                />
                <h4 className="text-center" style={{ color: 'black' }}>Weekend in Paris</h4>
              </Link>
            </Col>
          </Row>
          </Container>
      </>
    );
  }
  
  export default LatestBlogPosts;
  