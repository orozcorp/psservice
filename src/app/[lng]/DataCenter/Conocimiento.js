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
      Icon: Almacenamiento,
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-[100vw] mt-16">
      <div className="flex flex-row mx-4 md:mx-0 flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE]  dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl">
        <div className="w-full   text-[#0A2473] dark:text-[#0A2473] px-4 md:px-16 py-12">
          {/* <h2 className="text-2xl font-bold">{t("Conocimiento")}</h2>
          <p>{t("ConocimientoText")}</p> */}
          <h2 className="mt-4 text-2xl font-bold">{t("Servicios")}</h2>
          <ul className="grid grid-cols-2 h-[295px] mt-4">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
          <button className="mt-16 px-6 rounded py-2 bg-[#324BA6] text-white">
            {t("Descarga")}
          </button>
        </div>
      </div>
    </div>
  );
}
