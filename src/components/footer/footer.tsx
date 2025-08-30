import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Development', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'SEO Optimization', href: '#services' },
    { name: 'Account Management', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Technical Solutions', href: '#services' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaGithub />, href: 'https://github.com', label: 'GitHub' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Company Info */}
            <div className={styles.companyInfo}>
              <h2 className={styles.logo}>Anksquare</h2>
              <p className={styles.description}>
                Transforming businesses through innovative digital solutions. 
                Your trusted partner in the digital transformation journey.
              </p>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaPhone /> <span>+1 (123) 456-7890</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope /> <span>contact@anksquare.com</span>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt /> <span>123 Business Street, Tech City</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className={styles.footerLinks}>
              <h3>Our Services</h3>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.href}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className={styles.footerLinks}>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for the latest updates and insights.</p>
              <form className={styles.subscribeForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeButton}>
                  Subscribe
                </button>
              </form>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Anksquare. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
