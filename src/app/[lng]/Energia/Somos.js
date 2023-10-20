export default function Somos({ t }) {
  return (
    <>
      <div className="flex flex-col flex-nowrap w-full justify-center items-center lg:items-end my-8 ">
        <div className="flex justify-center items-center min-h-[40vh] w-[75vw]  ">
          <div className="flex items-center w-full">
            <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#fff]">
              <h2 className="text-3xl lg:text-5xl  font-bold py-2">
                {t("Hero2")}
              </h2>
              <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
              <p className="text-lg font-bold">{t("HeroText")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
