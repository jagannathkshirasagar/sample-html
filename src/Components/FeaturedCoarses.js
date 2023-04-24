import React from 'react'
import "./Css/FeaturedCoarses.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const FeaturedCoarses = () => {
  return (
    <div><div className="featuredcourses">
    <h4>FEATURED COURSES</h4>
    <hr/>
    <div className="optionsTabs">
        <div className="topcol">
         <div className="topmost">
            <div className="insidecol">
                <p className="agilep1">Agile Training</p>
                <h1 className="agileH1">Agile Foundations and Jira</h1>
            </div>
            <div className="insiderow">
                <span>2 &nbsp;
                    <small>DAYS</small>
                </span>
                <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
            </div>
         </div>
         <div className="topmost">
            <div className="insidecol">
                <p className="agilep1">Agile Training</p>
                <h1 className="agileH1">Certified Agile Leadership</h1>
            </div>
            <div className="insiderow">
                <span>3 &nbsp;
                    <small>DAYS</small>
                </span>
                <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
            </div>
         </div>
         <div className="topmost">
            <div className="insidecol">
                <p className="agilep1">AWS Training</p>
                <h1 className="agileH1">Amazon SageMaker Studio for Data Scientists</h1>
            </div>
            <div className="insiderow">
                <span>4 &nbsp;
                    <small>DAYS</small>
                </span>
                <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
            </div>
         </div>
         <div className="topmost">
            <div className="insidecol">
                <p className="agilep1">Data Engineering Training</p>
                <h1 className="agileH1">Introduction to Data Engineering with Python</h1>
            </div>
            <div className="insiderow">
                <span>3 &nbsp;
                    <small>DAYS</small>
                </span>
                <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
            </div>
         </div>
        </div>

        <div className="topcol">

            <div className="topmost">
                <div className="insidecol">
                    <p className="agilep1">Agile Training</p>
                    <h1 className="agileH1">Agile Foundations and Jira</h1>
                </div>
                <div className="insiderow">
                    <span>3 &nbsp;
                        <small>DAYS</small>
                    </span>
                    <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
                </div>
             </div>
             <div className="topmost">
                <div className="insidecol">
                    <p className="agilep1">Python Training</p>
                    <h1 className="agileH1">Python Security</h1>
                </div>
                <div className="insiderow">
                    <span>3 &nbsp;
                        <small>DAYS</small>
                    </span>
                    <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
                </div>
             </div>
             <div className="topmost">
                <div className="insidecol">
                    <p className="agilep1">Security Training</p>
                    <h1 className="agileH1">Cloud Application Security in Python for AWS</h1>
                </div>
                <div className="insiderow">
                    <span>3 &nbsp;
                        <small>DAYS</small>
                    </span>
                    <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
                </div>
             </div>
             <div className="topmost">
                <div className="insidecol">
                    <p className="agilep1">Git Training</p>
                    <h1 className="agileH1">Git for Developers</h1>
                </div>
                <div className="insiderow">
                    <span>3 &nbsp;
                        <small>DAYS</small>
                    </span>
                    <span> &starf;&bigstar;&starf;&bigstar;&star;</span>
                </div>
             </div>
        </div>
    </div>
</div>
<div className="videosection">
    <div className="btmutubeheading">
        <div className="headerRow">
            <div className="Ytubeicon"><YouTubeIcon/></div>
            <h6>Recent videos from the Accelebrate channel</h6>
        </div>
        <button className="btmright"><Link to="Webinarvideos" >More Videos </Link></button>
    </div>
    <div className="videoslist">
        <div className="video">
            <img src="https://i.ytimg.com/vi/C3OOKislvd8/hqdefault.jpg" alt="kubernets"/>
            <p className="freewebinar">Free Webinar: Kubernetes Best Practices</p>
        </div>
        <div className="video">
            <img src="https://i.ytimg.com/vi/KJt0xcv0-6o/hqdefault.jpg" alt="kubernets2"/>
            <p className="freewebinar">Free Webinar: Agile Leadership to Facilitate a Hyper Productive Team</p>
        </div>
        <div className="video">
            <img src="https://i.ytimg.com/vi/bdLDmc6Hg-U/hqdefault.jpg" alt="kubernets3"/>
            <p className="freewebinar">Web Intelligence Webinar: How to Create Dazzling Reports with Conditional Formatting in Webi</p>
        </div>
        <div className="video">
            <img src="https://i.ytimg.com/vi/4QzEIDuM8MM/hqdefault.jpg" alt="kubernets4"/>
            <p className="freewebinar">Free Webinar: Python Data Science on AWS</p>
        </div>
    </div>
</div></div>
  )
}

export default FeaturedCoarses