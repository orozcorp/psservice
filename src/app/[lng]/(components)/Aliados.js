import AC_Cisco from "../../components/SVG/AC_Cisco";
import AC_abb from "../../components/SVG/AC_abb";
import AC_Access from "../../components/SVG/AC_Access";
import AC_Daikin from "../../components/SVG/AC_Daikin";
import AC_XFusion from "../../components/SVG/AC_XFusion";
import AC_VMware from "../../components/SVG/AC_VMware";
import AC_Vertiv from "../../components/SVG/AC_Vertiv";
import AC_Uniflair from "../../components/SVG/AC_Uniflair";
import AC_Staco from "../../components/SVG/AC_Staco";
import AC_Scheider from "../../components/SVG/AC_Scheider";
import AC_Rittal from "../../components/SVG/AC_Rittal";
import AC_Pure from "../../components/SVG/AC_Pure";
import AC_PSS from "../../components/SVG/AC_PSS";
import AC_Net from "../../components/SVG/AC_Net";
import AC_Mesa from "../../components/SVG/AC_Mesa";
import AC_Kohler from "../../components/SVG/AC_Kohler";
import AC_Jonix from "../../components/SVG/AC_Jonix";
import AC_Huawei from "../../components/SVG/AC_Huawei";
import AC_HP from "../../components/SVG/AC_HP";
import AC_Generac from "../../components/SVG/AC_Generac";
import AC_Fortinet from "../../components/SVG/AC_Fortinet";
import AC_Dell from "../../components/SVG/AC_Dell";
export default function Aliados({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      style={{ width: "100vw", minHeight: "60vh" }}
    >
      <div className="flex flex-row flex-wrap w-3/4 md:w-[95%] gap-4 items-start justify-start">
        <div className="flex flex-row flex-wrap gap-4 w-[22rem]">
          <AC_Cisco width={60} height={60} />
          <AC_abb width={60} height={60} />
          <AC_Access width={60} height={60} />
          <AC_Daikin width={60} height={60} />
          <AC_XFusion width={60} height={60} />
          <AC_VMware width={60} height={60} />
          <AC_Vertiv width={60} height={60} />
          <AC_Uniflair width={60} height={60} />
          <AC_Staco width={60} height={60} />
          <AC_Scheider width={60} height={60} />
          <AC_Rittal width={60} height={60} />
          <AC_Pure width={60} height={60} />
          <AC_PSS width={60} height={60} />
          <AC_Net width={60} height={60} />
          <AC_Mesa width={60} height={60} />
          <AC_Kohler width={60} height={60} />
          <AC_Jonix width={60} height={60} />
          <AC_Huawei width={60} height={60} />
          <AC_HP width={60} height={60} />
          <AC_Generac width={60} height={60} />
          <AC_Fortinet width={60} height={60} />
          <AC_Dell width={60} height={60} />
        </div>
        <div className="flex-1 text-[#324BA6] dark:text-[#799FE6] flex flex-col flex-nowrap justify-start">
          <div>
            <h2 className="text-5xl md:text-8xl   font-bold py-2">
              {t("Hero7")}
            </h2>
            <p className="text-3xl md:text-5xl font-bold mb-8">
              {t("Hero7Sub")}
            </p>
            <p className="text-lg md:text-2xl font-bold">{t("Hero7Text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
