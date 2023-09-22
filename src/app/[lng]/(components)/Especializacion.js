export default function Especializacion({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
          <div className="flex flex-row flex-wrap w-full justify-center md:justify-start">
            <div className="w-60 h-[25rem] border rounded ml-0 md:ml-[-19rem]" />
            <div className="text-[#324BA6] dark:text-[#fff] flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-center md:justify-start px-0 md:px-16 text-left mt-16 md:mt-0 md:text-left mw-full max-w-2xl">
              <div>
                <h2 className="text-3xl md:text-5xl  font-bold py-2">
                  {t("Hero3")}
                </h2>
                <p className="text-2xl font-bold mb-8">{t("Hero3Sub")}</p>
                <p className="text-lg font-bold">{t("Hero3Text")}</p>
              </div>
              <div
                className="flex flex-row flex-wrap mt-16 w-full gap-16 justify-center md:justify-start"
                style={{ alignSelf: "end" }}
              >
                <div className="h-44 w-60 border rounded" />
                <div className="flex flex-col flex-nowrap gap-2">
                  <div className="h-20 w-60 border rounded" />
                  <div className="h-20 w-60 border rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
