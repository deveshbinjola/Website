import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";
import { Jumbotron, Container } from "reactstrap";
import imgUrl from "assets/img/bus.jpg";

function DigitalNomad() {
    return (
        <>
        <NavBar />
        <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${imgUrl})`}}>
       <div className="overlay"></div>

       <Container>
         <br /> <br /><br /> <br />
        <h6 className="display-3 text-center" style={{ color: 'white' }}><span id="textSpan" style={{fontWeight:'bold'}}>Digital Nomad</span></h6>
        </Container>
        </Jumbotron>
        <Container>

        <p className='lead text-justify'>

          A <span id="textSpan" style={{fontWeight:'bold'}}>Digital Nomad is someone who is location-independent and use technology to perform their job.</span> Digital nomads work remotely, telecommuting rather than being physically present at a company's headquarters or office. I always wanted to be a Digital Nomad but for some reason or another I have never been able to until now. As COVID-19 hit the world most companies started to encourage their emolyees to work remote and the company I work for went completely remote as well giving me an opportunity to get closer to my dream life. Though it's still far from my dream life but still it's a step closer to it. As soon as I heard this amazing news I gave my 60 day move out notice, sold all my stuff, packed whatever that can fit in my car and started planning to head west. 
          <br /><br />
          
          I start my journey on <span id="textSpan" style={{fontWeight:'bold'}}>August 7, 2020</span> and I am headed towards <span id="textSpan" style={{fontWeight:'bold'}}>Colorado.</span> I plan to do a lot of hiking, bagpacking and other adventures in Colorado.
          <br /><br />

          I am in no way good enough to tell you about Digital Nomad but I can share what<span id="textSpan" style={{fontWeight:'bold'}}> I am trying to do in order to become financially free, which will eventually make me location independent and work on my own leisure and do things that I love.</span>
          <h3>
          Steps I am taking to be financially free
          </h3>
          <ul>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Minimalism </span>is about living with less. If you are planning to live on the road you need to be Minimalist as you want to pack as light as possible. But if you can start it as early as possible, the better.  <span id="textSpan" style={{fontWeight:'bold'}}> By spending less, two things work in your favor. One, you’ll have more money to put aside for your financial freedom. Two, you’ll learn that you actually need a lot less stuff to survive, which also helps you put aside more money.</span> If you look closely in your closet or in your home, you will see that there are so many things that you don't even use and there will be few things that won't change anything if you didn't use them.</li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Using credit card rewards for travel.</span> The biggest expense while travelling is to pay for your flight tickets. If somehow you can eliminate this. You will be able to save a lot of money and can further head towards my goal of being financially free. Similary hotel rewards can be used.</li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Get rid of Debt.</span> One of the major steps in order to be financially free is to get rid of debt. I had over $50,000 in student loans and it took me a couple of years to get rid of it, making it my utmost priority. Student loan debt in US is one of the biggest problem for young people (over $1 trillion). Try not to pay minimum payment and try to clear it ASAP.</li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Start Investing.</span> Well I am not qualified enough to tell you where to invest but one thing I can say is <span id="textSpan" style={{fontWeight:'bold'}}>invest long-term.</span> I have tried short term investing like trading options and other things, it's great if you are investing a lot of time in it but if you want to be financially free, invest long term.</li>
          </ul>
          </p>
          </Container>

        <DemoFooter />
        </>
      );
    }
    
export default DigitalNomad;