"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hello({ onComplete }) {
  const helloRef = useRef(null);

  useEffect(() => {
    const paths = helloRef.current.querySelectorAll("path");

    // إخفاء جميع المسارات في البداية
    paths.forEach((path) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    // رسم hello
  const animation = gsap.to(paths, {
  strokeDashoffset: 0,
  duration: 1.5,
  ease: "power1.inOut",
  stagger: 0.08,

  onComplete: () => {
    onComplete?.();
  },
});

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="hero">

      <svg
        ref={helloRef}
        className="hello"
        viewBox="0 0 700 250"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* h */}
        <path
          d="
            M 80 185
            C 88 145, 92 100, 102 58
            C 108 32, 120 24, 126 35
            C 130 43, 122 72, 116 98
            C 110 125, 105 155, 108 172

            C 118 145, 132 116, 148 112
            C 163 108, 166 124, 159 141
            C 153 155, 150 170, 160 176
          "
        />

        {/* e */}
        <path
          d="
            M 160 151
            C 174 126, 198 115, 213 124
            C 225 132, 216 145, 199 150
            C 184 155, 170 154, 160 151

            C 165 170, 184 181, 205 170
            C 213 166, 219 160, 224 154
          "
        />

        {/* l */}
        <path
          d="
            M 235 177
            C 241 139, 249 91, 258 54
            C 264 30, 273 24, 278 34
            C 283 45, 271 81, 264 111
            C 257 140, 251 164, 258 176
          "
        />

        {/* l */}
        <path
          d="
            M 280 176
            C 286 140, 294 91, 303 55
            C 309 32, 318 27, 323 37
            C 328 48, 316 84, 309 112
            C 302 142, 296 164, 303 176
          "
        />

        {/* o */}
        <path
          d="
            M 340 139
            C 350 118, 378 112, 393 126
            C 407 140, 400 164, 382 174
            C 363 184, 341 176, 337 158
            C 334 149, 336 143, 340 139

            C 348 127, 369 123, 384 130
          "
        />

        {/* final flourish */}
        <path
          d="
            M 382 174
            C 410 190, 445 186, 468 166
            C 480 155, 489 142, 496 128
          "
        />

      </svg>

    </section>
  );
}