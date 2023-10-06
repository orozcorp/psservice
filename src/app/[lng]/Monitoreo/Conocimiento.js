import ConocimientoSingle from "./ConocimientoSingle";
import IC_MON_01 from "../../components/SVG/IC_MON_01";
import IC_MON_02 from "../../components/SVG/IC_MON_02";
import IC_MON_03 from "../../components/SVG/IC_MON_03";
import IC_MON_04 from "../../components/SVG/IC_MON_04";
import IC_MON_05 from "../../components/SVG/IC_MON_05";
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
    <div className="flex justify-center items-center min-h-[60vh] w-[95vw] mt-16">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl">
        <div className="w-full max-w-2xl text-[#324BA6] dark:text-[#0A2473] px-4 py-6">
          {/* <h2 className="text-2xl font-bold">{t("Conocimiento")}</h2>
          <p>{t("ConocimientoText")}</p> */}
          <h2 className="mt-4 text-2xl font-bold">{t("Servicios")}</h2>
          <ul className=" h-full mt-4">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
