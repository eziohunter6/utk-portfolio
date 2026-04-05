"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { getImageProps } from "next/image";

export default function Hands() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 80%"]
  })

  // movement
  const leftX = useTransform(scrollYProgress, [0, 0.7], ["-120%", "5%"]);
  const rightX = useTransform(scrollYProgress, [0, .7], ["120%", "-5%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // next/image optimization
  const { props: leftHandProps } = getImageProps({
    src: "/images/home/left-hand-dark.webp",
    alt: "Left hand",
    width: 1920,
    height: 1080,
    priority: true,
  });

  const { props: rightHandProps } = getImageProps({
    src: "/images/home/right-hand-dark.webp",
    alt: "Right hand",
    width: 1920,
    height: 1080,
    priority: true,
  });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
    >
      <div className="sticky top-0 h-[70vh] flex items-center justify-center w-full">

        {/* Left Hand */}
        <motion.img
          {...leftHandProps}
          style={{
            x: leftX,
            opacity,
            // border: "1px solid red"
          }}
          className="absolute inset-0"
        />

        {/* Right Hand */}
        <motion.img
          {...rightHandProps}
          style={{
            x: rightX,
            opacity,
            // border: "1px solid green"
          }}
          className="absolute inset-0"
        />

      </div>
    </section>
  );
}