import HeroBgImage from "../../components/atoms/HeroBgImage";

export default function Hero2({ t }) {
  return (
    <div className="relative flex justify-center items-center min-h-[60vh] w-[100vw]">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0  overflow-hidden">
        <div className="absolute inset-0">
          <HeroBgImage
            lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/MONITOREO/monitoreo_mid+content.jpg"
            darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/MONITOREO/monitoreo_mid+content.jpg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full ">
        <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] lg:w-[75vw] ">
          <h2 className="text-3xl lg:text-5xl text-white font-bold py-16 text-shadow max-w-sm lg:max-w-none">
            {t("Hero3")}
          </h2>
        </div>
      </div>
    </div>
  );
}
