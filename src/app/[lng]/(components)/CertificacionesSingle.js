"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CertificacionesSingle({ endCount, prefix }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      if (count < endCount) setCount(count + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [count, endCount, inView]);

  return (
    <motion.div
      className="text-5xl font-bold mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      ref={ref}
    >
      {prefix} {count}
    </motion.div>
  );
}
