"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { learnSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function LearnSkills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Learning ..</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {learnSkillsData.map((learnSkil, index) => (
          <motion.li
          style={{background: 'linear-gradient(89.7deg, #ec4899 -10.7%, #db2777 88.8%)',
        userSelect: 'none',}}
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 text-white/80 dark:border-cyan-800 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{
                scale: 1.1,
                transition: { duration: .1 },
              }}
            custom={index}
          >
            {learnSkil}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
