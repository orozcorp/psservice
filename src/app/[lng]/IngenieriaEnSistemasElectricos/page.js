"use client";
import { useTranslation } from "next-i18next";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Conocimiento from "./Conocimiento";
import Hero3 from "./Hero3";
import Contacto from "../(components)/Contacto";
export default function DataCenter() {
  const { t } = useTranslation("Energia");
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Conocimiento t={t} />
      <Contacto t={t} />
      <Hero3 t={t} />
    </div>
  );
}
