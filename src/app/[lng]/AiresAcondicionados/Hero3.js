import HeroBgImage from "../../components/atoms/HeroBgImage";

export default function Hero3({ t }) {
  return (
    <div className="relative flex justify-center items-center min-h-[80vh] w-[100vw]">
      {/* Background Image Wrapper */}

      {/* Content */}
      <div className="relative z-0 w-[95%] flex justify-center items-end  rounded-xl py-4 min-h-[60vh]">
        <div className="absolute inset-0 rounded overflow-hidden">
          <div className="absolute inset-0">
            <HeroBgImage
              lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/AIRES/CLIENTES_LIGHT.jpg"
              darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/AIRES/CLIENTES_DARK.jpg"
            />
          </div>
        </div>
        <div className="z-10 flex flex-row flex-wrap items-center w-full p-6 lg:p-0 mx-[-4rem] lg:w-3/4 xl:w-1/2 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold pt-16 pb-4">
              {t("Hero4")}
            </h2>
            <p className="text-xl font-bold py-4">{t("Hero4Sub")}</p>
            <p className="text-md font-bold">{t("Hero4Text")}</p>
            <button className="py-2 px-4 mt-8 bg-[#5D001D] text-white">
              {t("MasCasos")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
