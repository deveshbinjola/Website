import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "../sections/Navbar.js";
import { Container, Jumbotron, Button } from "reactstrap";
import imgUrl from "assets/img/Photos/8.jpg";


function Iceland() {
    return (
        <>
        <NavBar />
        <Jumbotron style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', minHeight:600 }}>
        <h1 className="display-3">5 Days Alone in Iceland</h1>
        <p className="lead">
        My first solo trip to Iceland was nothing less than total roller coaster. From loosing my bag to falling in a glacial lake to getting stuck alone in a black sand beach, there was nothing more excitement I could have asked for.
        <br /><Button color="primary" target= '_blank' href ="https://www.youtube.com/watch?v=bqGP6tWxaTs&t=8s" >Travel Video</Button>

        </p>
        </Jumbotron>
        <Container>
        </Container>
        <DemoFooter />
        </>
      );
    }
    
export default Iceland;

