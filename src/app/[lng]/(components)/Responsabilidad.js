import ESR from "../../components/SVG/ESR";

export default function Responsabilidad({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center ">
      <div className="flex flex-row flex-wrap justify-start items-center min-h-[60vh] w-[95vw]   gap-2 ">
        {/* <ESR width={300} height={200} /> */}
        <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 ml-4">
          <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff]">
            <h2 className="text-3xl lg:text-5xl  font-bold py-2">
              {t("Hero9")}
            </h2>
            <p className="text-2xl font-bold mb-8">{t("Hero9Sub")}</p>
            <p className="text-lg font-bold">{t("Hero9Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
