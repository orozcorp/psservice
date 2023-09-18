import PowerLine from "../../components/Atoms/PowerLine";

export default function SomosIngenieria({ t }) {
  return (
    <>
      <div
        className="flex flex-row flex-wrap justify-center"
        style={{ width: "100vw", height: "60vh" }}
      >
        <div className="flex flex-row flex-nowrap w-3/4 gap-16 items-center justify-end">
          <div className="max-w-2xl text-[#324BA6] dark:text-[#799FE6]">
            <h2 className="text-5xl  font-bold py-2">{t("Hero2")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
            <p className="text-lg font-bold">{t("HeroText")}</p>
          </div>
        </div>
      </div>
      <PowerLine />
    </>
  );
}
