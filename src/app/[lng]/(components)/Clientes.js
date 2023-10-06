import Image from "next/image";

export default function Clientes({ t }) {
  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center"
      id="Clientes"
    >
      <div
        className="relative flex flex-row flex-wrap justify-center my-8 bg-[#155E75] dark:bg-inherit rounded-3xl"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        {/* Background Image Wrapper */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/HERO2.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="relative flex items-end mb-10 w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2"
          style={{ zIndex: 1 }}
        >
          <div className="w-full py-4">
            <h2 className="text-white dark:text-[#FFF] text-3xl md:text-5xl font-bold">
              {t("Hero5")}
            </h2>
            <p className="text-2xl font-bold my-4 text-white dark:text-[#FFF]">
              {t("Hero5Sub")}
            </p>
            <p className="text-lg font-bold text-white my-4">
              {t("Hero5Text")}
            </p>
            <button className="py-2 px-4 bg-[#5D001D] text-white self-center rounded">
              {t("MasCasos")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
