import React from "react";
import { motion } from "framer-motion";

export default function Offer() {
  return (
<div className="bg-[#020618]">
      <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex items-center justify-center py-8 px-6"
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 25px rgba(34,211,238,0.25)",
        }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl text-center border border-cyan-500/30 rounded-2xl
                   backdrop-blur-md bg-[rgba(2,6,24,0.6)] p-6 md:p-8
                   hover:border-cyan-400/50 transition-all duration-300"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-100 text-xl md:text-2xl font-semibold leading-snug"
        >
          <span className="text-cyan-400 text-3xl font-serif mr-2">“</span>
          He builds products so good, you'd feel stupid saying no.
          <span className="text-cyan-400 text-3xl font-serif ml-2">”</span>
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
        />
      </motion.div>
    </motion.div>
  </div>
  );
}