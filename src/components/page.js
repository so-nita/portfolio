"use client";

import { useScroll, motion } from "framer-motion";

export default function Page() {
  const { scrollYProgress } = useScroll();  
    return (
        <motion.div
            style={{
            scaleX: scrollYProgress,  
            transformOrigin: "left",
            background: "#8b5cf6",
            position: "sticky",
            top: 10,
            width: "100%",
            height: "10px",
            borderRadius: "20px",
            }}
        />
    )
}