import React from 'react'
import "../Components/Css/Webinarvideos.css"
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const Webinarvideos =()=> {
    return (
    <>
            <div className='heading'>
                <h1><HomeOutlinedIcon /><Link to="/">Home</Link></h1>
                <h2>Webinars & Videos</h2>
            </div>
            <div className='bigBox'>
                <p>Check out our upcoming free, live webinars! If you would like to be notified about any new webinars we add to the schedule,
                    <a href=" https://www.accelebrate.com/newsletter">sign up for our newsletter</a>
                    . You can also find all of our videos on our <a href="https://www.youtube.com/c/AccelebrateInc">YouTube Channel</a>
                    "."</p>
                <ul>
                    <li><a href="https://attendee.gotowebinar.com/register/6069612477805920345?source=ACC">Excel Tips and Tricks</a> "(4/19/23)"
                        Join us for this free, live webinar as Holly French, software trainer and MOS (Microsoft Office Specialist) Master, walks you through powerful new (and not so new) tools you can use immediately to your boost productivity in Excel. </li>
                    <li><a href=""></a>
                        <br></br></li>
                    <li><a href=""></a>
                        <br></br></li>
                    <li><a href=""></a>
                        <br></br></li>
                    <li><a href=""></a>
                        <br></br></li>
                </ul>

            </div>
        </>
    )
}

export default Webinarvideos