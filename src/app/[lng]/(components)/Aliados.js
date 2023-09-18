export default function Aliados({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      style={{ width: "100vw", minHeight: "60vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-16 items-start justify-start">
        <div className="w-[500px] h-[25rem] border rounded" />
        <div className="text-[#324BA6] dark:text-[#799FE6] flex flex-col flex-nowrap justify-start w-full">
          <div>
            <h2 className="text-5xl  font-bold py-2">{t("Hero7")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero7Sub")}</p>
            <p className="text-lg font-bold">{t("Hero7Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
