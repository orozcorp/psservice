import SOL_ENERGIA from "../../components/SVG/SOL_ENERGIA";
import SOL_SOPORTE from "../../components/SVG/SOL_SOPORTE";
import SOL_FAB from "../../components/SVG/SOL_FAB";
import SolAire from "../../components/SVG/SolAire";
import SOL_SALUD from "../../components/SVG/SOL_SALUD";
import SOL_MONITOREO from "../../components/SVG/SOL_MONITOREO";
import SOL_INFRA from "../../components/SVG/SOL_INFRA";
export default function Soluciones({ t }) {
  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center"
      id="Servicios"
    >
      <div
        className="flex flex-row flex-wrap justify-center my-8 bg-[#155E75] dark:bg-inherit rounded-3xl py-8"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2   ">
          <div className="w-full  flex flex-col flex-nowrap ">
            <div className="w-full md:w-3/4 py-4  text-left md:text-justify">
              <h2 className="w-full text-white dark:text-[#fff] text-3xl md:text-5xl font-bold">
                {t("Hero4")}
              </h2>
              <p className="text-2xl font-bold mb-8 text-white dark:text-[#fff]">
                {t("Hero4Sub")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row flex-nowrap justify-center items-center content-center md:justify-between  md:flex-wrap gap-8 w-full xl:ml-24 2xl:ml-[-4rem] xl:min-w-[60vw] 2xl:min-w-full justify-self-center self-center place-self-center">
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48 ">
                <SOL_ENERGIA width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol1Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol1Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SOL_SOPORTE width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol2Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol2Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SOL_FAB width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol3Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol3Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SOL_INFRA width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol4Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol4Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SOL_MONITOREO width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol5Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol5Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SolAire width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol6Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol6Text")}
                </p>
              </div>
              <div className="flex flex-col flex-nowrap justify-center items-center w-48 h-48">
                <SOL_SALUD width="100px" height="100px" />
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol7Title")}
                </p>
                <p className="text-white dark:text-[#FFFFFF] text-sm font-bold">
                  {t("Sol7Text")}
                </p>
              </div>
              <div className="h-48 w-48 flex flex-col flex-nowrap justify-center items-center ">
                <button className="py-2 px-4 bg-[#5D001D] dark:bg-[#AEC8F8] text-white dark:text-[#324BA6] self-center rounded ">
                  {t("Leer")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
