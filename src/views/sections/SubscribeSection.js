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
       <div className="">
        <Container >
        <h2 className="text-center">
Subscribe to Monthly Newsletter</h2>
          <Row>
          <Col sm="6" md={{ size: 4, offset: 4 }}>
            <Container>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Subscribe
                  </Button>
                  </Container>
                </Col>
          </Row>
          
        </Container>
        </div>
    </>
  );
}

export default SubscribeSection;
