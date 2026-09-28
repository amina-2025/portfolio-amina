"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Email",
    href:"https://mail.google.com/mail/?view=cm&fs=1&to=mansouriamina915@gmail.com",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594806995324",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/0x._amina?stkn=MXhhMWlyZ2M2bXA1OA==",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amina-amina-3b090b402?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "GitHub",
    href: "https://github.com/amina-2025",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* =================================
            SECTION LABEL
        ================================= */}

        <motion.div
          className="contact-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span>04</span>
          <span>CONTACT</span>
        </motion.div>

        {/* =================================
            MAIN CONTENT
        ================================= */}

        <div className="contact-content">

          {/* TITLE */}

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            LET&apos;S
            <br />
            <span>WORK</span>
            <br />
            TOGETHER.
          </motion.h2>

          {/* DESCRIPTION + EMAIL */}

          <motion.div
            className="contact-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <p className="contact-description">
              Have a project in mind?
              <br />
              Let&apos;s turn your idea into something digital.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mansouriamina915@gmail.com"
              className="contact-email"
            >
            mansouriamina915@gmail.com
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* =================================
            SOCIAL LINKS
        ================================= */}

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
        >
          {socialLinks.map((link) => {
            const isExternal = link.name !== "Email";

            return (
              <a
                key={link.name}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={
                  isExternal
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <span>{link.name}</span>
                <span className="contact-arrow">↗</span>
              </a>
            );
          })}
        </motion.div>

        {/* =================================
            FOOTER
        ================================= */}

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <span>© 0x — AMINA</span>

          <span>FULL-STACK DEVELOPER</span>

          <span>ALGERIA</span>
        </motion.div>

      </div>
    </section>
  );
}