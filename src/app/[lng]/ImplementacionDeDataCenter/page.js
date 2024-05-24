"use client";
import { useTranslation } from "next-i18next";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Conocimiento from "./Conocimiento";
import Contacta from "./Contacta";
import Contacto from "../(components)/Contacto";
import Hero3 from "./Hero3";
export default function DataCenter() {
  const { t } = useTranslation("DataCenter");
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
