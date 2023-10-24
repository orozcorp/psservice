"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function SolucionSingle({ Icon, title, text, link }) {
  const router = useRouter();
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.3 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <div
        className="flex flex-col flex-nowrap justify-center items-center w-32 lg:w-48 h-48"
        onClick={() => router.push(link)}
      >
        <Icon width="100px" height="100px" />
        <p className="text-white dark:text-[#FFFFFF] text-lg my-4 font-bold">
          {title}
        </p>
        <p className="text-stone-300 dark:text-[#FFFFFF] text-sm font-bold">
          {text}
        </p>
      </div>
    </motion.button>
  );
}
