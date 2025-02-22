"use client";
import EspReactive from "./EspReactive";
import Textura from "./Textura";
import { useTranslation } from "../../components/hooks/useTranslation";

const createTranslations = (t) => ({
  dataCenter: {
    title: t("Esp_datacenter") || "",
    text: t("Esp_datacenter_txt") || "",
  },
  aireAcondicionado: {
    title: t("Esp_aire") || "",
    text: t("Esp_aire_text") || "",
  },
  sistemas: {
    title: t("Esp_sistemas") || "",
    text: t("Esp_sistemas_text") || "",
  },
  monitoreo: {
    title: t("Esp_monitoreo") || "",
    text: t("Esp_monitoreo_text") || "",
  },
  hero: {
    title: t("Hero3") || "",
    subtitle: t("Hero3Sub") || "",
    text: t("Hero3Text") || "",
  },
});

export default function Especializacion() {
  const { t } = useTranslation("Landing");
  const objTrans = createTranslations(t);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full"
      id="Especializacion"
    >
      <div className="absolute top-0 left-0 bottom-0 z-0 w-[300px]">
        <Textura />
      </div>
      <div className="relative flex flex-row flex-wrap justify-center z-40 w-[95vw] min-h-[60vh]">
        <EspReactive objTrans={objTrans} />
      </div>
    </div>
  );
}
