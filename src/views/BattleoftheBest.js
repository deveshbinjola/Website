import React from "react";
import DemoFooter from "components/Footers/DemoFooter.js";
import NavBar from "./sections/Navbar.js";
import { Container, Jumbotron } from "reactstrap";
import imgUrl from "assets/img/credit.jpg";

function BattleoftheBest() {
    return (
        <>
        <NavBar />
        <Jumbotron className="jumbotron" style={{ backgroundImage: `url(${imgUrl})`}}>
       <div className="overlay"></div>

       <Container>
         <br /> <br /><br /> <br />
        <h6 className="display-3 text-center" style={{ color: 'white' }}><span id="textSpan" style={{fontWeight:'bold'}}>Battle of the Best</span></h6>
        </Container>
        </Jumbotron>
        <Container>
        <p className='lead text-justify'>

        With American Express making changes to its Platinum Card now makes all the top three high end credit card companies to make changes to its top product in the last 1 year. Today I am trying to evaluate which one is the best card among the best.
        <br /><br />

I start my journey on <span id="textSpan" style={{fontWeight:'bold'}}>August 7, 2020</span> and I am headed towards <span id="textSpan" style={{fontWeight:'bold'}}>Colorado.</span> I plan to do a lot of hiking, bagpacking and other adventures in Colorado.
<br /><br />

I am in no way good enough to tell you about Digital Nomad but I can share what<span id="textSpan" style={{fontWeight:'bold'}}> I am trying to do in order to become financially free, which will eventually make me location independent and work on my own leisure and do things that I love.</span>
<h4>Which cards are being evaluated?</h4>
            <ul>
                <li>Chase Sapphire Reserve</li>
                <li>Platinum Card by American Express</li>
                <li>Citi Prestige Card</li>
            </ul>
            <h4>Annual Fee vs Earning?</h4>
            The annual fees of the top cards is $450 for CSR and Prestige whereas annual fee of Platinum has been increased to $550. All three cards have different bonus categories.

</p>


            {/* <table class="table table-striped">
<thead class="thead">
    <tr>
    <th></th>
    <th><center>Chase Sapphire Reserve</center></th>
    <th><center>AMEX Platinum Card</center></th>
    <th><center>Citi Prestige</center></th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">Annual Fee</th>
    <td><center>$450</center></td>
    <td><center>$550</center></td>
    <td><center>$450</center></td>
    </tr>
    <tr>
    <th scope="row">Airfare & Hotels</th>
    <td><center>3x (Includes all travel purchases)</center></td>
    <td><center>5x (purchased through airlines/ Amex portal)</center></td>
    <td><center>3x (Includes all travel purchases)</center></td>
    </tr>
    <tr>
    <th scope="row">Dining</th>
    <td><center>3x</center></td>
    <td><center>1x</center></td>
    <td><center>2x</center></td>
    </tr>
    <tr>
    <th scope="row">Entertainment</th>
    <td><center>1x</center></td>
    <td><center>1x</center></td>
    <td><center>2x</center></td>
    </tr>
    <tr>
    <th scope="row">Others</th>
    <td><center>1x (1.5x with Freedom Unlimited)</center></td>
    <td><center>1x</center></td>
    <td><center>1x</center></td>
    </tr>
</tbody>
</table>
I believe CSR has the best bonus earning ratios among all three cards pre-dominantly because of its 3x points on travel (includes hotels, public transport, flights, car rentals, Uber/Lyft and more) and dining. Though CSR has one more unique feature of linking with <b>Chase Freedom Unlimited</b>, which gives 1.5 points on all the purchases.<br>AMEX Platinum has a nice 5x of Airfare and Hotels but that should be purchased directly with airlines or from the AMEX travel portal which I believe is rubbish as there are very few people who book flights/hotels directly through their websites. AMEX also have a disadvantage on having $550 as their annual fee(which they changed recently).<br>Citi almost have the same rewards like CSR but have 2x on dining though they 2x on entertainment purchases as well.</p>
Winner: Chase Sapphire Reserve
Runner Up: AMEX Platinum Card
<br />
<img src="Image/chasereserve.jpg" class="img-responsive">
    <div class="lower">
        Chase Sapphire Reserve.
    </div>
<br />

<p>Lets compare these bonus categories on purchases, assuming $5000 on travel, $2500 on dining, $1000 on entertainment and $10000 on other expenses.</p>

<table class="table table-striped">
<thead class="thead">
    <tr>
    <th></th>
    <th><center>Chase Sapphire Reserve</center></th>
    <th><center>AMEX Platinum Card</center></th>
    <th><center>Citi Prestige</center></th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">Airfare & Hotels</th>
    <td><center>15000 </center></td>
    <td><center>25000 </center></td>
    <td><center>15000 </center></td>
    </tr>
    <tr>
    <th scope="row">Dining</th>
    <td><center>15000</center></td>
    <td><center>5000</center></td>
    <td><center>10000</center></td>
    </tr>
    <tr>
    <th scope="row">Entertainment</th>
    <td><center>1000</center></td>
    <td><center>1000</center></td>
    <td><center>2000</center></td>
    </tr>
    <tr>
    <th scope="row">Others</th>
    <td><center>15000 </center></td>
    <td><center>10000</center></td>
    <td><center>10000</center></td>
    </tr>
    <tr>
    <th scope="row">Total</th>
    <td><center><b>46000</b></center></td>
    <td><center>41000</center></td>
    <td><center>37000</center></td>
    </tr>
</tbody>
</table>

<p><b>Winner:</b> Chase Sapphire Reserve</p>
<p><b>Runner Up:</b> AMEX Platinum Card</p>
<br />
<img src="Image/premier.png" class="img-responsive">
    <div class="lower">
        Citi Premier.
    </div>
<br />
<h4><b>Sign Up Bonus, APR and Additional Card Fee</b></h4>
<p>Sign up bonuses are a big factor for choosing the best cards. AMEX Platinum and Citi Prestige have always been on the slow side here. Though we sometimes see huge sign up bouses for Platinum cards but its very rare. CSR had 100,000 points offer till January 12,2017 and still has it in branch till Mar 12,2017. </p>

<table class="table table-striped">
<thead class="thead">
    <tr>
    <th></th>
    <th><center>Chase Sapphire Reserve</center></th>
    <th><center>AMEX Platinum Card</center></th>
    <th><center>Citi Prestige</center></th>
    </tr>
</thead>
<tbody>
<tr>
    <th scope="row">Sign up Bonus</th>
    <td><center><b>50,000 (100,000 in branch)</b></center></td>
    <td><center>40,000</center></td>
    <td><center>40,000</center></td>
    </tr>
    <tr>
    <th scope="row">APR</th>
    <td><center>16.49% to 23.49%</center></td>
    <td><center>0 (Have to pay in full)</center></td>
    <td><center>15.74%</center></td>
    </tr>

    <tr>
    <th scope="row">Additional Card Fee</th>
    <td><center>$75</center></td>
    <td><center>$175 (for upto 3 cards)</center></td>
    <td><center><b>$50</b></center></td>
    </tr>

</tbody>
</table>

<p><b>Winner:</b> Chase Sapphire Reserve</p>
<p><b>Runner Up:</b> AMEX Platinum Card</p>

<br />
<br />

<h4><b>Annual Travel Credit and Lounge Pass</b></h4>
<p>The high end credit card gives some huge perks on travel. <b>CSR</b> offers $300 travel credit which can be redeemed for any travel purchase. Amex Platinum and Citi Prestige offers $200 and $250 in Airline fee credit which can be redeemed in anything purchased directly with airlines you choose or <a href="post6">Check this way to redeem it.</a> Amex Platinum now also offers $200 in Uber Credits ($15/month and $20 at the end of the year), which is good for someone who uses Uber a lot. But I am afraid, people having Amex Platinum Card uses Uber that often unless they live in big city like San Francisco or New York.</p>

<table class="table table-striped">
<thead class="thead">
    <tr>
    <th></th>
    <th><center>Chase Sapphire Reserve</center></th>
    <th><center>AMEX Platinum Card</center></th>
    <th><center>Citi Prestige</center></th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">Annual Travel Credit</th>
    <td><center>$300 (on any travel purchase)</center></td>
    <td><center><b>$200 (Uber) + $200 (Air Travel Credit)</b></center></td>
    <td><center>$250 (Air Travel Credit)</center></td>
    </tr>
    <tr>
    <th scope="row">VIP Lounges Membership</th>
    <td><center>Priority Pass Select</center></td>
    <td><center>Global Lounge collection</center></td>
    <td><center>Priority Pass Select</center></td>
    </tr>
    <tr>
    <th scope="row">No. of Lounges</th>
    <td><center>900+</center></td>
    <td><center><b>1000+</b></center></td>
    <td><center>900+</center></td>
    </tr>
<tr>
    <th scope="row">Guest Free Access</th>
    <td><center>All guests in your travel party</center></td>
    <td><center><b>2</b></center></td>
    <td><center>2</center></td>
    </tr>
</tbody>
</table>

<p><b>Winner:</b> AMEX Platinum Card</p>
<p><b>Runner Up:</b> Chase Sapphire Reserve</p>
<br />
<img src="Image/newplatinum.png" class="img-responsive">
    <div class="lower">
        The new AMEX Platinum Card with metal design.
    </div>
<br />

<h4><b>Travel Partners</b></h4>
<p>By travel partners I mean, to which airlines or hotels you can transfer your points.</p>

<table class="table table-striped">
<thead class="thead">
    <tr>
    <th><center>Chase Sapphire Reserve</center></th>
    <th><center>AMEX Platinum Card</center></th>
    <th><center>Citi Prestige</center></th>
    </tr>
</thead>
<tbody>
    <tr>
    <td><center>British Airways</center></td>
    <td><center>British Airways</center></td>
    <td><center>Eva Air</center></td>
    </tr>
    <tr>
    <td><center>Singapore Airlines</center></td>
    <td><center>Singapore Airlines</center></td>
    <td><center>Singapore Airlines</center></td>
    </tr>
    <tr>
    <td><center>Flying Blue</center></td>
    <td><center>Flying Blue</center></td>
    <td><center>Flying Blue</center></td>
    </tr>
<tr>
    <td><center>Korean Air</center></td>
    <td><center>Air Canada</center></td>
    <td><center>Asia Miles</center></td>
    </tr>

    <tr>
    <td><center>Southwest</center></td>
    <td><center>ANA</center></td>
    <td><center>Virgin America</center></td>
    </tr>

    <tr>
    <td><center>United</center></td>
    <td><center>Emirates</center></td>
    <td><center>Malaysia Airlines</center></td>
    </tr>
<tr>
    <td><center>Virgin Atlantic</center></td>
    <td><center>Etihad</center></td>
    <td><center>Etihad</center></td>
    </tr>
    <tr>
    <td><center>Hyatt</center></td>
    <td><center>Air Mexico</center></td>
    <td><center>Qatar Airways</center></td>
    </tr>
    <tr>
    <td><center>IHG</center></td>
    <td><center>Virgin America</center></td>
    <td><center>Garuda Indonesia</center></td>
    </tr>
    <tr>
    <td><center>Marriott</center></td>
    <td><center>Jet Blue</center></td>
    <td><center>Royal Orchid Plus</center></td>
    </tr>
    <tr>
    <td><center>Ritz Carlton</center></td>
    <td><center>Hilton</center></td>
    <td><center>Hilton</center></td>
    </tr>

    <tr>
    <td><center></center></td>
    <td><center>SPG</center></td>
    <td><center></center></td>
    </tr>
</tbody>
</table> */}


        </Container>
        <DemoFooter />
        </>
      );
    }
    
export default BattleoftheBest;

