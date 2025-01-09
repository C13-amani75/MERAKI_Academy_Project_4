import React from 'react'
import { ContactUs } from '../role 2 interface/ContactUs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerSs'>
      <div className='f1'>
        <h4>Camelia Store</h4>
        <p>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
      </div>
      <div className='f2'>
        <h5>Quick Links</h5>
        <h6>HOME</h6>
        <h6>ABOUT</h6>
        <h6>ABOUT</h6>
        <h6>ABOUT</h6>
        <p>Services</p>
      </div>
      <div className='f3'>
        <h2>Help & Info</h2>
        <p>Track Your Order</p>
        <p>Returns + Exchanges</p>
        <p>Shipping + Delivery</p>
        <p>Contact Us</p>
        <p>Find us easy</p>
        <p>Faqs</p>
      </div>
      <div className='f4'>
        <ContactUs/>
        <div>
        Do you have any questions or suggestions? contact@yourcompany.com
        Do you need support? Give us a call. +43 720 11 52 78
        </div>
      </div>
      </div>
      <div>
      We ship with: icon icon
Payment Option: card card card
© Copyright 2022 Kaira. All rights reserved. Design by TemplatesJungle Distribution By ThemeWagon
      </div>
      </div>
  )
}

export default Footer