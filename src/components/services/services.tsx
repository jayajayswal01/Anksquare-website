import { FaCode, FaSearch, FaMobileAlt, FaChartLine, FaCogs, FaUsersCog } from 'react-icons/fa';
import styles from './services.module.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Website Development",
      description: "Custom-built, responsive websites that drive engagement and conversion",
      color: "#4f46e5"
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      color: "#7c3aed"
    },
    {
      icon: <FaSearch size={40} />,
      title: "SEO Optimization",
      description: "Boost your online visibility and reach your target audience effectively",
      color: "#06b6d4"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your digital presence",
      color: "#3b82f6"
    },
    {
      icon: <FaCogs size={40} />,
      title: "Technical Solutions",
      description: "Comprehensive technical solutions for complex business challenges",
      color: "#8b5cf6"
    },
    {
      icon: <FaUsersCog size={40} />,
      title: "Account Management",
      description: "Dedicated account management and customer success services",
      color: "#6366f1"
    }
  ];

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Empowering your digital transformation with comprehensive solutions
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard} style={{'--card-color': service.color} as React.CSSProperties}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.learnMore}>Learn More</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
