import Textura from "../(components)/Textura";
export default function Somos({ t }) {
  return (
    <>
      <div className="relative flex flex-col flex-nowrap w-full justify-center items-center lg:items-end  my-12 ">
        <div className="flex flex-row flex-wrap z-0">
          <Textura />
          <div className="flex-1 flex justify-center items-center min-h-[40vh] w-[75vw] z-40">
            <div className="flex items-center w-full ">
              <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff] ">
                <h2 className="text-3xl lg:text-5xl font-bold py-2 ">
                  {t("Hero2")}
                </h2>
                <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
                <p className="text-lg font-bold whitespace-pre-line">
                  {t("HeroText")}
                </p>
                <p className="text-lg font-bold whitespace-pre-line my-4">
                  {t("HeroText2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
