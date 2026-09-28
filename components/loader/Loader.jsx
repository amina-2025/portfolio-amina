"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline();

    // 0% → 100%
    tl.to(counter, {
      value: 100,
      duration: 3,
      ease: "none",

      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.floor(counter.value) + "%";
        }
      },
    });

    // إخفاء Loading
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",

      onComplete: () => {
        gsap.set(loaderRef.current, {
          display: "none",
        });

        // إخبار page أن Loading انتهى
        onComplete?.();
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader"
    >
      <div
        ref={counterRef}
        className="counter"
      >
        0%
      </div>
    </div>
  );
}