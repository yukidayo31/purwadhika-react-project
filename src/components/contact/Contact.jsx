import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g8d7km6",
        "template_8umx4u5",
        form.current,
        "bwA4ExoLowjyAfEfT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>faizahsiti888@gmail.com</h5>
            <a href="mailto:faizahsiti888@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Siti FZ</h5>
            <a
              href="https://www.linkedin.com/in/siti-fz-b098231aa"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Siti FZ</h5>
            <a
              href="https://api.whatsapp.com/send?phone=628"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="name"
            placeholder="Your full name"
          />
          <input required type="email" name="email" placeholder="Your email" />
          <textarea
            required
            name="message"
            rows="7"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
