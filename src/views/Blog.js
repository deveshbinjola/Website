import React from "react";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "./index-sections/SectionCarousel";
import NavBar from "./sections/Navbar.js";

function Blog() {
  
  return (
    <>
    <NavBar />
      <Container>
        <h1 className="text-center">
          Latest Blog Posts
        </h1>
        <br />
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
      <DemoFooter />
    </>
  );
}

export default Blog;
