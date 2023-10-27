import SOL_ENERGIA from "../../components/SVG/SOL_Land/SOL_ENERGIA";
import SOL_SOPORTE from "../../components/SVG/SOL_Land/SOL_SOPORTE";
import SOL_FAB from "../../components/SVG/SOL_Land/SOL_FAB";
import SolAire from "../../components/SVG/SOL_Land/SolAire";
import SOL_SALUD from "../../components/SVG/SOL_Land/SOL_SALUD";
import SOL_MONITOREO from "../../components/SVG/SOL_Land/SOL_MONITOREO";
import SOL_INFRA from "../../components/SVG/SOL_Land/SOL_INFRA";
import SolucionSingle from "./SolucionSingle";
import Textura from "./Textura";
export default function Soluciones({ t }) {
  const Soluciones = [
    {
      id: 3,
      Icon: SOL_INFRA,
      title: t("Sol4Title"),
      text: t("Sol4Text"),
      link: "/DataCenter",
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
      className="relative flex flex-col flex-nowrap w-full justify-center items-center"
      id="Servicios"
    >
      <div
        className="relative flex flex-row flex-wrap justify-center lg:justify-end my-8 bg-[#155E75] dark:bg-inherit rounded-3xl py-8 w-[95vw]"
        style={{ minHeight: "60vh" }}
      >
        <div
          className="absolute top-0 left-0 bottom-0 z-10  ]"
          style={{ width: "300px" }}
        >
          <Textura />
        </div>
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-[73vw]">
          <div className="w-[90%]  flex flex-col flex-nowrap ">
            <div className="w-full lg:w-3/4 py-4  text-left lg:text-justify  p-6 lg:p-0">
              <h2 className="w-full text-white dark:text-[#fff] text-3xl lg:text-5xl font-bold">
                {t("Hero4")}
              </h2>
              <p className="text-2xl font-bold mb-8 text-white dark:text-[#fff]">
                {t("Hero4Sub")}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full justify-self-center self-center place-self-center my-8">
              {Soluciones.slice(0, 4).map((solucion, index) => (
                <SolucionSingle key={index} {...solucion} />
              ))}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full justify-self-center self-center place-self-center my-8">
              {Soluciones.slice(4).map((solucion, index) => (
                <SolucionSingle key={index} {...solucion} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
