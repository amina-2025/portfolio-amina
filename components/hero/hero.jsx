"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";


export default function Hero() {
  const heroRef = useRef(null);
  const creativeRef = useRef(null);
  const developerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // CREATIVE
    tl.fromTo(
      creativeRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    // DEVELOPER
    tl.fromTo(
      developerRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.6"
    );

    return () => tl.kill();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <motion.header
        className="header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className="header-container">
          <motion.a href="/" className="logo" aria-label="Amina home" whileHover={{ scale: 1.04 }}>
            <Image
              src="/logo.png"
              alt="Amina logo"
              width={120}
              height={120}
              className="logo-image"
              priority
            />
          </motion.a>

          <nav className="nav">
  
            <motion.a href="#about" whileHover={{ y: -6 }}>
              About
            </motion.a>
            <motion.a href="#expertise" whileHover={{ y: -6 }}>
              Expertise
            </motion.a>
            <motion.a href="#work" whileHover={{ y: -6 }}>
              Work
            </motion.a>
            <motion.a href="#contact" whileHover={{ y: -6 }}>
              Contact
            </motion.a>
          </nav>

          <motion.a
            href="#contact"
            className="header-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s talk
          </motion.a>
        </div>
      </motion.header>

      <div className="hero-text">
        <h1 ref={creativeRef}>CREATIVE</h1>
        <h2 ref={developerRef}>Developer</h2>

        <motion.a
          href="#about"
          className="hero-scroll"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { duration: 0.7, delay: 1.4, ease: "easeOut" },
            y: { duration: 1.8, delay: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span aria-hidden="true">↓</span>
          <span>SCROLL TO EXPLORE</span>
        </motion.a>
      </div>
    </section>
  );
}