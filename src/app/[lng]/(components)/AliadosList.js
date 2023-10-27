"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AC_Cisco from "../../components/SVG/Aliados/AC_Cisco";
import AC_abb from "../../components/SVG/Aliados/AC_abb";
import AC_Access from "../../components/SVG/Aliados/AC_Access";
import AC_Daikin from "../../components/SVG/Aliados/AC_Daikin";
import AC_XFusion from "../../components/SVG/Aliados/AC_XFusion";
import AC_VMware from "../../components/SVG/Aliados/AC_VMware";
import AC_Vertiv from "../../components/SVG/Aliados/AC_Vertiv";
import AC_Uniflair from "../../components/SVG/Aliados/AC_Uniflair";
import AC_Staco from "../../components/SVG/Aliados/AC_Staco";
import AC_Scheider from "../../components/SVG/Aliados/AC_Scheider";
import AC_Rittal from "../../components/SVG/Aliados/AC_Rittal";
import AC_Pure from "../../components/SVG/Aliados/AC_Pure";
import AC_PSS from "../../components/SVG/Aliados/AC_PSS";
import AC_Net from "../../components/SVG/Aliados/AC_Net";
import AC_Mesa from "../../components/SVG/Aliados/AC_Mesa";
import AC_Kohler from "../../components/SVG/Aliados/AC_Kohler";
import AC_Jonix from "../../components/SVG/Aliados/AC_Jonix";
import AC_Huawei from "../../components/SVG/Aliados/AC_Huawei";
import AC_HP from "../../components/SVG/Aliados/AC_HP";
import AC_Generac from "../../components/SVG/Aliados/AC_Generac";
import AC_Fortinet from "../../components/SVG/Aliados/AC_Fortinet";
import AC_Dell from "../../components/SVG/Aliados/AC_Dell";
import AC_Uptime from "../../components/SVG/Aliados/AC_Uptime";
import AC_Oracle from "../../components/SVG/Aliados/AC_Oracle";
export default function AliadosList() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want to trigger again whenever it comes in view
  });
  const components = [
    AC_abb,
    AC_Access,
    AC_Daikin,
    AC_XFusion,
    AC_VMware,
    AC_Vertiv,
    AC_Uniflair,
    AC_Staco,
    AC_Scheider,
    AC_Rittal,
    AC_Pure,
    AC_PSS,
    AC_Net,
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
      className="w-full grid grid-cols-4 grid-rows-6 gap-4 mt-8"
    >
      {components.map((Component, index) => (
        <div key={index} className="flex-1">
          <Component width="100%" height={60} />
        </div>
      ))}
    </motion.div>
  );
}
