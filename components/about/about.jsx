"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* TOP */}
        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>01</span>
          <span>ABOUT ME</span>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className="about-content">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            I BUILD DIGITAL
            <br />
            <span>EXPERIENCES.</span>
          </motion.h2>


          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p>
              I'm Amina, a Full-Stack Developer passionate about
              creating complete web applications — from the interface
              to the server.
            </p>

            <p>
              I enjoy learning new technologies, solving problems,
              and turning ideas into functional and modern digital
              experiences.
            </p>

            <motion.a
              href="#work"
              className="about-link"
              whileHover={{ y: -6 }}
            >
              Explore my work →
            </motion.a>
          </motion.div>

        </div>


        {/* INFO */}
        <motion.div
          className="about-info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >

          <div>
            <span>ROLE</span>
            <p>Full-Stack Developer</p>
          </div>

          <div>
            <span>FRONT-END</span>
            <p>React.js · Next.js</p>
          </div>

          <div>
            <span>BACK-END</span>
            <p>Node.js · Express.js · Django · Python</p>
          </div>

          <div>
            <span>TOOLS</span>
            <p>Git · GitHub · REST API</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

