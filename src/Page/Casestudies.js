import React from 'react'
import "../Components/Css/Casestudies.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';


const Casestudies = () => {
    return (
        <div>
            <div className='heading'>
                <h1><Link to="/"><HomeOutlinedIcon />Home</Link></h1>
                <h2>Training that Continuously Evolves with your Needs </h2>
            </div>
            <div class="casestudyBox">
                <p>
                    Accelebrate focuses on building long-term relationships with our clients, empowering them and their employees
                    to achieve their learning and business goals.
                </p>
                <p>We are here to support you and your organization as you grow and pursue new opportunities.&nbsp;Here
                    are <strong>case studies</strong> of 4 leading organizations with whom we have built long-term relationships:
                </p>
                <p><a href="/case-studies/agile">Agile Transformation for a medical device manufacturer</a></p>
                <p><a href="/case-studies/data-science">Data Science Upskilling for a US government health agency</a></p>
                <p><a href="/case-studies/full-stack">Development Stack Modernization for a leading financial services firm</a></p>
                <p><a href="/case-studies/devops">DevOps Automation for a fast-growing Inc. 5000 technology firm</a></p>
                <p><a href="/case-studies/power-automate">Power Automate for a major international financial institution</a></p>
            </div>
        </div>


    )
}

export default Casestudies