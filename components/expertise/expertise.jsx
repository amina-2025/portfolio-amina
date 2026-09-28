"use client";

import { motion } from "framer-motion";

const expertise = [
  {
    number: "01",
    title: "FRONT-END",
    description:
      "Creating modern and responsive interfaces with a focus on user experience.",
    skills: ["HTML / CSS", "JavaScript", "React.js", "Next.js"],
  },

  {
    number: "02",
    title: "BACK-END",
    description:
      "Building complete web applications from the server side to the API.",
    skills: ["Node.js", "Express.js", "Django", "Python"],
  },

  {
    number: "03",
    title: "TOOLS",
    description:
      "Using essential development tools to build and manage web projects.",
    skills: ["Git", "GitHub", "REST API", "VS Code"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="expertise">

      <div className="expertise-container">

        {/* HEADER */}
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-number">02</span>
          <span>EXPERTISE</span>
        </motion.div>


        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          WHAT I
          <br />
          <span>DO.</span>
        </motion.h2>


        {/* CARDS */}
        <div className="expertise-list">

          {expertise.map((item, index) => (
            <motion.article
              key={item.number}
              className="expertise-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <div className="expertise-number">
                {item.number}
              </div>

              <div className="expertise-main">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <div className="expertise-skills">

                {item.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </motion.article>
          ))}

        </div>

      </div>

    </section>
  );
}
