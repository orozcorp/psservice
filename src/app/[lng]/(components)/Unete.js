export default function Unete({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-16  "
      style={{ width: "100vw", minHeight: "50vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-8 items-start justify-start bg-[#155E75] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-xl py-8 px-8">
        <div className="flex flex-row flex-wrap justify-around items-stretch gap-8 w-80"></div>
        <div className="text-[#AEC8F8] dark:text-[#799FE6] flex flex-col flex-nowrap justify-start w-full px-16">
          <div>
            <h2 className="text-5xl  font-bold py-2">{t("Hero8")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero8Sub")}</p>
            <p className="text-lg font-bold mb-8">{t("Hero8Text")}</p>
            <button className="border border-white py-2 px-4 rounded">
              {t("QuieroSer")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
