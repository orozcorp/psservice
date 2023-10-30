import Textura from "./Textura";
import SolucionesDisplay from "./SolucionesDisplay";
export default function Soluciones({ t }) {
  const Soluciones = [
    {
      id: 3,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/Infraestructura+TI.png",
      title: t("Sol4Title"),
      text: t("Sol4Text"),
      link: "/DataCenter",
    },
    {
      id: 0,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/energia.png",
      title: t("Sol1Title"),
      text: t("Sol1Text"),
      link: "/Energia",
    },
    {
      id: 5,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/AC.png",
      title: t("Sol6Title"),
      text: t("Sol6Text"),
      link: "/AiresAcondicionados",
    },
    {
      id: 4,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/monitoreo.png",
      title: t("Sol5Title"),
      text: t("Sol5Text"),
      link: "/Monitoreo",
    },
    {
      id: 2,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/Fabricacion.png",
      title: t("Sol3Title"),
      text: t("Sol3Text"),
      link: "/Fabricacion",
    },
    {
      id: 1,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/soporte+copia+2.png",
      title: t("Sol2Title"),
      text: t("Sol2Text"),
      link: "/Soporte",
    },

    {
      id: 6,
      image:
        "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/medica.png",
      title: t("Sol7Title"),
      text: t("Sol7Text"),
      link: "/TecnologiaMedica",
    },
  ];
  return (
    <div
      className="relative flex flex-col flex-nowrap w-full justify-center items-center "
      id="Servicios"
    >
      <div
        className="absolute top-0 left-0 bottom-0 z-0  ]"
        style={{ width: "300px" }}
      >
        <Textura />
      </div>
      <div
        className="relative flex flex-row flex-wrap justify-center lg:justify-end my-8 bg-[#155E75] dark:bg-inherit rounded-3xl py-8 w-[95vw] z-40"
        style={{ minHeight: "60vh" }}
      >
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
            <SolucionesDisplay Soluciones={Soluciones} />
          </div>
        </div>
      </div>
    </div>
  );
}
