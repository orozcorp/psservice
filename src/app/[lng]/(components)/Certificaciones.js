"use client";
import { memo } from "react";
import { useTranslation } from "../../components/hooks/useTranslation";
import dynamic from "next/dynamic";

// Optimize dynamic imports with loading priority
const ISO = dynamic(() => import("../../components/SVG/Certificaciones/ISO"), {
  ssr: false,
  loading: () => <div style={{ width: "10rem", height: "10rem" }} />,
});

const CertificacionesSingle = dynamic(() => import("./CertificacionesSingle"), {
  ssr: true,
});

// Create separate components for better re-rendering control
const CertificationCard = memo(({ endCount, prefix, titleKey, textKey, t }) => (
  <div
    className="flex flex-col flex-nowrap justify-center items-center text-center"
    style={{ width: "200px" }}
  >
    <CertificacionesSingle endCount={endCount} prefix={prefix} />
    <div className="text-lg font-bold">{t(titleKey)}</div>
    <div className="text-sm">{t(textKey)}</div>
  </div>
));

CertificationCard.displayName = "CertificationCard";

const Certificaciones = () => {
  const { t } = useTranslation("Landing");

  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center"
      id="Certificaciones"
    >
      <div
        className="flex flex-row flex-wrap justify-center items-center my-8 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-3xl py-8"
        style={{ width: "95vw", minHeight: "40vh" }}
      >
        <div className="flex items-center w-full">
          <div className="flex flex-col-reverse lg:flex-row flex-wrap w-full justify-center lg:justify-start">
            <div className="w-full lg:w-[23vw] mt-8 lg:my-0 h-fit rounded flex flex-col flex-nowrap justify-around items-center pb-8 gap-4 px-4">
              <ISO width="10rem" height="10rem" />
              <div className="text-[12px] whitespace-pre-line mt-8 text-left leading-5 dark:text-white">
                {t("ISOTxt")}
              </div>
            </div>

            <div className="text-[#0A2473] dark:text-[#FFF] w-full flex-1 flex flex-col lg:flex-row flex-nowrap lg:flex-wrap justify-center items-center text-center lg:items-center lg:justify-center lg:text-center px-8">
              <div className="flex flex-col flex-nowrap">
                <h2 className="text-3xl lg:text-5xl font-bold pb-8">
                  {t("Hero6")}
                </h2>
                <p className="text-xl font-bold mb-8">{t("Hero6Text")}</p>
              </div>

              <div
                className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full justify-center items-center py-8 lg:py-0 lg:items-start px-4 lg:px-0 lg:justify-between"
                style={{ alignSelf: "end" }}
              >
                <CertificationCard
                  endCount={16}
                  titleKey="CertNom"
                  textKey="CertNomText"
                  t={t}
                />
                <CertificationCard
                  endCount={4}
                  titleKey="CertIso"
                  textKey="CertIsoText"
                  t={t}
                />
                <CertificationCard
                  endCount={10}
                  prefix="+"
                  titleKey="CertIso2"
                  textKey="CertIsoText2"
                  t={t}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Certificaciones);
