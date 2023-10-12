export default function Contacta({ t }) {
  return (
    <>
      <div className="flex flex-col flex-nowrap w-full justify-center items-center md:items-end  ">
        <div className="flex justify-start items-center min-h-[60vh] w-[75vw]  ">
          <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff]">
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
