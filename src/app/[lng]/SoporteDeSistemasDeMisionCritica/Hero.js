import HeroBgImage from "../../components/atoms/HeroBgImage";
import PSLogo from "../../components/SVG/Logos/PSLogo";
export default function Hero({ t }) {
  return (
    <div
      className="relative flex justify-center lg:justify-end items-center min-h-[60vh] w-[100vw]"
      style={{ zIndex: 1 }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0  overflow-hidden">
        <div className="absolute inset-0">
          <HeroBgImage
            lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/SOPORTE/Hero2.jpg"
            darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/SOPORTE/Hero.jpg"
            darkMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/soporte_dark_mobile.jpg"
            lightMovilImg="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/soporte_light_mobile.jpg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full my-8">
        <div className=" flex flex-row flex-wrap justify-center items-center p-8 w-full lg:w-[24vw]">
          <PSLogo width="200px" height="168px" />
        </div>
        <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] lg:w-[75vw] ">
          <h1 className="text-3xl lg:text-5xl text-[#002772] dark:text-white font-bold py-16 max-w-2xl text-shadow ">
            {t("Hero1")}
          </h1>
        </div>
      </div>
    </div>
  );
}
