import Textura from "../(components)/Textura";
export default function Somos({ t }) {
  return (
    <>
      <div className="relative flex flex-col flex-nowrap w-full justify-center items-center lg:items-end z-50 my-12 ">
        <div className="flex flex-row flex-wrap z-50">
          <Textura />
          <div className="flex-1 flex justify-center items-center min-h-[40vh] w-[75vw] z-50">
            <div className="flex items-center w-full z-50">
              <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff] z-50">
                <h2 className="text-3xl lg:text-5xl font-bold py-2 z-50">
                  {t("Hero2")}
                </h2>
                <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
                <p className="text-lg font-bold">{t("HeroText")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
