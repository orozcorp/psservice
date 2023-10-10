"use client";
import { motion } from "framer-motion";
export default function SolucionSingle({ Icon, title, text }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.3 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
        <Icon width="100px" height="100px" />
        <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
          {title}
        </p>
        <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
          {text}
        </p>
      </div>
    </motion.button>
  );
}
