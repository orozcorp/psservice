"use client";
const solutionsConfig = [
  {
    id: 3,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/Infraestructura+TI.png",
    titleKey: "Sol4Title",
    textKey: "Sol4Text",
    link: "/ImplementacionDeDataCenter",
  },
  {
    id: 0,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/energia.png",
    titleKey: "Sol1Title",
    textKey: "Sol1Text",
    link: "/IngenieriaEnSistemasElectricos",
  },
  {
    id: 5,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/AC.png",
    titleKey: "Sol6Title",
    textKey: "Sol6Text",
    link: "/AireAcondicionadosDePrecision",
  },
  {
    id: 4,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/monitoreo.png",
    titleKey: "Sol5Title",
    textKey: "Sol5Text",
    link: "/MonitoreoYControlDeSeguridad",
  },
  {
    id: 2,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/Fabricacion.png",
    titleKey: "Sol3Title",
    textKey: "Sol3Text",
    link: "/FabricacionDeGabinetesYComponentes",
  },
  {
    id: 1,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/soporte+copia+2.png",
    titleKey: "Sol2Title",
    textKey: "Sol2Text",
    link: "/SoporteDeSistemasDeMisionCritica",
  },
  {
    id: 6,
    image:
      "https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/svgInicio/medica.png",
    titleKey: "Sol7Title",
    textKey: "Sol7Text",
    link: "/ImplementacionDeTecnologiaMedica",
  },
];
import { useTranslation } from "../../components/hooks/useTranslation";
import dynamic from "next/dynamic";

const Textura = dynamic(() => import("./Textura"), {
  loading: () => null,
  ssr: false,
});

const SolucionesDisplay = dynamic(() => import("./SolucionesDisplay"), {
  loading: () => null,
  ssr: false,
});

export default function Soluciones() {
  const { t } = useTranslation("Landing");

  const solutions = solutionsConfig.map(({ titleKey, textKey, ...rest }) => ({
    ...rest,
    title: t(titleKey),
    text: t(textKey),
  }));

  return (
    <div
      className="relative flex flex-col w-full justify-center items-center"
      id="Servicios"
    >
      <div className="absolute top-0 left-0 bottom-0 z-0 w-[300px]">
        <Textura />
      </div>

      <div className="relative flex flex-row flex-wrap justify-center lg:justify-end my-8 bg-[#155E75] dark:bg-inherit rounded-3xl py-8 w-[95vw] z-40 min-h-[60vh]">
        <div className="flex items-center justify-center lg:justify-start w-full lg:w-[73vw]">
          <div className="w-[90%] flex flex-col">
            <header className="w-full lg:w-3/4 py-4 text-left lg:text-justify p-6 lg:p-0">
              <h2 className="w-full text-white text-3xl lg:text-5xl font-bold">
                {t("Hero4")}
              </h2>
              <p className="text-2xl font-bold mb-8 text-white">
                {t("Hero4Sub")}
              </p>
            </header>

            <SolucionesDisplay Soluciones={solutions} />
          </div>
        </div>
      </div>
    </div>
  );
}
