"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => 1 - Math.pow(1 - t, 1),
            lerp: 0.1,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default LenisProvider;
