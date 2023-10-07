import HeroBgImage from "../../components/atoms/HeroBgImage";

export default function Hero({ t }) {
  return (
    <div className="relative flex justify-center items-center min-h-[60vh] w-[100vw]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="absolute inset-0">
          <HeroBgImage
            lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/MONITOREO/HERO_LIGHT.jpg"
            darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/MONITOREO/HERO_DARK.jpg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-5xl text-[#0A2473] dark:text-white font-bold py-16">
            {t("Hero1")}
          </h2>
          <button className="py-2 px-4 bg-[#5D001D] text-white rounded-lg">
            {t("Experto")}
          </button>
        </div>
      </div>
    </div>
  );
}
