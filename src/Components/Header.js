import React from 'react';
import "./Css/Header.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div> <div class="TopNavBar">
      <div class="USA_Canada">
        <img src="https://www.accelebrate.com/img/flags/usa.png" alt="" />
        <img src="https://www.accelebrate.com/img/flags/canada.png" alt="" />
        <p> 877 849 1850</p>
      </div>
      <div class="vl"></div>
      <div class="globe_icon">
        <img src="https://www.accelebrate.com/img/flags/globe.png" alt="" />
        <p>+1 678 648 3113</p>
      </div>
      <div class="socialmeda_icons">
        <a href="https://www.facebook.com/Accelebrate/" className='icons'><FacebookIcon/></a>
        <a href="https://twitter.com/Accelebrate" className='icons'><TwitterIcon/></a>
        <a href="https://www.linkedin.com/company/accelebrate/" className='icons'><YouTubeIcon/></a>
        <a href="https://www.youtube.com/channel/UCrrd6oIvZhU6wMizEzcO3oA" className='icons'><LinkedInIcon/></a>
        <a href="https://accounts.google.com/v3/signin/" className='icons'><EmailIcon/></a>
     
      </div>
    </div>
    </div>
  )
}
export default Header