export default function Contacta({ t }) {
  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] w-[100vw]">
        <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
          <div className="w-full max-w-2xl text-[#324BA6] dark:text-[#fff]">
            <h2 className="text-3xl lg:text-5xl  font-bold py-4">
              {t("Contacta")}
            </h2>
            <p className="text-2xl font-bold mb-2">{t("ContactaText")}</p>
            <p className="text-lg font-bold">{t("ContactaText2")}</p>
            <button className="mt-4 px-6 rounded py-2 bg-[#324BA6] text-white">
              {t("HablarCons")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
