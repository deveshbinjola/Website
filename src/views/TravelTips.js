import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";
import { Jumbotron, Container } from "reactstrap";
import imgUrl from "assets/img/bus.jpg";


function TravelTips() {
    return (
        <>
        <NavBar />
        <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${imgUrl})`}}>
       <div className="overlay"></div>

       <Container>
         <br /> <br /><br /> <br />
        <h6 className="display-3 text-center" style={{ color: 'white' }}><span id="textSpan" style={{fontWeight:'bold'}}>Travel Tips</span></h6>
        </Container>
        </Jumbotron>
        <Container>
          <ol>
            <li></li>
          </ol>
            
        </Container>
        <DemoFooter />
        </>
      );
    }
    
export default TravelTips;

