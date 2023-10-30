import { useTranslation } from "../../i18n";
import Hero from "./Hero";
import Somos from "./Somos";
import Soluciones from "./Soluciones";
import Icon1 from "../../components/SVG/TecnologiaMed/Icon1";
import Icon2 from "../../components/SVG/TecnologiaMed/Icon2";
import Icon3 from "../../components/SVG/TecnologiaMed/Icon3";
import Image from "next/image";
import Contacta from "./Contacta";
import Contacto from "../(components)/Contacto";
import ImageChg from "../../components/atoms/ImageChg";
export default async function Fabricacion({ params: { lng } }) {
  const { t } = await useTranslation(lng, "TecnologiaMedica");
  const solucionesData = [
    {
      id: 0,
      Icon: Icon1,
      title: t("Soluciones1"),
      points: t("Soluciones1Points"),
      colorChg: "bg-[#2E7D96]",
    },
    {
      id: 1,
      Icon: Icon2,
      title: t("Soluciones2"),
      points: t("Soluciones2Points"),
      colorChg: "bg-[#155E75]",
    },
    {
      id: 2,
      Icon: Icon3,
      title: t("Soluciones3"),
      points: t("Soluciones3Points"),
      colorChg: "bg-[#044053]",
    },
  ];
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full mb-16">
        {solucionesData.map((solucion, index) => (
          <Soluciones key={index} {...solucion} />
        ))}
      </div>
      <div
        className="relative flex justify-center lg:justify-end items-center min-h-[60vh] w-[100vw]"
        style={{ zIndex: 1 }}
      >
        <ImageChg
          imgMovil="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/tecMed_MID_mobile.jpg"
          img="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/TEC+MEDICA/mid+content.jpg"
        />
      </div>
      {/* <Contacta t={t} /> */}
      <Contacto t={t} />
    </div>
  );
}
