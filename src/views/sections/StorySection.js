import React from "react";
import {Row, Col, Container} from "reactstrap";

function StorySection() {
  
    return (
      <>
      <Container>
      <h6 className="display-4 text-center"><span id="textSpan" style={{fontWeight:'bold'}}>Story</span></h6>

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
              <div className="section">
              <p className='lead' >
                 I started this blog in 2016 while in school with a sole purpose of making travel cheaper and better as I didn't have money to travel. Fast forward 4 years now I have learnt a few things about it, have been travelling using the things I learnt and now I am on my journey to explore the world. I am a Digital Nomad, I stay in a place for 4 to 6 weeks and explore around the area. I love hiking and often do bagpacking trips, it helps me get closer to nature. I currently travel alone and I highly encourage people to try it.
              </p>
              </div>
            </Col>          
            
          </Row>
          </Container>
      </>
    );
  }
  
  export default StorySection;
  