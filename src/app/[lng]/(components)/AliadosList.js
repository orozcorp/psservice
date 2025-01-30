"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";

// Unified loading component for better consistency
const LoadingPlaceholder = () => <div className="w-12 h-12 border" />;

// Optimized dynamic imports with consistent loading state
const ALIADOS = {
  Scheider: dynamic(() => import("../../components/SVG/Aliados/AC_Scheider"), {
    loading: LoadingPlaceholder,
  }),
  Access: dynamic(() => import("../../components/SVG/Aliados/AC_Access"), {
    loading: LoadingPlaceholder,
  }),
  Daikin: dynamic(() => import("../../components/SVG/Aliados/AC_Daikin"), {
    loading: LoadingPlaceholder,
  }),
  XFusion: dynamic(() => import("../../components/SVG/Aliados/AC_XFusion"), {
    loading: LoadingPlaceholder,
  }),
  VMware: dynamic(() => import("../../components/SVG/Aliados/AC_VMware"), {
    loading: LoadingPlaceholder,
  }),
  Vertiv: dynamic(() => import("../../components/SVG/Aliados/AC_Vertiv"), {
    loading: LoadingPlaceholder,
  }),
  Uniflair: dynamic(() => import("../../components/SVG/Aliados/AC_Uniflair"), {
    loading: LoadingPlaceholder,
  }),
  Staco: dynamic(() => import("../../components/SVG/Aliados/AC_Staco"), {
    loading: LoadingPlaceholder,
  }),
  abb: dynamic(() => import("../../components/SVG/Aliados/AC_abb"), {
    loading: LoadingPlaceholder,
  }),
  Rittal: dynamic(() => import("../../components/SVG/Aliados/AC_Rittal"), {
    loading: LoadingPlaceholder,
  }),
  Pure: dynamic(() => import("../../components/SVG/Aliados/AC_Pure"), {
    loading: LoadingPlaceholder,
  }),
  PSS: dynamic(() => import("../../components/SVG/Aliados/AC_PSS"), {
    loading: LoadingPlaceholder,
  }),
  Net: dynamic(() => import("../../components/SVG/Aliados/AC_Net"), {
    loading: LoadingPlaceholder,
  }),
  Cisco: dynamic(() => import("../../components/SVG/Aliados/AC_Cisco"), {
    loading: LoadingPlaceholder,
  }),
  Mesa: dynamic(() => import("../../components/SVG/Aliados/AC_Mesa"), {
    loading: LoadingPlaceholder,
  }),
  Kohler: dynamic(() => import("../../components/SVG/Aliados/AC_Kohler"), {
    loading: LoadingPlaceholder,
  }),
  Jonix: dynamic(() => import("../../components/SVG/Aliados/AC_Jonix"), {
    loading: LoadingPlaceholder,
  }),
  Huawei: dynamic(() => import("../../components/SVG/Aliados/AC_Huawei"), {
    loading: LoadingPlaceholder,
  }),
  HP: dynamic(() => import("../../components/SVG/Aliados/AC_HP"), {
    loading: LoadingPlaceholder,
  }),
  Generac: dynamic(() => import("../../components/SVG/Aliados/AC_Generac"), {
    loading: LoadingPlaceholder,
  }),
  Fortinet: dynamic(() => import("../../components/SVG/Aliados/AC_Fortinet"), {
    loading: LoadingPlaceholder,
  }),
  Dell: dynamic(() => import("../../components/SVG/Aliados/AC_Dell"), {
    loading: LoadingPlaceholder,
  }),
  Uptime: dynamic(() => import("../../components/SVG/Aliados/AC_Uptime"), {
    loading: LoadingPlaceholder,
  }),
  Oracle: dynamic(() => import("../../components/SVG/Aliados/AC_Oracle"), {
    loading: LoadingPlaceholder,
  }),
};

export default function AliadosList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const components = [
    ALIADOS.Scheider,
    ALIADOS.Access,
    ALIADOS.Daikin,
    ALIADOS.XFusion,
    ALIADOS.VMware,
    ALIADOS.Vertiv,
    ALIADOS.Uniflair,
    ALIADOS.Staco,
    ALIADOS.abb,
    ALIADOS.Rittal,
    ALIADOS.Pure,
    ALIADOS.PSS,
    ALIADOS.Net,
    ALIADOS.Cisco,
    ALIADOS.Mesa,
    ALIADOS.Kohler,
    ALIADOS.Jonix,
    ALIADOS.Huawei,
    ALIADOS.HP,
    ALIADOS.Generac,
    ALIADOS.Fortinet,
    ALIADOS.Dell,
    ALIADOS.Uptime,
    ALIADOS.Oracle,
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
