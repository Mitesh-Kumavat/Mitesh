"use client";
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import { PERSONAL_DETAILS } from "@/data/data";

export function HeroSection() {

    const words = ["Full Stack Developer", "Passionate Coder", "Product Developer", "2nd Year Student"]

    return (
        <AuroraBackground>
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
                    Hello, I'm {PERSONAL_DETAILS.name} a  <FlipWords words={words} /> <br />
                </div>
                <button className="bg-zinc-100/20 hover:bg-white hover:text-black border-1/2 border-white backdrop-blur-lg shadow-2xl flex gap-2 justify-center items-center rounded-full w-fit text-white py-1 px-2 cursor-pointer">
                    <span className="px-1 font-medium ml-1 ">Let's Connect</span>
                    <span className="p-2 bg-zinc-100 rounded-full font-extrabold text-black"><ArrowRight /></span>
                </button>
            </motion.div>
        </AuroraBackground>
    );
}