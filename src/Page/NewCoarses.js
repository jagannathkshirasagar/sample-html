import React from 'react'
import "../Components/Css/NewCoarses.css"
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';


const NewCoarses =() => {
  return (
    <div>
         <div className='heading'>
                <h1><Link to="/"><HomeOutlinedIcon/>Home</Link></h1>
                <h2>New Courses </h2>

            </div>
            <div className='bigBox'>
            <p>Below, please find courses added in the past few months. Please don’t hesitate to <a href="/contact">contact us</a> to request a quote
for having one of these classes delivered, or to email us at <a href="mailto:info@accelebrate.com">info@accelebrate.com</a> if you
would like to suggest topics for future courses.</p>
<p>Sign up for our <a href="" target="_blank">newsletter</a> to get notified when we post new courses or resources.</p>   
   <hr></hr>
    <ul>
        <h2>Agile & IT Leadership Training</h2>
        <li><a href="https://www.accelebrate.com/training/lean-fundamentals">Lean Fundamentals</a></li>
        <li><a href="https://www.accelebrate.com/training/six-sigma-white-belt">Six Sigma White Belt</a></li>
        <li><a href="https://www.accelebrate.com/training/six-sigma-green-belt">Six Sigma Green Belt</a></li>
        <li><a href="https://www.accelebrate.com/training/business-analysis-foundations">Foundations of Business Analysis</a></li>
        <li><a href="https://www.accelebrate.com/training/agile-refresher-experienced-practitioners">Agile Refresher for Experienced Practitioners</a></li>
       <li><a href="https://www.accelebrate.com/training/business-analysis-strategic">Strategic Business Analysis</a></li>
    </ul>     
<ul>
    <h2>AWS, Azure & Cloud Computing Training</h2>
    <li><a href="https://www.accelebrate.com/training/migrating-to-aws">Migrating to AWS</a></li>
    <li><a href="https://www.accelebrate.com/training/solution-architect">Solution Architect Practitioner's Guide (AWS Certification Prep)</a></li>
    <li><a href="https://www.accelebrate.com/training/amazon-sagemaker-data-scientists">Amazon SageMaker Studio for Data Scientists</a></li>
    <li><a href="https://www.accelebrate.com/training/amazon-quicksight-visual-analytics">Authoring Visual Analytics Using Amazon QuickSight</a></li>
    <li><a href="https://www.accelebrate.com/training/aws-streaming-data-analytics-solutions">Building Streaming Data Analytics Solutions on AWS</a></li>
    <li><a href="https://www.accelebrate.com/training/aws-security-best-practices">AWS Security Best Practices</a></li>
    <li><a href=""></a></li>
</ul>  
<ul>
    <h2></h2>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul> 
<ul>
    <h2></h2>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul> 
   </div>
    </div>
  )
}

export default NewCoarses