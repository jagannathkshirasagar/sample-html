import React from 'react'
import "./Css/Noticeboard.css"
import { Link } from 'react-router-dom'

const Noticeboard = () => {
  return (
    <>
    <div className="noticeboard">
    <div className="newcourses">
        <h3>New Courses</h3>
        <p>
            To keep pace with new and evolving technologies, we continuously update our titles and add
            new training courses to our catalog on a regular basis.</p>
            <ul classNmae="list">
                <li>&#8226; ServiceNow Service Catalog</li>
                <li>&#8226; Developing Microservices</li>
                <li>&#8226; Cloud-Native Application Modernization with Cloud Foundry, Microservices, Agile, and DevOps</li>
                <li>&#8226; Technical Introduction to Microservices</li>
            </ul>
            <button className="listbutton"><Link to="NewCoarses">All new courses </Link>&gt;</button>
    </div>
    <hr className="vtcl"/>
    <div className="webinar">
        <h3> Upcoming Free Webinars</h3>
        <p>Join us for Webinar Wednesdays! See our           </p>
        <div className="calender">
                <button>
                    <h4> Kubernetes Best Practices </h4>
                    <p> Wed, Mar 29, 1-2pm ET</p>
                </button>
                <button>
                    <h4> Women in Tech: AWS Machine Learning and AI</h4>
                    <p> Thu, Mar 30, 11:30-1:30pm ET</p> 
                </button>
        </div>
    </div>
</div>
    </>
  )
}

export default Noticeboard