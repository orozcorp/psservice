import Textura from "../(components)/Textura";
export default function Somos({ t }) {
  return (
    <>
      <div className="relative flex flex-col flex-nowrap w-full justify-center items-center lg:items-end z-40 my-12 ">
        <div className="flex flex-row flex-wrap z-40">
          <Textura />
          <div className="flex-1 flex justify-center items-center min-h-[40vh] w-[75vw] z-40">
            <div className="flex flex-col justify-start items-start w-full z-40">
              <div className="bg-gradient-to-r from-[#1E69B4] to-[#154B24] p-4 w-full lg:w-[75%] rounded-lg mb-4 text-white">
                {t("greenbox")}
              </div>
              <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff] z-40">
                <h2 className="text-3xl lg:text-5xl font-bold py-2 z-40">
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
