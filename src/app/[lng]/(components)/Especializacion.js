// https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/DATACENTER.jpg
// https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/AIRE_ACONDICIONADO.jpg

import EspReactive from "./EspReactive";

export default function Especializacion({ t }) {
  const objTrans = {
    dataCenter: {
      title: t("Esp_datacenter") || "",
      text: t("Esp_datacenter_text") || "",
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
  };
  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center"
      id="Especializacion"
    >
      <div
        className="flex flex-row flex-wrap justify-center"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <EspReactive objTrans={objTrans} />
      </div>
    </div>
  );
}
