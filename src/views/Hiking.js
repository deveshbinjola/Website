import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";
import { Container, Jumbotron } from "reactstrap";
import imgUrl from "assets/img/selalajafoss.jpg";

function Hiking() {
    return (
        <>
        <NavBar />
        <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${imgUrl})`}}>
       <div className="overlay"></div>

       <Container>
         <br /> <br /><br /> <br />
        <h6 className="display-3 text-center" style={{ color: 'white' }}><span id="textSpan" style={{fontWeight:'bold'}}>Hiking</span></h6>
        </Container>
        </Jumbotron>
        <Container>
            
        </Container>
        <DemoFooter />
        </>
      );
    }
    
export default Hiking;

