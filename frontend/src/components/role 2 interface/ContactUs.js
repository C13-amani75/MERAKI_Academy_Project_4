
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_88ljiua', 'template_fucernl', form.current, {
        publicKey: 'LM88rYf8WpguESY8m',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};






























  
  
  
  
  
  
  
  
  
  
  /* return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" onChange={(e)=>{
        setUserMail(...userMail,{from_name:e.target.value})
      }} />

      <label>Email</label>
      <input onChange={(e)=>{
        setUserMail(...userMail,{user_Email:e.target.value})
      }} type="email" name="user_email" />

      <label>Message</label>
      <textarea onChange={(e)=>{
        setUserMail(...userMail,{message:e.target.value})
      }} name="message" />
      <input type="submit" value="Send" onClick={()=>{
        sendEmail()
      }}/>
    </form>
  ); */
