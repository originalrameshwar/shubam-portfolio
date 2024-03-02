"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a degree in{" "}
  <span className="font-medium">Accounting</span>, my passion for programming led me
  to make a career shift. I decided to dive into the world of{" "}
  <span className="font-medium">full-stack web development</span> by enrolling in a coding
  bootcamp. The aspect of problem-solving in programming captivates me the most, and
  there's nothing quite like the satisfaction of unraveling a complex issue. My core
  stack revolves around{" "}
  <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I'm also
  well-versed in TypeScript and Prisma, always eager to explore and adopt new
  technologies. Currently on the lookout for a{" "}
  <span className="font-medium">full-time position</span> as a software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, my interests include playing
  video games, watching movies, and exploring realms of{" "}
  <span className="font-medium">cinematography & the creative field</span>. I also
  enjoy watching web series, adding an extra dimension to my entertainment.
  Additionally, I have a keen eye for design and aesthetics, believing that a strong
  understanding of the creative aspects complements the technical skills in web
  development. This interdisciplinary approach allows me to bring a unique
  perspective to my work.
</p>

    </motion.section>
  );
}
