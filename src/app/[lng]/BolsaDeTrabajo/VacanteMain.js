import HeroBgImage from "../../components/atoms/HeroBgImage";
import VacanteList from "./VacanteList";
export default function VacanteMain({ t, vacantes }) {
  return (
    <>
      <div
        className="relative flex justify-center lg:justify-end items-center min-h-[60vh] w-[100vw] my-8"
        style={{ zIndex: 1 }}
      >
        {/* Background Image Wrapper */}
        <div className="absolute inset-0  overflow-hidden">
          <div className="absolute inset-0">
            <HeroBgImage
              lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/RECLUTAMIENTO/RH_midimage"
              darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/RECLUTAMIENTO/RH_midimage"
              darkMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/RH_mid.jpg"
              lightMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/RH_mid.jpg"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full my-8">
          <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] lg:w-[75vw] ">
            <h2 className="text-xl lg:text-2xl text-white font-bold py-4 max-w-2xl text-shadow ">
              {t("Vacante1")}
            </h2>
            <div className="text-shadow text-white">{t("VacanteElige")}</div>
            <VacanteList vacantes={vacantes} />
          </div>
        </div>
      </div>
    </>
  );
}
