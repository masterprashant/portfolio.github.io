import { useState,useRef } from "react";
import Swal from "sweetalert2";
// import emailjs from 'emailjs-com'
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form =useRef()

 

  const sendEmail=(event)=>{ 
   event.preventDefault();

    emailjs.sendForm('service_5alz51w', 'template_hxbxqmg',form.current, 't_JSg3DVV29pBIjtD')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has been send Succesfully!',
        showConfirmButton: false,
        timer: 1500
      })
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title" >Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
         Write me a message
        </p>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_fname"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_lname"
              id="last-name"
              required
            />
          </label>
            </div>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              required
            />
          </label>
          
        
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        
        <div>
          <button className="btn btn-primary contact--form--btn" >Submit</button>
          
        </div>
      </form>
    </section>
  );
}
