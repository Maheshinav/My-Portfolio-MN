/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './AboutMe.module.css';

const AboutMeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      backgroundPosition: '200% 50%',
      duration: 10,
      repeat: -1,
      ease: 'linear',
      yoyo: true
    });
  }, []);

  return (
    <section id="about-me" ref={sectionRef} className={styles.aboutMeSection}>
      <div className={styles.aboutMeContent}>
      <div className={styles.aboutMeContext}>
       <p>Maheshi Nawarathna</p>
       <h2>About</h2>
      </div>
       
        {/* More content */}
      </div>
    </section>
  );
};

export default AboutMeSection;
