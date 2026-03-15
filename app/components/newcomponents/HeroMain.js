"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import CloudinaryImage from "./CloudinaryImage";

export default function HeroMain() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hm-tag",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          ".hm-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.2"
        )
        .fromTo(
          ".hm-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".hm-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        )
        .fromTo(
          ".hm-image",
          { opacity: 0, scale: 0.8, x: 50 },
          { opacity: 1, scale: 1, x: 0, duration: 1.2, ease: "power4.out" },
          "-=1"
        );



      // Button hover
      const btns = sectionRef.current?.querySelectorAll(".hm-btn") || [];
      btns.forEach((btn) => {
        btn.addEventListener("mouseenter", () =>
          gsap.to(btn, { y: -2, duration: 0.2, overwrite: "auto" })
        );
        btn.addEventListener("mouseleave", () =>
          gsap.to(btn, { y: 0, duration: 0.2, overwrite: "auto" })
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden min-h-[calc(100vh-64px)] flex items-center"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #354B62 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Decorative gradient blob - REMOVED per user request */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          {/* Left content (Swapped to Left) */}
          <div className="space-y-6 md:space-y-7 z-10 text-center lg:text-left order-1">


            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3.2rem] font-extrabold text-[#1e3347] leading-[1.2] md:leading-[1.15] tracking-tight">
                <span className="hm-title block">Never Let a Valid</span>
                <span className="hm-title block mt-1">Health Claim Get</span>
                <span className="hm-title block mt-1 pb-2 bg-gradient-to-r from-[#27A395] to-[#33A8D3] bg-clip-text text-transparent">
                  Rejected Again.
                </span>
              </h1>
            </div>

            {/* Sub */}
            <p className="hm-sub text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Take control of your healthcare journey with AI-driven insights
              and dedicated advocacy. We ensure your claims are handled with the
              care, clarity, and speed you deserve.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 justify-center lg:justify-start">
              <Link href="/signup">
                <button className="hm-btn w-full sm:w-auto bg-[#354B62] hover:bg-[#2C3E50] text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold text-[14px] md:text-[15px] inline-flex flex-col items-center justify-center shadow-lg shadow-[#354B62]/20 transition-colors duration-200">
                  <span className="text-sm md:text-base font-bold">Protect My Family</span>
                  <span className="text-[10px] md:text-xs text-white/70 font-normal">
                    (Individuals)
                  </span>
                </button>
              </Link>
              <Link href="/signup">
                <button className="hm-btn w-full sm:w-auto bg-[#27A395] hover:bg-[#229188] text-white px-6 md:px-7 py-3 md:py-4 rounded-xl font-semibold text-[14px] md:text-[15px] inline-flex flex-col items-center justify-center shadow-lg shadow-[#27A395]/25 transition-colors duration-200">
                  <span className="text-sm md:text-base font-bold">
                    Optimize My Hospital
                  </span>
                  <span className="text-[10px] md:text-xs text-white/70 font-normal">
                    (Providers)
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image (Swapped to Right) */}
          <div className="relative flex justify-center lg:justify-end z-10 order-2">
            {/* Soft ambient glow instead of a structured ring */}
            <div className="absolute inset-0 m-auto w-[110%] h-[110%] bg-gradient-to-br from-[#27A395]/10 to-[#33A8D3]/5 blur-3xl pointer-events-none" />

            <div className="hm-image relative w-full lg:max-w-[680px]">
              <CloudinaryImage
                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773569747/c1_volllf.png"
                alt="Healthcare team of doctors"
                width={680}
                height={550}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
