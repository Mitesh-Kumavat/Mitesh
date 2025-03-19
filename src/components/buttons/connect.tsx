import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Drawer from "../drawer";

const Connect = () => {
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex items-center gap-2 border backdrop-blur-lg bg-white/10 border-white/10 shadow-2xl rounded-full w-fit py-1 px-2 cursor-pointer overflow-hidden"
            >
                <motion.div
                    initial={{ width: "20%", right: "0%" }}
                    animate={hovered ? { width: "100%", right: "0%" } : { width: "0%" }}
                    transition={{ type: "tween", duration: 0.15 }}
                    className="absolute top-0 h-full w-full bg-white rounded-l-full"
                />

                <motion.span
                    initial={{ color: "white" }}
                    animate={{ color: hovered ? "#2A2A2A" : "white" }}
                    transition={{ duration: 0.3, ease: "easeInOut", }}
                    className="relative px-1 font-medium text-balance text-base ml-1  z-10"
                >
                    Let&apos;s Connect
                </motion.span>

                <motion.span
                    className="relative p-2 rounded-full z-10"
                    animate={{
                        backgroundColor: hovered ? "#2a2a2a" : "white",
                        color: hovered ? "white" : "#1a1a1a",
                        rotate: hovered ? -40 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, }}
                >
                    <ArrowRight size={20} />
                </motion.span>
            </motion.button>

            {isOpen && <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default Connect;
