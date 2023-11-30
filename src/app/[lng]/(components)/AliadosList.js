"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
const AC_Cisco = dynamic(() => import("./AliadosList"));
const AC_abb = dynamic(() => import("./AliadosList"));
const AC_Access = dynamic(() => import("./AliadosList"));
const AC_Daikin = dynamic(() => import("./AliadosList"));
const AC_XFusion = dynamic(() => import("./AliadosList"));
const AC_VMware = dynamic(() => import("./AliadosList"));
const AC_Vertiv = dynamic(() => import("./AliadosList"));
const AC_Uniflair = dynamic(() => import("./AliadosList"));
const AC_Staco = dynamic(() => import("./AliadosList"));
const AC_Scheider = dynamic(() => import("./AliadosList"));
const AC_Rittal = dynamic(() => import("./AliadosList"));
const AC_Pure = dynamic(() => import("./AliadosList"));
const AC_PSS = dynamic(() => import("./AliadosList"));
const AC_Net = dynamic(() => import("./AliadosList"));
const AC_Mesa = dynamic(() => import("./AliadosList"));
const AC_Kohler = dynamic(() => import("./AliadosList"));
const AC_Jonix = dynamic(() => import("./AliadosList"));
const AC_Huawei = dynamic(() => import("./AliadosList"));
const AC_HP = dynamic(() => import("./AliadosList"));
const AC_Generac = dynamic(() => import("./AliadosList"));
const AC_Fortinet = dynamic(() => import("./AliadosList"));
const AC_Dell = dynamic(() => import("./AliadosList"));
const AC_Uptime = dynamic(() => import("./AliadosList"));
const AC_Oracle = dynamic(() => import("./AliadosList"));

export default function AliadosList() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  const components = [
    AC_Scheider,
    AC_Access,
    AC_Daikin,
    AC_XFusion,
    AC_VMware,
    AC_Vertiv,
    AC_Uniflair,
    AC_Staco,
    AC_abb,
    AC_Rittal,
    AC_Pure,
    AC_PSS,
    AC_Net,
    AC_Cisco,
    AC_Mesa,
    AC_Kohler,
    AC_Jonix,
    AC_Huawei,
    AC_HP,
    AC_Generac,
    AC_Fortinet,
    AC_Dell,
    AC_Uptime,
    AC_Oracle,
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ rotate: inView ? 0 : 0, scale: inView ? 1 : 0 }}
      transition={{
        type: "tween",
        stiffness: 260,
        damping: 20,
        duration: 2,
      }}
      className="w-full grid grid-cols-6 grid-rows-4 gap-4 mt-8"
    >
      {components.map((Component, index) => (
        <div key={index} className="flex-1">
          <Component width="100%" height={60} />
        </div>
      ))}
    </motion.div>
  );
}
