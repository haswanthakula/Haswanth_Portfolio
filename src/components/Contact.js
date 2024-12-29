import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Contact.css'; // Make sure to import your CSS
import con from '../assets/contact1.png'; // Make sure the image path is correct

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w0brudi', 'template_u3iatzi', form.current, {
        publicKey: 'RwjP2wZEUkFove_K9',
      })
      .then(
        () => {
          // Success toast notification
          toast.success("Order submitted successfully!", {
            position: "top-right",
            autoClose: 3000, // Toast will auto-close after 3 seconds
          });

          // Reload the page after the toast notification closes
          setTimeout(() => {
            window.location.reload();
          }, 3000); // Matches the autoClose duration of the toast
          
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          // Error toast notification
          toast.error('Failed to send the message. Please try again.', {
            position: "top-right",
            autoClose: 3000, // Toast will auto-close after 3 seconds
          });
        }
      );
  };

  return (
    <section className="contact" id="Contact">
      <h2 className="heading1">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img draggable="false" src={con} alt="" />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div className="field">
                <input type="text" name="user_name" placeholder="Name" required />
                <i className="fas fa-user"></i>
              </div>
              <div className="field">
                <input type="email" name="user_email" placeholder="Email" required />
                <i className="fas fa-envelope"></i>
              </div>
              <div className="field">
                <input type="text" name="phone" placeholder="Phone" />
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="message">
                <textarea name="message" placeholder="Message" required />
                <i className="fas fa-comment-dots"></i>
              </div>
            </div>
            <div className="button-area">
              <button type="submit" id="submit-button">
                Submit <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
        <ToastContainer />
    </section>
  );
};

export default Contact;
