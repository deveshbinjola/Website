import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import imgUrl from "assets/img/credit.jpg";

function CreditAdvice() {
    return (
        <>
        <NavBar />
        <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${imgUrl})`}}>
       <div className="overlay"></div>

       <Container>
         <br /> <br /><br /> <br />
        <h6 className="display-3 text-center" style={{ color: 'white' }}><span id="textSpan" style={{fontWeight:'bold'}}>Credit Advice</span></h6>
        </Container>
        </Jumbotron>
        <Container>
          <p className='lead text-justify'>

          In order to survive in life, you have to pay for goods and services. There are 3 ways to pay:
          <ul>
            <li>Cash (Venmo, Check, Bitcoin, Online transfer)</li>
            <li>Debit Card</li>
            <li>Credit Card</li>
          </ul>
          Using Cash and Debit cards is basically useless. Only Credit cards reward you to spend money. <span id="textSpan" style={{fontWeight:'bold'}}>A credit card lets you purchase things upto a certain limit each month and then gives you 25 days to pay it back for free from the statement end date, after that charges an interest rate.</span> You can use these rewards for many different things. There are four different types of rewards:
          <ul>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Cashback rewards.</span></li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Airline / Hotel rewards.</span></li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Credit card rewards.</span> Transferrable  to different hotels and airlines. Amex MR, Chase UR</li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Store rewards.</span></li>
          </ul>
          
          A lot of people really don't understand power and value of credit cards. That is why I made this simple post to help. <span id="textSpan" style={{fontWeight:'bold'}}>I have earned over 1.5 million points or miles using credit cards over last 5 years.</span> I have used these rewards to fly for free to different countries and booked a lot of free hotels. I want to help people utilize the full potential of credit cards and see how useful they can be if used properly. 
          
          <br /><br />
          I use credit cards for every purchase except when cash is the only option. Benefits of credit cards are not just limited to rewards points but before telling you that I want to tell you the basic rule of using credit cards:<span id="textSpan" style={{fontWeight:'bold'}}> Never spend on anything that you can’t afford and always pay your balance in full every month (best is to set it up on Autopay).</span>  You can choose which kind of rewards are best suited for you by choosing the right cards. Credit cards can be broken down into <span id="textSpan" style={{fontWeight:'bold'}}>No Annual fee </span>and <span id="textSpan" style={{fontWeight:'bold'}}>Annual fee</span> cards. Annual fees ranges from $49 upto $550. Annual fee is charged for the services provided by the credit card company. 
          <h3>
            How to earn points using credit cards?
          </h3>
          <ul>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Spending</span> You earn minimum of 1 point per dollar spent. Cards offer bonus points depending on categories, like a travel card might offer 2 bonus points/$ on travel/restaurants where as a business card might offer on utility payments.</li>
            <li><span id="textSpan" style={{fontWeight:'bold'}}>Bonus Points</span>. Cards offer bonus points (upto 200,000 points) when you sign up for the card. Chase Sapphire Reserve gave me 100,000 bonus points when I first signed up, current bonus is 50,000 points.</li>
          </ul>
          So every dollar you spend, you get points for that depending on what credit card you use. Like a travel card will give bonus points on travel and dining expenses. A business card will give bonus points for business expenses and a grocery card will give bonus points in supermarkets. You can use these points to do a lot of stuff. <span id="textSpan" style={{fontWeight:'bold'}}>But getting credit cards is not easy. </span>It really depends on your credit history (a 350-850 score which determines your credit power). 
          
          <h3>
          What do I spend my points on?
          </h3>
          I spend my points mostly on travel like booking airplane tickets and hotels. I never use cashback cards, I feel the most value of credit card rewards come through spending on airline tickets.
          <h3>
          Will too many cards hurt my credit score?
          </h3>
          This is absolute wrong, the more cards you have the better your credit score and the less chances it will go down if you ever screw up something. 
          
          <h3>Top 5 Credit cards (My go to cards) </h3>
          <ol>
            <li>Chase Sapphire Reserve</li>
            <li>Chase Sapphire Preferred</li>
            <li>Chase Freedom Unlimited</li>
            <li>Amex EveryDay Rewards Card</li>
            <li>Citi Prestige Card</li>
          </ol>
          Here is a breakdown of the benfits provided apart from points by one my favorite travel cards of all time <span id="textSpan" style={{fontWeight:'bold'}}>Chase Sapphire Reserve</span> which charges $550 per year.
          <br /><br />
          <ul>
            <li>$300 travel credit every year.</li>
            <li>Priority Pass Lounge membership (over 1400 lounges - $200 value)</li>
            <li>Reimbursement for your TSA Precheck / Global Entry (for foreigners living in USA) which is $100 for 5 years</li>
            <li>Primary Car Rental insurance (I have used it in Europe, 100% cost covered, they paid $1200)</li>
            <li>Lyft Pink and Doordash Membership ($60 credit as well)</li>
            <li>Accidental Insurance (I claimed a Gopro Hero 7 Black $400 which I lost sliding down a waterfall)</li>
            <li>Baggage Insurance and Trip Delay Insurance</li>
          </ul>
          I have been using this card since 2016 (when it first launched) and has been my primary card. This card gets even better if you have <span id="textSpan" style={{fontWeight:'bold'}}>Chase Freedom Unlimited</span> and <span id="textSpan" style={{fontWeight:'bold'}}>Chase Ink Preferred.</span> I am not asking to get this card but just trying to tell that if you use the cards properly, the benefits outweigh the annual fee.

          <br /><br />
          So this page is basically targeted towards people living in the United States but will apply to other countries as well depending on their Credit system and credit card rewards. 
          <br /> <br />
          Check out few posts below to kick start your credit.
          </p>
          <Row>
          <Col sm="6" lg="4">
          <a href="/firstcard"          
          target="_blank">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/firstcard.jpg")}
                height='350px'
                width='350px'
              />
             <h4 className="text-center">Applying for your First Card</h4>
          </a>
          </Col>
          <Col sm="6" lg="4">
          <a href="/top10cards"                 
          target="_blank">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/credit.jpg")}
                height='350px'
                width='350px'
              />
                <h4 className="text-center">Top 10 Credit Cards</h4>
          </a>
          </Col>          
          <Col sm="6" lg="4">
          <a href="/battleofthebest"          
          target="_blank">
          <img
                alt="..."
                className="img-rounded img-no-padding img-responsive"
                src={require("assets/img/top3.png")}
                height='350px'
                width='350px'
              />
                <h4 className="text-center">Best Travel Cards</h4>
          </a>
          </Col>
        </Row>
        </Container>
        <DemoFooter />
        </>
      );
    }
    
export default CreditAdvice;

