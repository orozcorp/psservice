"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

const AC_Cisco = dynamic(() => import("../../components/SVG/Aliados/AC_Cisco"));
const AC_abb = dynamic(() => import("../../components/SVG/Aliados/AC_abb"));
const AC_Access = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Access")
);
const AC_Daikin = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Daikin")
);
const AC_XFusion = dynamic(() =>
  import("../../components/SVG/Aliados/AC_XFusion")
);
const AC_VMware = dynamic(() =>
  import("../../components/SVG/Aliados/AC_VMware")
);
const AC_Vertiv = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Vertiv")
);
const AC_Uniflair = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Uniflair")
);
const AC_Staco = dynamic(() => import("../../components/SVG/Aliados/AC_Staco"));
const AC_Scheider = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Scheider")
);
const AC_Rittal = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Rittal")
);
const AC_Pure = dynamic(() => import("../../components/SVG/Aliados/AC_Pure"));
const AC_PSS = dynamic(() => import("../../components/SVG/Aliados/AC_PSS"));
const AC_Net = dynamic(() => import("../../components/SVG/Aliados/AC_Net"));
const AC_Mesa = dynamic(() => import("../../components/SVG/Aliados/AC_Mesa"));
const AC_Kohler = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Kohler")
);
const AC_Jonix = dynamic(() => import("../../components/SVG/Aliados/AC_Jonix"));
const AC_Huawei = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Huawei")
);
const AC_HP = dynamic(() => import("../../components/SVG/Aliados/AC_HP"));
const AC_Generac = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Generac")
);
const AC_Fortinet = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Fortinet")
);
const AC_Dell = dynamic(() => import("../../components/SVG/Aliados/AC_Dell"));
const AC_Uptime = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Uptime")
);
const AC_Oracle = dynamic(() =>
  import("../../components/SVG/Aliados/AC_Oracle")
);

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
