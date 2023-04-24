import React from 'react'
import "../Components/Css/Landingpage.css";

import Noticeboard from '../Components/Noticeboard'
import Quote from '../Components/Quote'
import FeaturedCoarses from '../Components/FeaturedCoarses'
import BottomSection from '../Components/BottomSection'
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
<>

<div>
<div class="HandsonLive">
    <img src="https://cdn.accelebrate.com/images/home/hero.jpeg" alt=""/>
    <div class="hnds">
        <h1>Hands on,Live Technical Training </h1>
        <p>At Your Site or Online</p>
        <button class="reqprice">  <Link to="contact">Request Pricing</Link></button>
    </div>
</div>
<div class="row2">
    <div class="col2">
<img src="https://www.nicepng.com/png/detail/67-671618_government-building-icon-clip-art-government-clipart.png" alt="icon"/>
<h1>Enterprice Learning Solutions</h1>
<p>Get a Free Consultations</p>
    </div>
    <div class="col3">
        <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="icon2"/>
        <h1>Customized Team Training</h1>
      <p>Request Pricing</p>
    </div>
    <div class="col2">
        <img src="https://www.pikpng.com/pngl/m/381-3814983_laptop-icon-png-laptop-and-phone-icon-clipart.png" alt="icon3"/>
        <h1>Online Training for Individuals</h1>
        <p>View Scheduled Classes</p>
    </div>
</div>

</div>
<Noticeboard/>
<Quote/>
<FeaturedCoarses/>
<BottomSection/>
</>
  )
}

export default Landingpage