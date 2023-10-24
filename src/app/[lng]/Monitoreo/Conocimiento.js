import ConocimientoSingle from "./ConocimientoSingle";
import IC_MON_01 from "../../components/SVG/IC_MON/IC_MON_01";
import IC_MON_02 from "../../components/SVG/IC_MON/IC_MON_02";
import IC_MON_03 from "../../components/SVG/IC_MON/IC_MON_03";
import IC_MON_04 from "../../components/SVG/IC_MON/IC_MON_04";
import IC_MON_05 from "../../components/SVG/IC_MON/IC_MON_05";
import Link from "next/link";
export default function Conocimiento({ t }) {
  const servicios = [
    {
      id: 1,
      service: t("S1"),
      icon: IC_MON_05,
    },
    {
      id: 2,
      service: t("S2"),
      icon: IC_MON_02,
    },
    {
      id: 3,
      service: t("S3"),
      icon: IC_MON_03,
    },
    {
      id: 4,
      service: t("S4"),
      icon: IC_MON_04,
    },
    {
      id: 5,
      service: t("S5"),
      icon: IC_MON_01,
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
