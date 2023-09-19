export default function Responsabilidad({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center mb-16"
      style={{ width: "100vw", height: "60vh" }}
    >
      <div className="flex flex-row flex-wrap w-full p-10 md:p-0 md:w-3/4 gap-16 items-center justify-end ">
        <div className="w-full md:w-[850px] text-[#324BA6] dark:text-[#799FE6]">
          <h2 className="text-3xl md:text-5xl  font-bold py-2">{t("Hero9")}</h2>
          <p className="text-2xl font-bold mb-8">{t("Hero9Sub")}</p>
          <p className="text-lg font-bold">{t("Hero9Text")}</p>
        </div>
      </div>
    </div>
  );
}
