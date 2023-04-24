import React from 'react';
import "./Css/Searchbar.css"
import {Link} from "react-router-dom"
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DatasetOutlinedIcon from '@mui/icons-material/DatasetOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Searchbar = () => {
  return (
<>
    <div className="search_nav">
    <div className="searchbar">
       <Link to="/"> <img src="https://www.accelebrate.com/img/logo.svg" alt=""/></Link>
        <div className="col">
          <div className="searchtf">
            <div className="icon"><SearchOutlinedIcon/></div> 
          <input type="text" placeholder="" ></input>
          </div>
    
        <button className="searchbtn">  <Link to='Search'>search</Link></button>
    </div>
    </div>
    <div className="menubar">
       <div className="dropdown">
        <h1 style={{fontFamily: "sans-serif"}}><MenuIcon />Course Catalog <ArrowDropDownOutlinedIcon/></h1>
        <div className="dropdown-content">
          <a href="AgileLeadership"><ExploreOutlinedIcon/>  Agile & IT Leadership</a>
          <a href="#"> <CloudOutlinedIcon/>  AWS,Azure & Cloud Computing</a>
          <a href="#"><LocalLibraryOutlinedIcon/>Communication, Design &E-Learning</a>
          <a href="#">Data Science,AI/ML&RPA</a>
          <a href="#"><DescriptionOutlinedIcon/>Data Visualisation & Reporting </a>
          <a href="#"><DatasetOutlinedIcon/>DataBase & Big Data</a>
          <a href="#"><DynamicFeedOutlinedIcon />Devops &CI/CD</a>
          <a href="#">Microsoft & .NET</a>
          <a href="#">Link 9</a>
        </div> 
        </div>
     
       <div className="vl"></div>
       
       <div className="dropdown">
           <h1>Solutions</h1>
           <div className="dropdown-content">
          <a href="enterprise"><ApartmentOutlinedIcon/>Enterprise Learning Solutions</a>
          <a href="#"><GroupsOutlinedIcon/>Customised Team Learning</a>
          <a href="#"><DevicesOutlinedIcon/>Online Training for Individuals</a>
          <a href="#"><MonetizationOnOutlinedIcon/>Discount and Vouchers</a>
     
         </div>
       </div> 
        <div className="dropdown">
            <h1>Certifications</h1>
            <div className="dropdown-content">
              <a href="#">Accelebrate</a>
              <a href="#">Agile For Marketers</a>
              <a href="#">AWS</a>
              <a href="#">Devops Institute</a>
              <a href="#">Google Cloud</a>
              <a href="#">Microsoft</a>
              <a href="#">VMWare</a>
            </div>
        </div>
            <div className="dropdown">
                <h1>Insights</h1>
                <div className="dropdown-content">
                  <a href="#">Webinar & Videos</a>
                  <a href="#"><Link to="Casestudies">Case Studies</Link></a>
                  <a href="#">Blog</a>
                  <a href="#">Tutorials</a>
                  <a href="#">How To's</a>
                  <a href="#">Newsletter</a>
                </div>
            </div>
            <div className="dropdown">
                    <h1>About</h1>
                    <div className="dropdown-content">
                      <a href="#">History</a>
                      <a href="#">Values</a>
                      <a href="#">Process</a>
                      <a href="#">Management</a>
                      <a href="#">Trainers</a>
                      <a href="#">Testimonials</a>
                     </div>  
            </div>
            <div className="dropdown">
                        <h1>Contact</h1>
                        <div className="dropdown-content">  
                 </div> 
            </div>      

     </div>
     </div>
     </>
  )
}
export default Searchbar
