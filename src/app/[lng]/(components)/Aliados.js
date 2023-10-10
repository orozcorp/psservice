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
        <div className="flex items-start w-full lg:flex-row  ">
          <div className="w-full lg:w-[340px] px-4 lg:px-12 text-[#0A2473] dark:text-inherit">
            <h2 className="text-3xl lg:text-5xl font-bold py-2 ">
              {t("Hero7")}
            </h2>
            <p className="text-xl lg:text-2xl font-bold mb-8">
              {t("Hero7Sub")}
            </p>
          </div>
          <div className="text-[#0A2473] flex-1 dark:text-[#FFFFFF] flex flex-col lg:flex-row flex-nowrap lg:flex-wrap justify-center items-center lg:justify-start px-4 text-left mt-16 lg:mt-0 lg:text-left">
            <div>
              <p className="text-xl font-bold">{t("Hero7Text")}</p>
            </div>
          </div>
        </div>
        <div className="w-full my-8 h-fit  gap-4 p-4 grid grid-cols-2  lg:grid-cols-4">
          <AC_Scheider width={120} height={60} />
          <AC_Staco width={120} height={60} />
          <AC_Vertiv width={120} height={60} />
          <AC_Daikin width={120} height={60} />
          <AC_Mesa width={120} height={60} />
          <AC_Kohler width={120} height={60} />
          <AC_Huawei width={120} height={60} />
          <AC_VMware width={120} height={60} />
          <AC_HP width={120} height={60} />
          <AC_Jonix width={120} height={60} />
          <AC_abb width={120} height={60} />
          <AC_Fortinet width={120} height={60} />
          <AC_Rittal width={120} height={60} />
          <AC_Dell width={120} height={60} />
          <AC_Net width={120} height={60} />
          <AC_Cisco width={120} height={60} />
          <AC_Uniflair width={120} height={60} />
          <AC_Access width={120} height={60} />
          <AC_XFusion width={120} height={60} />
          <AC_Generac width={120} height={60} />
          <AC_Pure width={120} height={60} />
          <AC_PSS width={120} height={60} />
          <AC_Uptime width={120} height={60} />
          <AC_Oracle width={120} height={60} />
        </div>
      </div>
    </div>
  );
}
