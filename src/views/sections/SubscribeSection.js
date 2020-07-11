import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SubscribeSection() {
  return (
    <>
      
        <Container>
          <Row>
            <Col lg="4" md="6">
                
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  </Col>
                  <Col lg="4" md="6">   
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Subscribe
                  </Button>
                </Col>
          </Row>
          
        </Container>
    </>
  );
}

export default SubscribeSection;
