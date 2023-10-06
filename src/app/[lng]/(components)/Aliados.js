import AC_Cisco from "../../components/SVG/Aliados/AC_Cisco";
import AC_abb from "../../components/SVG/Aliados/AC_abb";
import AC_Access from "../../components/SVG/Aliados/AC_Access";
import AC_Daikin from "../../components/SVG/Aliados/AC_Daikin";
import AC_XFusion from "../../components/SVG/Aliados/AC_XFusion";
import AC_VMware from "../../components/SVG/Aliados/AC_VMware";
import AC_Vertiv from "../../components/SVG/Aliados/AC_Vertiv";
import AC_Uniflair from "../../components/SVG/Aliados/AC_Uniflair";
import AC_Staco from "../../components/SVG/Aliados/AC_Staco";
import AC_Scheider from "../../components/SVG/Aliados/AC_Scheider";
import AC_Rittal from "../../components/SVG/Aliados/AC_Rittal";
import AC_Pure from "../../components/SVG/Aliados/AC_Pure";
import AC_PSS from "../../components/SVG/Aliados/AC_PSS";
import AC_Net from "../../components/SVG/Aliados/AC_Net";
import AC_Mesa from "../../components/SVG/Aliados/AC_Mesa";
import AC_Kohler from "../../components/SVG/Aliados/AC_Kohler";
import AC_Jonix from "../../components/SVG/Aliados/AC_Jonix";
import AC_Huawei from "../../components/SVG/Aliados/AC_Huawei";
import AC_HP from "../../components/SVG/Aliados/AC_HP";
import AC_Generac from "../../components/SVG/Aliados/AC_Generac";
import AC_Fortinet from "../../components/SVG/Aliados/AC_Fortinet";
import AC_Dell from "../../components/SVG/Aliados/AC_Dell";
import AC_Uptime from "../../components/SVG/Aliados/AC_Uptime";
import AC_Oracle from "../../components/SVG/Aliados/AC_Oracle";
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
          <div className="flex flex-row flex-wrap w-full justify-start lg:justify-start ">
            <div className="w-full lg:w-[380px] rounded ml-0 lg:ml-[-10rem] xl:ml-[-24rem] px-4 lg:px-12">
              <h2 className="text-5xl lg:text-7xl font-bold py-2">
                {t("Hero7")}
              </h2>

              <p className="text-2xl lg:text-4xl font-bold mb-8">
                {t("Hero7Sub")}
              </p>
            </div>
            <div className="text-[#324BA6] flex-1 dark:text-[#FFFFFF] flex flex-col lg:flex-row flex-nowrap lg:flex-wrap justify-center items-center lg:justify-start px-4 text-left mt-16 lg:mt-0 lg:text-left">
              <div>
                <p className="text-xl font-bold">{t("Hero7Text")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-8 h-fit  flex flex-col lg:flex-row  flex-nowrap lg:flex-wrap justify-center lg:justify-between items-center lg:items-baseline p-4">
          <AC_Scheider width={200} height={100} />
          <AC_Staco width={200} height={100} />
          <AC_Vertiv width={200} height={100} />
          <AC_Daikin width={200} height={100} />
          <AC_Mesa width={200} height={100} />
          <AC_Kohler width={200} height={100} />
          <AC_Huawei width={200} height={100} />
          <AC_VMware width={200} height={100} />
          <AC_HP width={200} height={100} />
          <AC_Jonix width={200} height={100} />
          <AC_abb width={200} height={100} />
          <AC_Fortinet width={200} height={100} />
          <AC_Rittal width={200} height={100} />
          <AC_Dell width={200} height={100} />
          <AC_Net width={200} height={100} />
          <AC_Cisco width={200} height={100} />
          <AC_Uniflair width={200} height={100} />
          <AC_Access width={200} height={100} />
          <AC_XFusion width={200} height={100} />
          <AC_Generac width={200} height={100} />
          <AC_Pure width={200} height={100} />
          <AC_PSS width={200} height={100} />
          <AC_Uptime width={200} height={100} />
          <AC_Oracle width={200} height={100} />
        </div>
      </div>
    </div>
  );
}
