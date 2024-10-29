"use client";
import { useTranslation } from "../../components/hooks/useTranslation";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./Hero"));
const Somos = dynamic(() => import("./Somos"));
const Hero2 = dynamic(() => import("./Hero2"));
const Hero3 = dynamic(() => import("./Hero3"));
const Conocimiento = dynamic(() => import("./Conocimiento"));
const Contacto = dynamic(() => import("../(components)/Contacto"));

export default function DataCenter() {
  const { t } = useTranslation("Aire");
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Conocimiento t={t} />
      {/* <Contacta t={t} /> */}
      <Contacto t={t} />
      <Hero3 t={t} />
    </div>
  );
}
