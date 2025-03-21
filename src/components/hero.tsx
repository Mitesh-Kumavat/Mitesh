"use client";
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { PERSONAL_DETAILS } from "@/data/data";
import Connect from "./buttons/connect";

export function HeroSection() {

    const words = ["Full Stack Developer", "Passionate Coder", "Product Developer", "2nd Year Student"]

    return (
        <AuroraBackground >
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <h1 className="text-4xl leading-snug! md:text-5xl lg:text-6xl text-balance text-center font-semibold text-gradient-silver">
                    I help founders turn ideas
                    <br />
                    into seamless digital experiences
                </h1>
                <div className="font-medium text-center  text-xl md:text-2xl transition-all duration-300 py-4 text-gradient-black">
                    Hello, I&apos;m {PERSONAL_DETAILS.name} a <span className="text-white">Full Stack Developer</span> <br />
                </div>
                <Connect />
            </motion.div>
        </AuroraBackground>
    );
}