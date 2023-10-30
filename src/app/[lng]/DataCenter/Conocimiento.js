import ConocimientoSingle from "./ConocimientoSingle";
import Almacenamiento from "../../components/SVG/DataCenter/Almacenamiento";
import Redes from "../../components/SVG/DataCenter/Redes";
import SwitchesRouters from "../../components/SVG/DataCenter/SwitchesRouters";
import DesempenoRendimiento from "../../components/SVG/DataCenter/DesempenoRendimiento";
import Hiperconvergencia from "../../components/SVG/DataCenter/Hiperconvergencia";
import Gabinetes from "../../components/SVG/DataCenter/Gabinetes";
import Procesamiento from "../../components/SVG/DataCenter/Procesamiento";
import Microcentro from "../../components/SVG/DataCenter/Microcentro";
import Migracion from "../../components/SVG/DataCenter/Migracion";
import Link from "next/link";
import Virtualizacion from "../../components/SVG/DataCenter/Virtualizacion";
import Textura from "../(components)/Textura";
export default function Conocimiento({ t }) {
  const servicios = [
    {
      id: 1,
      service: t("S1"),
      Icon: Microcentro,
    },
    {
      id: 2,
      service: t("S2"),
      Icon: Almacenamiento,
    },
    {
      id: 3,
      service: t("S3"),
      Icon: DesempenoRendimiento,
    },
    {
      id: 4,
      service: t("S4"),
      Icon: Procesamiento,
    },
    {
      id: 5,
      service: t("S5"),
      Icon: Redes,
    },
    {
      id: 6,
      service: t("S6"),
      Icon: Migracion,
    },
    {
      id: 7,
      service: t("S7"),
      Icon: SwitchesRouters,
    },
    {
      id: 8,
      service: t("S8"),
      Icon: Hiperconvergencia,
    },
    {
      id: 9,
      service: t("S9"),
      Icon: Gabinetes,
    },
    {
      id: 10,
      service: t("S10"),
      Icon: Virtualizacion,
    },
  ];
  return (
    <div className="relative flex justify-center items-center  w-[100vw] mt-16 ">
      <div
        className="absolute top-0 left-0 bottom-0 z-0"
        style={{ width: "300px" }}
      >
        <Textura />
      </div>
      <div className="z-40 flex flex-row mx-4 lg:mx-0 flex-wrap items-center w-full p-4 lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE]  dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl my-4">
        <div className="w-full   text-[#0A2473] dark:text-[#0A2473] px-4 lg:px-8 py-6">
          <h2 className="mt-4 text-2xl font-bold">{t("Servicios")}</h2>
          <ul className=" h-full mt-4 mb-16">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
          <Link
            href="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/CV+PS+Service+2023_C.pdf"
            target="_blank"
            className="mt-8 focus:outline-none text-white bg-[#5D001D] hover:bg-red-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
          >
            Descargar catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
