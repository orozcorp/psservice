import ISO_14001 from "../../components/SVG/Certificaciones/ISO_14001";
import ISO9001 from "../../components/SVG/Certificaciones/ISO9001";
import ISO_Mesa_trabajo from "../../components/SVG/Certificaciones/ISO_Mesa_trabajo";
import ISO_MESA_TRES from "../../components/SVG/Certificaciones/ISO_MESA_TRES";
export default function Certificaciones({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center items-center my-8  bg-[#CCCCCC] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-3xl py-8"
        style={{ width: "95vw", minHeight: "40vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
          <div className="flex flex-row flex-wrap w-full justify-center md:justify-start">
            <div className="w-[330px] h-fit rounded ml-0 md:ml-[-20rem] flex flex-row flex-wrap justify-around items-baseline pb-8">
              <ISO_14001 width="8rem" height="8rem" />
              <ISO9001 width="8rem" height="8rem" />
              <ISO_Mesa_trabajo width="8rem" height="8rem" />
              <ISO_MESA_TRES width="8rem" height="8rem" />
            </div>
            <div className="text-[#324BA6] dark:text-[#FFF] flex-1 flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-start md:justify-start text-left md:text-left max-w-2xl ">
              <div className="flex flex-col flex-nowrap ">
                <h2 className="text-3xl md:text-5xl  font-bold pb-8">
                  {t("Hero6")}
                </h2>
                <p className="text-xl font-bold mb-8">{t("Hero6Text")}</p>
              </div>
              <div
                className="flex flex-col md:flex-row flex-nowrap md:flex-wrap w-full justify-center items-center md:items-start md:justify-between"
                style={{ alignSelf: "end" }}
              >
                <div
                  className="flex flex-col flex-nowrap justify-center items-center text-center"
                  style={{ minWidth: "150px" }}
                >
                  <div className="text-5xl  font-bold mb-4">15</div>
                  <div className="text-lg font-bold">{t("CertNom")}</div>
                  <div className="text-sm">{t("CertNomText")}</div>
                </div>
                <div
                  className="flex flex-col flex-nowrap justify-center items-center text-center"
                  style={{ minWidth: "150px" }}
                >
                  <div className="text-5xl  font-bold mb-4">4</div>
                  <div className="text-lg font-bold">{t("CertIso")}</div>
                  <div className="text-sm">{t("CertIsoText")}</div>
                </div>
                <div
                  className="flex flex-col flex-nowrap justify-center items-center text-center"
                  style={{ minWidth: "150px" }}
                >
                  <div className="text-5xl  font-bold mb-4">+10</div>
                  <div className="text-lg font-bold">{t("CertIso")}</div>
                  <div className="text-sm">{t("CertIsoText2")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
