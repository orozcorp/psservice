import ConocimientoSingle from "./ConocimientoSingle";
import { AiOutlineArrowDown } from "react-icons/ai";
export default function Conocimiento({ t, documentos, lng }) {
  return (
    <>
      <div className="flex justify-center items-center lg:items-start w-full lg:w-[95vw]  ">
        <div className="flex flex-row flex-wrap items-center w-full lg:w-3/4 xl:w-1/2 justify-center">
          <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#FFFFFF] px-4 py-6 mb-4 flex flex-col flex-nowrap justify-center items-center">
            <h2 className="font-bold text-3xl lg:text-5xl">
              {t("Documentos")}
            </h2>
            <div className="flex flex-row flex-wrap gap-4">
              <p className="text-xl lg:3xl font-bold">{t("DeCons")}</p>
              <button className="text-white bg-[#324BA6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                <AiOutlineArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center lg:items-start w-full lg:w-[95vw] ">
        <div className="flex flex-row flex-wrap justify-center lg:justify-start m-4 lg:p-0 items-center lg:items-start w-full lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE]  dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD] rounded-3xl">
          <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#0A2473] px-20 py-12 flex flex-col flex-nowrap justify-start items-start ">
            <ul className="grid grid-cols-2 h-fit items-start gap-4">
              {documentos.map((documento) => (
                <ConocimientoSingle
                  documento={documento}
                  key={documento._id}
                  lng={lng}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
