export default function Respetamos({ t }) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center md:items-start min-h-[10vh]  w-[100vw] gap-2">
      <div className="flex flex-col flex-nowrap items-center w-full p-10 md:p-0 mt-10 lg:w-[80%] text-[#002772] dark:text-white font-bold">
        {t("Respetamos")}
        <div className="flex flex-row flex-wrap gap-8 justify-between w-full items-start my-20 text-left md:text-center ">
          <div className="flex flex-col flex-nowrap justify-center items-center text-left md:text-center w-full md:flex-1">
            {t("Manejo")}
            <p className="mt-2">{t("ManejoText")}</p>
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center text-left md:text-center w-full md:flex-1">
            {t("ProtCivil")}
            <p className="mt-2">{t("ProtCivilText")}</p>
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center text-left md:text-center w-full md:flex-1">
            {t("Apoyo")}
            <p className="mt-2">{t("ApoyoText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
