import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p> Tomato is your go-to food delivery app, bringing delicious meals from your favorite restaurants right to your doorstep. Enjoy fast, reliable service, secure payments, and a wide variety of cuisine choices. Download the Tomato app today and experience the joy of easy, hassle-free food delivery </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />


                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2> Company</h2>
                    <ul>

                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className='footer-content-right'>
                    <h2> GET IN TOUCH</h2>
                    <ul>
                        <li>+91-7494884401</li>
                        <li> rana52155@gmail.com</li>
                    </ul>


                </div>
            </div>
            <hr/>
            <p className='footer-copyright'> Copyright 2024 @ Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
