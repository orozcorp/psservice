import HeroBgImage from "../../components/atoms/HeroBgImage";

export default function VacanteMain({ t }) {
  return (
    <div
      className="relative flex justify-center md:justify-end items-center min-h-[60vh] w-[100vw] my-8"
      style={{ zIndex: 1 }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0  overflow-hidden">
        <div className="absolute inset-0">
          <HeroBgImage
            lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/MONITOREO/HERO_LIGHT.jpg"
            darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/FABRICACION/HERO.jpg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full my-8">
        <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] md:w-[75vw] ">
          <h2 className="text-xl lg:text-2xl text-[#002772] dark:text-white font-bold py-4 max-w-2xl">
            {t("Vacante1")}
          </h2>
          <div>{t("VacanteElige")}</div>
        </div>
      </div>
    </div>
  );
}
