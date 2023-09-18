export default function Responsabilidad({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-16  "
      style={{ width: "100vw", minHeight: "50vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-8 items-start justify-end bg-white dark:bg-inherit rounded-xl py-8 px-8">
        <div className="text-[#324BA6] dark:text-[#799FE6] flex flex-col flex-nowrap justify-end  px-16 w-3/4">
          <div>
            <h2 className="text-5xl  font-bold py-2">{t("Hero9")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero9Sub")}</p>
            <p className="text-lg font-bold mb-8 whitespace-pre-line">
              {t("Hero9Text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
