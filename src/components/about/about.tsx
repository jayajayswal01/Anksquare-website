import React from 'react';
import { FaRocket, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';
import styles from './about.module.css';

const About = () => {
  const stats = [
    {
      icon: <FaRocket />,
      number: "100+",
      label: "Projects Delivered"
    },
    {
      icon: <FaUsers />,
      number: "50+",
      label: "Happy Clients"
    },
    {
      icon: <FaLightbulb />,
      number: "5+",
      label: "Years Experience"
    },
    {
      icon: <FaAward />,
      number: "25+",
      label: "Team Experts"
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>About Anksquare</h2>
            <div className={styles.subtitle}>Transforming Ideas into Digital Excellence</div>
            
            <div className={styles.description}>
              <p>
                At Anksquare, we&apos; passionate about delivering cutting-edge digital solutions 
                that help businesses thrive in the modern digital landscape. With our comprehensive 
                suite of services including web development, app creation, SEO optimization, and 
                strategic account management, we&apos; your one-stop destination for digital transformation.
              </p>
              <p>
                Our team of experts combines technical expertise with creative innovation to deliver 
                solutions that not only meet but exceed our clients&apos; expectations. We believe in 
                building long-term partnerships and ensuring our clients&apos; success in the digital world.
              </p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureText}>
                  <h3>Client-Focused Approach</h3>
                  <p>Your success is our priority. We work closely with you to understand and achieve your goals.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💡</div>
                <div className={styles.featureText}>
                  <h3>Innovative Solutions</h3>
                  <p>We leverage the latest technologies to create cutting-edge digital solutions.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🤝</div>
                <div className={styles.featureText}>
                  <h3>Dedicated Support</h3>
                  <p>Our team provides continuous support and maintenance for your digital assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
