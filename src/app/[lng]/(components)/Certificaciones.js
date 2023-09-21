import ISO_14001 from "../../components/SVG/ISO_14001";
import ISO_9001_2015 from "../../components/SVG/ISO_9001_2015";
import ISO_Mesa_trabajo from "../../components/SVG/ISO_Mesa_trabajo";
import ISO_MESA_TRES from "../../components/SVG/ISO_MESA_TRES";
export default function Certificaciones({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center items-center my-16  "
      style={{ width: "100vw", minHeight: "50vh" }}
    >
      <div className="flex flex-col flex-nowrap w-full md:w-[95%] gap-8 items-start justify-start bg-[#CCCCCC] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-xl p-2 md:p-8 pb-16">
        <div className="flex flex-row flex-wrap w-full gap-4 md:gap-8 items-center justify-start p-4 md:p-8">
          <div className="flex flex-row flex-wrap justify-center md:justify-around items-center md:items-stretch gap-4 w-full md:w-[22rem] self-center">
            <ISO_14001 width="8rem" height="8rem" />
            <ISO_9001_2015 width="8rem" height="8rem" />
            <ISO_Mesa_trabajo width="8rem" height="8rem" />
            <ISO_MESA_TRES width="8rem" height="8rem" />
          </div>
          <div className="text-[#324BA6] dark:text-[#799FE6] flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-center md:justify-start px-0 md:px-8 text-center md:text-left max-w-2xl ">
            <div className="flex flex-col flex-nowrap ">
              <h2 className="text-3xl md:text-5xl  font-bold py-2">
                {t("Hero6")}
              </h2>
              <p className="text-xl font-bold mb-8">{t("Hero6Text")}</p>
            </div>
            <div
              className="flex flex-col md:flex-row flex-nowrap md:flex-wrap mt-16 w-full gap-8 justify-center items-center md:items-start md:justify-between"
              style={{ alignSelf: "end" }}
            >
              <div
                className="flex flex-col flex-nowrap justify-center items-center text-center"
                style={{ maxWidth: "150px" }}
              >
                <div className="text-5xl  font-bold mb-4">15</div>
                <div className="text-lg font-bold">{t("CertNom")}</div>
                <div className="text-sm">{t("CertNomText")}</div>
              </div>
              <div
                className="flex flex-col flex-nowrap justify-center items-center text-center"
                style={{ maxWidth: "150px" }}
              >
                <div className="text-5xl  font-bold mb-4">4</div>
                <div className="text-lg font-bold">{t("CertIso")}</div>
                <div className="text-sm">{t("CertIsoText")}</div>
              </div>
              <div
                className="flex flex-col flex-nowrap justify-center items-center text-center"
                style={{ maxWidth: "150px" }}
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
  );
}
