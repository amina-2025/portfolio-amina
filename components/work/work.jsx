"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
  number: "01",
  title: "ScribeAcademy",
  category: "AI ACADEMIC PLATFORM",
  description:
    "A web platform that uses artificial intelligence to support academic work through academic translation, linguistic correction, and scientific proofreading.",
  image: "/scribe.png",
  url: "https://scribe-navy.vercel.app/",
},
  {
    number: "02",
    title: "Organiz",
    category: "WEB APPLICATION",
    description:
      "A private events platform focused on invitation-based event management.",
    image: "/organiz.png",
    url: "https://organiz-bice.vercel.app/",
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const title = titleRef.current;

    if (!section || !track || !title) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 901px)", () => {
        gsap.to(track, {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        gsap.to(title, {
          xPercent: -25,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=100%",
            scrub: 1.2,
          },
        });
      });

      mm.add("(max-width: 900px)", () => {
        gsap.utils.toArray(".project-card").forEach((card) => {
          gsap.from(card, {
            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          });
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work">
      <div className="work-stage">
        {/* SECTION HEADER */}
        <div className="work-top">
          <div className="work-label">
            <span>03</span>
            <span>My work</span>
          </div>

           <span className="work-count">SELECTED PROJECTS</span> 
        </div>

        {/* HUGE MOVING TITLE */}
         <div className="work-title-wrapper">
          <h2 ref={titleRef} className="work-title">
            Selected work.
          </h2>
        </div>

        {/* PROJECTS */}
        <div ref={trackRef} className="work-track">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              {/* PROJECT IMAGE */}
              <div className="project-visual">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />

                <div className="project-overlay">
                  <span>VIEW PROJECT</span>
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="project-info">
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-details">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.25 }}
                    className="project-link"
                  >
                    Visit project
                    <span>↗</span>
                  </motion.a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}