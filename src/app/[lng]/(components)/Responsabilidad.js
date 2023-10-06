export default function Responsabilidad({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center mb-16"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 ">
          <div className="w-full lg:w-[850px] text-[#324BA6] dark:text-[#FFFFFF] text-justify">
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
