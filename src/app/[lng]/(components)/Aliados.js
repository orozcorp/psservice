import dynamic from "next/dynamic";
const AliadosList = dynamic(() => import("./AliadosList"));
export default function Aliados({ t }) {
  return (
    <div
      className="flex flex-col flex-nowrap w-full justify-center items-center "
      id="Aliados"
    >
      <div
        className="flex flex-col flex-nowrap justify-center items-center"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex flex-col items-center lg:items-start w-full  lg:flex-row  ">
          <div className="w-full lg:w-[22vw]  text-[#0A2473] dark:text-inherit flex flex-col flex-nowrap items-center justify-baseline ">
            <h2 className="text-5xl lg:text-5xl font-bold">{t("Hero7")}</h2>
            <p className="text-xl lg:text-xl font-bold">{t("Hero7Sub")}</p>
          </div>
          <div className="text-[#0A2473] flex-1 dark:text-[#FFFFFF] flex flex-col lg:flex-row flex-nowrap lg:flex-wrap justify-center items-center lg:justify-start text-center lg:text-left mt-4 px-4 lg:px-0 lg:mt-0 lg:text-left">
            <div>
              <p className="text-xl font-bold">{t("Hero7Text")}</p>
            </div>
          </div>
        </div>

        <AliadosList />
      </div>
    </div>
  );
}
