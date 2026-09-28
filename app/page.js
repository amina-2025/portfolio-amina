"use client";

import { useState } from "react";

import Loader from "@/components/loader/Loader";
import Hello from "@/components/intro/hello";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Expertise from "@/components/expertise/expertise";
import Work from "@/components/work/work";
import Contact from "@/components/contact/contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showHello, setShowHello] = useState(false);
  const [showHero, setShowHero] = useState(false);

  return (
    <main>

      {/* LOADER */}
      {loading && (
        <Loader
          onComplete={() => {
            setLoading(false);
            setShowHello(true);
          }}
        />
      )}

      {/* HELLO */}
      {showHello && (
        <Hello
          onComplete={() => {
            setShowHello(false);
            setShowHero(true);
          }}
        />
      )}

      {/* HERO + ABOUT */}
      {showHero && (
        <>
          <Hero />
          <About />
          <Expertise />
          <Work />
          <Contact />
        </>
      )}

    </main>
  );
}

