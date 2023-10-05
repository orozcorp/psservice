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
import AC_Uptime from "../../components/SVG/AC_Uptime";
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
        <div className="flex items-start w-full lg:p-0 lg:w-3/4 xl:w-1/2 ">
          <div className="flex flex-row flex-wrap w-full justify-start md:justify-start ">
            <div className="w-full md:w-[380px] rounded ml-0 md:ml-[-10rem] xl:ml-[-24rem] px-4 md:px-12">
              <h2 className="text-5xl md:text-7xl font-bold py-2">
                {t("Hero7")}
              </h2>

              <p className="text-2xl md:text-4xl font-bold mb-8">
                {t("Hero7Sub")}
              </p>
            </div>
            <div className="text-[#324BA6] flex-1 dark:text-[#FFFFFF] flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-center md:justify-start px-4 text-left mt-16 md:mt-0 md:text-left">
              <div>
                <p className="text-xl font-bold">{t("Hero7Text")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-8 h-fit  gap-4 flex flex-col md:flex-row  flex-nowrap md:flex-wrap justify-center md:justify-between items-center md:items-baseline p-4">
          <AC_Scheider width={200} height={200} />
          <AC_Staco width={200} height={200} />
          <AC_Vertiv width={200} height={200} />
          <AC_Daikin width={200} height={200} />
          <AC_Mesa width={200} height={200} />
          <AC_Kohler width={200} height={200} />
          <AC_Huawei width={200} height={200} />
          <AC_VMware width={200} height={200} />
          <AC_HP width={200} height={200} />
          <AC_Jonix width={200} height={200} />
          <AC_abb width={200} height={200} />
          <AC_Fortinet width={200} height={200} />
          <AC_Rittal width={200} height={200} />
          <AC_Dell width={200} height={200} />
          <AC_Net width={200} height={200} />
          <AC_Cisco width={200} height={200} />
          <AC_Uniflair width={200} height={200} />
          <AC_Access width={200} height={200} />
          <AC_XFusion width={200} height={200} />
          <AC_Generac width={200} height={200} />
          <AC_Pure width={200} height={200} />
          <AC_PSS width={200} height={200} />
          <AC_Uptime width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
