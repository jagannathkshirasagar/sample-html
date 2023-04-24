import React from 'react'
import "./Css/BottomSection.css"
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';

function BottomSection() {
    return (
        <div>
            <div class="bottomsection">
                <div class="btmtop">
                    <div class="rowbtmsec">
                        <div className="btmicon"><RocketLaunchIcon /> </div>
                        <div class="rowbottomseccol">
                            <h1>Learn faster</h1>
                            <p>Our live, instructor-led lectures are far more effective than pre-recorded classes</p>
                        </div>
                    </div>
                    <div class="rowbtmsec">
                        <div className="btmicon">< HandshakeIcon /></div>
                        <div class="rowbottomseccol">
                            <h1>Satisfaction guarantee</h1>
                            <p>If your team is not 100% satisfied with your training, we do what's necessary to make it right</p>
                        </div>
                    </div>
                    <div class="rowbtmsec">
                        <div className="btmicon"><SupportAgentIcon /></div>
                        <div class="rowbottomseccol">
                            <h1>Learn online from anywhere</h1>
                            <p>Whether you are at home or in the office, we make learning interactive and engaging</p>
                        </div>
                    </div>
                    <div class="rowbtmsec">
                        <div className="btmicon"><PaymentIcon /></div>
                        <div class="rowbottomseccol">
                            <h1>Multiple Payment Options</h1>
                            <p>We accept check, ACH/EFT, major credit cards, and most purchase orders</p>
                        </div>
                    </div>
                </div>
                <hr class="bottomblue" />
                <div class="subscribe_mail">
                    <h1 class="xyz">Subscribe to our newsletter</h1>
                    <div class="email">
                        <input type="text" placeholder="   Your Email" />
                        <button class="subscribe">Subscribe</button>
                    </div>
                </div>
                <hr class="bottomblue" />
                <div class="location">Recent Training Locations</div>
                <div class="locationdetails">
                    <div class="loc1">
                        <p class="state-name">Alabama</p>
                        <p class="city-name"><span>Birmingham</span></p>
                        <p class="city-name"><span>Huntsville</span></p>
                        <p class="city-name"><span>Montgomery</span></p>
                        <p class="state-name">Alaska</p>
                        <p class="city-name"><span>Anchorage</span></p>
                        <p class="state-name">Arizona</p>
                        <p class="city-name"><span>Phoenix</span></p>
                        <p class="city-name"><span>Tucson</span></p>
                        <p class="state-name">Arkansas</p>
                        <p class="city-name"><span>Fayetteville</span></p>
                        <p class="city-name"><span>Little Rock</span></p>
                        <p class="state-name">California</p>
                        <p class="city-name"><span>Los Angeles</span></p>
                        <p class="city-name"><span>Oakland</span></p>
                        <p class="city-name"><span>Orange County</span></p>
                    </div>
                    <div class="loc2">
                        <p class="city-name"><span>Sacramento</span></p>
                        <p class="city-name"><span>San Diego</span></p>
                        <p class="city-name"><span>San Francisco</span></p>
                        <p class="city-name"><span>San Jose</span></p>
                        <p class="state-name">Colorado</p>
                        <p class="city-name"><span>Boulder</span></p>
                        <p class="city-name"><span>Colorado Springs</span></p>
                        <p class="city-name"><span>Denver</span></p>
                        <p class="state-name">Connecticut</p>
                        <p class="city-name"><span>Hartford</span></p>
                        <p class="state-name">DC</p>
                        <p class="city-name"><span>Washington</span></p>
                        <p class="state-name">Florida</p>
                        <p class="city-name"><span>Fort Lauderdale</span></p>
                        <p class="city-name"><span>Jacksonville</span></p>
                        <p class="city-name"><span>Miami</span></p>
                    </div>
                    <div class="loc3">
                        <p class="city-name"><span>Orlando</span></p>
                        <p class="city-name"><span>Tampa</span></p>
                        <p class="state-name">Georgia</p>
                        <p class="city-name"><span>Atlanta</span></p>
                        <p class="city-name"><span>Augusta</span></p>
                        <p class="city-name"><span>Savannah</span></p>
                        <p class="state-name">Hawaii</p>
                        <p class="city-name"><span>Honolulu</span></p>
                        <p class="state-name">Idaho</p>
                        <p class="city-name"><span>Boise</span></p>
                        <p class="state-name">Illinois</p>
                        <p class="city-name"><span>Chicago</span></p>
                        <p class="state-name">Indiana</p>
                        <p class="city-name"><span>Indianapolis</span></p>
                        <p class="state-name">Iowa</p>
                        <p class="city-name"><span>Cedar Rapids</span></p>
                    </div>
                    <div class="loc4">
                        <p class="city-name"><span>Des Moines</span></p>
                        <p class="state-name">Kansas</p>
                        <p class="city-name"><span>Wichita</span></p>
                        <p class="state-name">Kentucky</p>
                        <p class="city-name"><span>Lexington</span></p>
                        <p class="city-name"><span>Louisville</span></p>
                        <p class="state-name">Louisiana</p>
                        <p class="city-name"><span>New Orleans</span></p>
                        <p class="state-name">Maine</p>
                        <p class="city-name"><span>Portland</span></p>
                        <p class="state-name">Maryland</p>
                        <p class="city-name"><span>Annapolis</span></p>
                        <p class="city-name"><span>Baltimore</span></p>
                        <p class="city-name"><span>Frederick</span></p>
                        <p class="city-name"><span>Hagerstown</span></p>
                        <p class="state-name">Massachusetts</p>
                    </div>
                    <div class="loc5">
                        <p class="city-name"><span>Boston</span></p>
                        <p class="city-name"><span>Cambridge</span></p>
                        <p class="city-name"><span>Springfield</span></p>
                        <p class="state-name">Michigan</p>
                        <p class="city-name"><span>Ann Arbor</span></p>
                        <p class="city-name"><span>Detroit</span></p>
                        <p class="city-name"><span>Grand Rapids</span></p>
                        <p class="state-name">Minnesota</p>
                        <p class="city-name"><span>Minneapolis</span></p>
                        <p class="city-name"><span>Saint Paul</span></p>
                        <p class="state-name">Mississippi</p>
                        <p class="city-name"><span>Jackson</span></p>
                        <p class="state-name">Missouri</p>
                        <p class="city-name"><span>Kansas City</span></p>
                        <p class="city-name"><span>St. Louis</span></p>
                        <p class="state-name">Nebraska</p>
                    </div>
                    <div class="loc6">
                        <p class="city-name"><span>Lincoln</span></p>
                        <p class="city-name"><span>Omaha</span></p>
                        <p class="state-name">Nevada</p>
                        <p class="city-name"><span>Las Vegas</span></p>
                        <p class="city-name"><span>Reno</span></p>
                        <p class="state-name">New Jersey</p>
                        <p class="city-name"><span>Princeton</span></p>
                        <p class="state-name">New Mexico</p>
                        <p class="city-name"><span>Albuquerque</span></p>
                        <p class="state-name">New York</p>
                        <p class="city-name"><span>Albany</span></p>
                        <p class="city-name"><span>Buffalo</span></p>
                        <p class="city-name"><span>New York City</span></p>
                        <p class="city-name"><span>White Plains</span></p>
                        <p class="state-name">North Carolina</p>
                        <p class="city-name"><span>Charlotte</span></p>
                    </div>
                    <div class="loc7">
                        <p class="city-name"><span>Durham</span></p>
                        <p class="city-name"><span>Raleigh</span></p>
                        <p class="state-name">Ohio</p>
                        <p class="city-name"><span>Akron</span></p>
                        <p class="city-name"><span>Canton</span></p>
                        <p class="city-name"><span>Cincinnati</span></p>
                        <p class="city-name"><span>Cleveland</span></p>
                        <p class="city-name"><span>Columbus</span></p>
                        <p class="city-name"><span>Dayton</span></p>
                        <p class="state-name">Oklahoma</p>
                        <p class="city-name"><span>Oklahoma City</span></p>
                        <p class="city-name"><span>Tulsa</span></p>
                        <p class="state-name">Oregon</p>
                        <p class="city-name"><span>Portland</span></p>
                        <p class="state-name">Pennsylvania</p>
                        <p class="city-name"><span>Philadelphia</span></p>
                    </div>
                    <div class="loc8">
                        <p class="city-name"><span>Pittsburgh</span></p>
                        <p class="state-name">Rhode Island</p>
                        <p class="city-name"><span>Providence</span></p>
                        <p class="state-name">South Carolina</p>
                        <p class="city-name"><span>Charleston</span></p>
                        <p class="city-name"><span>Columbia</span></p>
                        <p class="city-name"><span>Greenville</span></p>
                        <p class="state-name">Tennessee</p>
                        <p class="city-name"><span>Knoxville</span></p>
                        <p class="city-name"><span>Memphis</span></p>
                        <p class="city-name"><span>Nashville</span></p>
                        <p class="state-name">Texas</p>
                        <p class="city-name"><span>Austin</span></p>
                        <p class="city-name"><span>Dallas</span></p>
                        <p class="city-name"><span>El Paso</span></p>
                        <p class="city-name"><span>Houston</span></p>
                    </div>
                    <div class="loc9">
                        <p class="city-name"><span>San Antonio</span></p>
                        <p class="state-name">Utah</p>
                        <p class="city-name"><span>Salt Lake City</span></p>
                        <p class="state-name">Virginia</p>
                        <p class="city-name"><span>Alexandria</span></p>
                        <p class="city-name"><span>Arlington</span></p>
                        <p class="city-name"><span>Norfolk</span></p>
                        <p class="city-name"><span>Richmond</span></p>
                        <p class="state-name">Washington</p>
                        <p class="city-name"><span>Seattle</span></p>
                        <p class="city-name"><span>Tacoma</span></p>
                        <p class="state-name">West Virginia</p>
                        <p class="city-name"><span>Charleston</span></p>
                        <p class="state-name">Wisconsin</p>
                        <p class="city-name"><span>Madison</span></p>
                        <p class="city-name"><span>Milwaukee</span></p>
                    </div>
                    <div class="loc10">

                        <p class="state-name">Alberta</p>
                        <p class="city-name"><span>Calgary</span></p>
                        <p class="city-name"><span>Edmonton</span></p>
                        <p class="state-name">British Columbia</p>
                        <p class="city-name"><span>Vancouver</span></p>
                        <p class="state-name">Manitoba</p>
                        <p class="city-name"><span>Winnipeg</span></p>
                        <p class="state-name">Nova Scotia</p>
                        <p class="city-name"><span>Halifax</span></p>
                        <p class="state-name">Ontario</p>
                        <p class="city-name"><span>Ottawa</span></p>
                        <p class="city-name"><span>Toronto</span></p>
                        <p class="state-name">Quebec</p>
                        <p class="city-name"><span>Montreal</span></p>
                        <p class="state-name">Puerto Rico</p>
                        <p class="city-name"><span>San Juan</span></p>
                        <p class="city-name"></p>
                        <p class="city-name"></p>
                    </div>

                </div>
                <hr class="bottomblue" />
                <div class="privacy">
                    <div class="termsofuse">
                        <Link to="/">  <img src="https://www.accelebrate.com/img/logo-light.png" alt="" /> </Link>
                        <div class="termsnconditions">
                            <p>Clients</p>
                            <p>Privacy</p>
                            <p>Terms of Use</p>
                            <p>Sitemap</p>
                            <p>Download Catalog</p>
                        </div>
                    </div>
                    <div class="allicons">
                        <button>
                            <img src="" alt="" /><TwitterIcon /> </button>
                        <button>
                            <img src="" alt="" /> <FacebookIcon /></button>
                        <button>
                            <img src="" alt="" /><LinkedInIcon /></button>
                        <button><YouTubeIcon /></button>
                        <button>
                            <img src="" alt="" /><EmailIcon /> </button>
                    </div>
                </div>
                <p class="leagalfooter">

                    © 2013-2023 Accelebrate, LLC - All rights reserved. All trademarks are owned by their <u>respective owners.</u>
                    This site is protected by reCAPTCHA. The collection of data and its use is described in our <u>Privacy Policy</u>
                    and <u>Terms of Service</u>
                </p>
            </div>
            <div class="bottommostnav">
                <p> <b> Your privacy matters:</b> This site uses cookies to analyze site usage and provide social media features.  <u>Learn More</u></p>
                <button>Accept</button>
            </div>
        </div>
    )
}

export default BottomSection