"use client";
import { useTranslation } from "../../components/hooks/useTranslation";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Conocimiento from "./Conocimiento";
import Contacto from "../(components)/Contacto";
import Hero3 from "./Hero3";
export default function DataCenter() {
  const { t } = useTranslation("Monitoreo");
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
