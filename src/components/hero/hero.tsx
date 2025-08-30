'use client';
import { useState, useEffect } from 'react';
import styles from './hero.module.css';
import { FaReact, FaMobile, FaSearch, FaCode } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: <MdAccountBalance className={styles.serviceIcon} />, name: 'Account Management' },
    { icon: <FaSearch className={styles.serviceIcon} />, name: 'SEO' },
    { icon: <FaMobile className={styles.serviceIcon} />, name: 'App Development' },
    { icon: <FaCode className={styles.serviceIcon} />, name: 'Website Development' },
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={`${styles.textContent} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.highlight}>Anksquare</span>
          </h1>
          <p className={styles.subtitle}>
            Transforming Digital Dreams into Reality
          </p>
          <p className={styles.description}>
            Your trusted partner in digital transformation. We deliver innovative solutions
            that drive growth and success for your business.
          </p>
          <div className={styles.cta}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Our Services</button>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {service.icon}
              <h3>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradient1}></div>
        <div className={styles.gradient2}></div>
        <div className={styles.grid}></div>
      </div>
    </div>
  );
};

export default Hero;