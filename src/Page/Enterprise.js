import React from 'react'
import "../Components/Css/EnterPrice.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  return (
    <div>
         <div className='heading'>
                <h1><Link to="/"><HomeOutlinedIcon/>Home</Link></h1>
                <h2>Enterprise Learning Solutions </h2>

            </div>
            <div className='bigBox'>
                <p><strong>
                Does your team have the latest skillsets to achieve your organization's current goals? </strong>
                
We work hand in hand with you to design and deliver impactful corporate training solutions that
are <strong>targeted</strong>,<strong>personalized</strong>, and<strong>relevant</strong>
</p>
    <h3>Why invest in corporate training courses for your staff?</h3>    
    <ul>
        <li>more productive employees</li>
        <li>greater employee retention</li>
        <li>a more agile workforce that is better able to respond to new opportunities and challenges</li>
    </ul>     
    <p>
Let us partner with you to design and execute a <strong>holistic training strategy</strong>,
positioning you to attract and retain top talent while increasing your organization's
readiness to pursue new opportunities. At Accelebrate, we:
</p>
<p>Read more about Accelebrate's <a href="AgileLearningProcess">Learning Process</a> And Explore Our <a href='#'>discount and voucher programs</a></p>   
<hr/>
</div>
    </div>
  )
}

export default Enterprise