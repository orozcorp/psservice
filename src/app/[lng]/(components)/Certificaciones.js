export default function Certificaciones({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center my-16  "
      style={{ width: "100vw", minHeight: "50vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-8 items-start justify-start bg-[#CCCCCC] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-xl py-8 px-8">
        <div className="flex flex-row flex-wrap justify-around items-stretch gap-8 w-80">
          <div className="h-24 w-24 border rounded my-4" />
          <div className="h-24 w-24 border rounded my-4" />
          <div className="h-24 w-24 border rounded my-4" />
          <div className="h-24 w-24 border rounded my-4" />
        </div>
        <div className="text-[#324BA6] dark:text-[#799FE6] flex flex-col flex-nowrap justify-start w-full px-16">
          <div>
            <h2 className="text-5xl  font-bold py-2">{t("Hero6")}</h2>
            <p className="text-2xl font-bold mb-8">{t("Hero6Text")}</p>
          </div>
          <div
            className="flex flex-row flex-wrap mt-16 w-full gap-16 justify-between"
            style={{ alignSelf: "end" }}
          >
            <div className="flex flex-col flex-nowrap justify-center items-center">
              <div className="text-5xl  font-bold">15</div>
              <div className="text-lg font-bold">{t("CertNom")}</div>
              <div className="text-sm">{t("CertNomText")}</div>
            </div>
            <div className="flex flex-col flex-nowrap justify-center items-center">
              <div className="text-5xl  font-bold">4</div>
              <div className="text-lg font-bold">{t("CertIso")}</div>
              <div className="text-sm">{t("CertIsoText")}</div>
            </div>
            <div className="flex flex-col flex-nowrap justify-center items-center">
              <div className="text-5xl  font-bold">+10</div>
              <div className="text-lg font-bold">{t("CertIso")}</div>
              <div className="text-sm">{t("CertIsoText2")}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
