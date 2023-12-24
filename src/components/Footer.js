import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <div className='color pt-5'>
            <div className='container footer-top'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-md-6'>
                            <p className='text-left'>Ready to get started?</p>
                            <p>Talk to us today</p>
                        </div>
                        <div className='col-md-6 text-right'>
                            <button className='get'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer pt-5'>
                <div className='container py-5'>
                    <div className='row py-5 text-light'>
                        <div className='col-md-2 mx-auto'>
                            <h5>EShop</h5>
                            <p>Eshop is online shop</p>
                        </div>
                        <div className='col-md-2 mx-auto'>
                            <p>Subscribe to get important update</p>
                            <input type='text' placeholder='Email' className='form-control' /><br />
                            <button className='btn btn-primary'>Subscribe</button>
                        </div>
                        <div className='col-md-2 mx-auto'>
                            <p>Follow Us</p>
                            <FacebookIcon className='icon' />
                            <TwitterIcon className='icon' />
                            <LinkedInIcon className='icon' />
                        </div>
                        <div className='col-md-2 mx-auto'>
                            <p>Call Us</p>
                            <h5>01303802605</h5>
                        </div>
                    </div>
                </div>
                <hr className='bg-light'/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md text-center'>
                            <h5 className='text-light'>@{new Date().getFullYear()} Shuvo | All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer