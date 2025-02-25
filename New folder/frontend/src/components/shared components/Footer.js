import React from 'react'
import { ContactUs } from '../role 2 interface/ContactUs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSs'>
      <div className='f1 f'>
        <h3>Camelia Store</h3>
        <p className='fp'>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
      </div>
      <div className='f2  f'>
        <h3>Quick Links</h3>
        <h6 className='linkF'>HOME</h6>
        <h6  className='linkF'>ABOUT</h6>
        <h6  className='linkF'>SERVICES</h6>
        <h6  className='linkF'>CATEGORY</h6>
        <h6 className='linkF'>CONTACT</h6>
      </div>
      <div className='f3 f'>
        <h3>Help & Info</h3>
        <p className='fp'>Track Your Order</p>
        <p className='fp'>Returns + Exchanges</p>
        <p className='fp'>Shipping + Delivery</p>
        <p className='fp'>Contact Us</p>
        <p className='fp'>Find us easy</p>
        <p className='fp'>Faqs</p>
      </div>
      <div className='f4 f'>
        <h3>CONTANT US</h3>
        <ContactUs/>
        <div className=''>
        Do you have any questions or suggestions?<br/><span className='linkF'>contact@yourcompany.com</span><br/>
        Do you need support? Give us a call.<br/><span className='linkF'> +43 720 11 52 78</span>
        </div>
      </div>
      </div>
      <div>
      <span>We ship with: icon icon
Payment Option: card card card
© Copyright 2022 Kaira.</span><span>All rights reserved. Design by TemplatesJungle Distribution By ThemeWagon</span> 
      </div>
      </div>
  )
}

export default Footer