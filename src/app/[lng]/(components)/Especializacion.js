export default function Especializacion({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      style={{ width: "100vw", minHeight: "60vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-16 items-start justify-start">
        <div className="w-60 h-[25rem] border rounded" />
        <div className="text-[#324BA6] dark:text-[#799FE6] flex flex-col flex-nowrap justify-start">
          <div>
            <h2 className="text-5xl  font-bold py-2">{t("Hero3")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero3Sub")}</p>
            <p className="text-lg font-bold">{t("Hero3Text")}</p>
          </div>
          <div
            className="flex flex-row flex-wrap mt-16 w-full gap-16"
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
  );
}
