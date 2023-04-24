import React from 'react'
import "../Components/Css/AgileLeadership.css"
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const AgileLeadership =()=> {
  return (
           <div>
        <div className='heading'>
         <h1><HomeOutlinedIcon/><Link to="/">Home</Link></h1>
                <h2>Agile & IT Leadership Training Courses</h2>

            </div>
            <div className='bigBox'>
                <p>Agile is a set of related practices focused on completing projects iteratively and incrementally. First pioneered in the world of software development, Agile methodologies are now used throughout organizations.</p>
                <p>Accelebrate's Agile training teaches your software developers, product owners, executive leadership, marketers, and others the practices of Agile and Scrum and how to integrate those methodologies into daily project management.</p>
                <p>Accelebrate's IT leadership training classes and seminars teach attendees how to motivate their IT teams through team building, clearer communication, effective leadership techniques, broadened management perspectives, successful conflict resolution processes, and more.</p>
<p>Most of these live, private IT leadership training courses for teams are full-day classes, though several are half-day seminars focused on specific issues. All full-day classes can also be customized and given in an online half-day seminar format for your team of 3 or more attendees. In addition, we offer open enrollment IT Leadership courses for individuals.</p>
<hr/>
</div>
    </div>

  )
}

export default AgileLeadership