import React from 'react'
import "../Components/Css/ContactAccelebrate.css"
import Header from '../Components/Header'
import Searchbar from '../Components/Searchbar'
import BottomSection from '../Components/BottomSection'

const ContactAccelebrate = () => {
    return (

        <div>
            {/* <Header />
            <Searchbar /> */}
            <div className='heading'>
                <h2>Contact Accelebrate</h2>
            </div>
            <div className='bigBox'>
                <p>Accelebrate's private classes are delivered privately for groups of 3 or more people either online or at your site worldwide.
Please contact us for a quote or more information.</p>
                <button>Why choose Accelebrate?</button>
                <p>Accelebrate is headquartered in Atlanta, Georgia with offices in Oregon, Pennsylvania, Virginia, and Washington.
Our instructors hail from nearly 30 states and more than half a dozen countries.</p>
                <div className='Address'>
                <div className='LeftAddress'>
                    <h1>Headquarters Address:</h1>
                    <p>925B Peachtree Street, NE</p>
                    <p>PMB 378</p>
                    <span>Atlanta</span>
                    <span>GA <a href=''>30309-3918</a></span>
                    <p>USA</p>
                    <strong>E-mail:</strong>
                    <a href='#' className='email-link'>info@accelebrate.com</a>
                    <em>Accelebrate's US Tax ID/EIN is </em>

                </div>
                <div className='Rightaddress'>
                    <strong>Phone:</strong>
                    <p>
                    <a href='tel:8778491850'>877 849 1850</a>toll-free in US/Canada
                    </p>
                    <p><a href='tel:+16786483113'>+1 678 648 3113</a> international</p>
                    <h1><strong>Fax:</strong></h1>
                    <p>+1 404 420 2491</p>
                    <div className='voucherButton'>
                        <button> <img src='https://cdn.accelebrate.com/images/misc/catalog_download_btn.png'/> </button>
                        <button> <img src='https://cdn.accelebrate.com/images/misc/discounts_btn.png'/> </button>
                    </div>
                </div>
                </div>
                <h3>Please fill out the form below for a swift response:</h3>
            <div className='swiftResponce_Table'>
            <div className='topclassname' ></div>
            <div className='salutation'></div>
            <div className='row1'>
                <div className='col1'>
                    <label>First name </label>
                    <button></button>
                </div>
                <div className='col1'>
                    <label>Last name </label>
                    <button></button>
                </div>
            </div>
            <div className='row1'>
                <div className='col1'>
                    <label>Organization</label>
                    <button></button>
                </div>
                <div className='col1'>
                    <label>Job title</label>
                    <button></button>
                </div>
            </div>
            <div className='row1'>
                <div className='col1'>
                    <label>Email </label>
                    <button></button>
                </div>
                <div className='col1'>
                    <label>Phone number</label>
                    <button></button>
                </div>
            </div>
        
            <div className='col2'>
                <label>State Address</label>
                 <button></button>
            </div>
        
        
            <div className='row1'>
                <div className='col1'>
                    <label>city</label>
                    <button></button>
                </div>
                <div className='col1'>
                    <label>State/Province(U S & Canada)</label>
                    <button></button>
                </div>
            </div>
            <div className='row4'>
                <div className='col1'>
                    <label>Zip / Postal code</label>
                    <button></button>
                </div>
                <div className='col1'>
                    <label>Country</label>
                    <button></button>
                </div>
            </div>
            <button className='btmbutton'>Continue</button>

            </div>
                
            </div>
            <BottomSection/>
        </div>
       
    )
}

export default ContactAccelebrate