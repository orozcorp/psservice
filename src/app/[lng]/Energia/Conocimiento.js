import ConocimientoSingle from "./ConocimientoSingle";
import IC_EN_01 from "../../components/SVG/IC_EN/IC_EN_01";
import IC_EN_02 from "../../components/SVG/IC_EN/IC_EN_02";
import IC_EN_03 from "../../components/SVG/IC_EN/IC_EN_03";
import IC_EN_04 from "../../components/SVG/IC_EN/IC_EN_04";
import IC_EN_05 from "../../components/SVG/IC_EN/IC_EN_05";
import IC_EN_06 from "../../components/SVG/IC_EN/IC_EN_06";
import IC_EN_07 from "../../components/SVG/IC_EN/IC_EN_07";
import IC_EN_08 from "../../components/SVG/IC_EN/IC_EN_08";
import IC_EN_09 from "../../components/SVG/IC_EN/IC_EN_09";
import IC_EN_10 from "../../components/SVG/IC_EN/IC_EN_10";
import IC_EN_11 from "../../components/SVG/IC_EN/IC_EN_11";
import IC_EN_12 from "../../components/SVG/IC_EN/IC_EN_12";
import IC_EN_13 from "../../components/SVG/IC_EN/IC_EN_13";
import IC_EN_14 from "../../components/SVG/IC_EN/IC_EN_14";
import IC_Fuerza from "../../components/SVG/IC_EN/IC_Fuerza";
import IC_Calidad from "../../components/SVG/IC_EN/IC_Calidad";
import Link from "next/link";
export default function Conocimiento({ t }) {
  const servicios = [
    {
      id: 1,
      service: t("S1"),
      icon: IC_EN_01,
    },
    {
      id: 2,
      service: t("S2"),
      icon: IC_EN_02,
    },
    {
      id: 3,
      service: t("S3"),
      icon: IC_EN_03,
    },
    {
      id: 4,
      service: t("S4"),
      icon: IC_EN_04,
    },
    {
      id: 5,
      service: t("S5"),
      icon: IC_EN_05,
    },
    {
      id: 6,
      service: t("S6"),
      icon: IC_EN_06,
    },
    {
      id: 7,
      service: t("S7"),
      icon: IC_EN_07,
    },
    {
      id: 8,
      service: t("S8"),
      icon: IC_EN_08,
    },
    {
      id: 9,
      service: t("S9"),
      icon: IC_EN_09,
    },
    {
      id: 10,
      service: t("S10"),
      icon: IC_EN_10,
    },
    {
      id: 15,
      service: t("S15"),
      icon: IC_Calidad,
    },
    {
      id: 11,
      service: t("S11"),
      icon: IC_EN_11,
    },
    {
      id: 12,
      service: t("S12"),
      icon: IC_EN_12,
    },
    {
      id: 13,
      service: t("S13"),
      icon: IC_EN_13,
    },
    {
      id: 14,
      service: t("S14"),
      icon: IC_Fuerza,
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-[100vw] mt-16">
      <div className="flex flex-row mx-4 lg:mx-0 flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE]  dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl">
        <div className="w-full   text-[#0A2473] dark:text-[#0A2473] px-4 lg:px-16 py-12">
          <h2 className="text-2xl font-bold">{t("Conocimiento")}</h2>
          <p>{t("ConocimientoText")}</p>
          <ul className=" h-full mt-4  mb-16">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
          <Link
            href="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/CV+PS+Service+2023_C.pdf"
            target="_blank"
            className="mt-8 focus:outline-none text-white bg-[#5D001D] hover:bg-red-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Descargar catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
