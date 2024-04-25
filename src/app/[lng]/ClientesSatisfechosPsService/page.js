"use client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./Hero"));
const Somos = dynamic(() => import("./Somos"));
const Soluciones = dynamic(() => import("./Soluciones"));
const Contacto = dynamic(() => import("../(components)/Contacto"));

export default function Fabricacion() {
  const { t } = useTranslation("Clientes");
  const solucionesData = [
    {
      id: 0,

      title: t("Soluciones1"),
      points: t("Soluciones1Points"),
      colorChg: "bg-[#2E7D96]",
      bgImage:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/CLIENTES/CLIENTE_01.jpg",
    },
    {
      id: 1,

      title: t("Soluciones2"),
      points: t("Soluciones2Points"),
      colorChg: "bg-[#155E75]",
      bgImage:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/CLIENTES/CLIENTE_02.jpg",
    },
    {
      id: 2,

      title: t("Soluciones3"),
      points: t("Soluciones3Points"),
      colorChg: "bg-[#044053]",
      bgImage:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/CLIENTES/CLIENTE_03.jpg",
    },
  ];
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full mb-16 items-center justify-center">
        <Soluciones {...solucionesData[0]} />
        <Soluciones {...solucionesData[1]} />
        <Soluciones {...solucionesData[2]} />
      </div>

      {/* <Contacta t={t} /> */}
      <Contacto t={t} />
    </div>
  );
}
