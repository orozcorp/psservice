import HeroBgImage from "./HeroBgImage";
export default function Hero({ t }) {
  return (
    <div
      className="relative flex justify-center md:justify-end items-center min-h-[60vh] w-[100vw]"
      style={{ zIndex: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <HeroBgImage />
      </div>

      {/* Content */}

      <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] md:w-[75vw] ">
        <h2 className="text-3xl lg:text-5xl text-[#002772] dark:text-white font-bold py-16 max-w-2xl">
          {t("Hero1")}
        </h2>
        <button className="py-2 px-4 bg-[#5D001D] text-white rounded-lg">
          {t("Experto")}
        </button>
      </div>
    </div>
  );
}
