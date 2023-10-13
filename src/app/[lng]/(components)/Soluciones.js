import SOL_ENERGIA from "../../components/SVG/SOL_Land/SOL_ENERGIA";
import SOL_SOPORTE from "../../components/SVG/SOL_Land/SOL_SOPORTE";
import SOL_FAB from "../../components/SVG/SOL_Land/SOL_FAB";
import SolAire from "../../components/SVG/SOL_Land/SolAire";
import SOL_SALUD from "../../components/SVG/SOL_Land/SOL_SALUD";
import SOL_MONITOREO from "../../components/SVG/SOL_Land/SOL_MONITOREO";
import SOL_INFRA from "../../components/SVG/SOL_Land/SOL_INFRA";
import SolucionSingle from "./SolucionSingle";
import Link from "next/link";
export default function Soluciones({ t }) {
  const Soluciones = [
    {
      id: 3,
      Icon: SOL_INFRA,
      title: t("Sol4Title"),
      text: t("Sol4Text"),
      link: "/TecnologiaDeInformacion",
    },
    {
      id: 0,
      Icon: SOL_ENERGIA,
      title: t("Sol1Title"),
      text: t("Sol1Text"),
      link: "/Energia",
    },
    {
      id: 5,
      Icon: SolAire,
      title: t("Sol6Title"),
      text: t("Sol6Text"),
      link: "/AiresAcondicionados",
    },
    {
      id: 4,
      Icon: SOL_MONITOREO,
      title: t("Sol5Title"),
      text: t("Sol5Text"),
      link: "/Monitoreo",
    },
    {
      id: 2,
      Icon: SOL_FAB,
      title: t("Sol3Title"),
      text: t("Sol3Text"),
      link: "/Fabricacion",
    },
    {
      id: 1,
      Icon: SOL_SOPORTE,
      title: t("Sol2Title"),
      text: t("Sol2Text"),
      link: "/Soporte",
    },

    {
      id: 6,
      Icon: SOL_SALUD,
      title: t("Sol7Title"),
      text: t("Sol7Text"),
      link: "/TecnologiaMedica",
    },
  ];
  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center"
      id="Servicios"
    >
      <div
        className="flex flex-row flex-wrap justify-center md:justify-end my-8 bg-[#155E75] dark:bg-inherit rounded-3xl py-8 "
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center justify-center md:justify-start w-full md:w-[73vw]   ">
          <div className="w-[90%]  flex flex-col flex-nowrap ">
            <div className="w-full lg:w-3/4 py-4  text-left lg:text-justify ">
              <h2 className="w-full text-white dark:text-[#fff] text-3xl lg:text-5xl font-bold">
                {t("Hero4")}
              </h2>
              <p className="text-2xl font-bold mb-8 text-white dark:text-[#fff]">
                {t("Hero4Sub")}
              </p>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row flex-nowrap justify-center items-center content-center lg:justify-between lg:flex-wrap gap-4 md:gap-8 w-full justify-self-center self-center place-self-center">
              {Soluciones.map((solucion, index) => (
                <SolucionSingle key={index} {...solucion} />
              ))}
              <div className="h-48 w-48 flex flex-col flex-nowrap justify-center items-center ">
                <Link
                  href="/Soporte"
                  className="py-2 px-4 bg-[#5D001D] dark:bg-[#AEC8F8] text-white dark:text-[#0A2473] self-center rounded "
                >
                  {t("Leer")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
