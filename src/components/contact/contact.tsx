"use client";
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'contact@anksquare.com',
      link: 'mailto:contact@anksquare.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: '123 Business Street, Tech City, TC 12345',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' },
    { icon: <FaInstagram />, link: 'https://instagram.com' }
  ];

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>
            Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  className={styles.infoCard}
                  target={info.icon.type === FaMapMarkerAlt ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className={styles.iconWrapper}>
                    {info.icon}
                  </div>
                  <div className={styles.infoContent}>
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                  rows={6}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
