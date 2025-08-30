"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Popover, Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi'; // ✅ react-icons
import styles from './navbar.module.css';

const services = [
  { name: 'Account Management', href: '/services/account-management' },
  { name: 'SEO Optimization', href: '/services/seo' },
  { name: 'App Development', href: '/services/app-development' },
  { name: 'Website Development', href: '/services/web-development' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className={styles.logo}>
              Anksquare
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link href="/">
              <motion.span whileHover={{ scale: 1.1 }} className={styles.navLink}>
                Home
              </motion.span>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={styles.servicesButton}>
                    Services
                  </Popover.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className={styles.servicesDropdown}>
                      <div>
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={styles.dropdownItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/about">
              <motion.span whileHover={{ scale: 1.1 }} className={styles.navLink}>
                About
              </motion.span>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.contactButton}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className={styles.mobileNav}>
            <Popover>
              {({ open }) => (
                <>
                  <Popover.Button className={styles.menuButton}>
                    {open ? (
                      <FiX className="h-6 w-6" />
                    ) : (
                      <FiMenu className="h-6 w-6" />
                    )}
                  </Popover.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel className={styles.mobileMenu}>
                      <div>
                        <Link href="/" className={styles.mobileMenuItem}>
                          Home
                        </Link>
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileMenuItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                        <Link href="/about" className={styles.mobileMenuItem}>
                          About
                        </Link>
                        <Link href="/contact" className={styles.mobileMenuItem}>
                          Contact
                        </Link>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;