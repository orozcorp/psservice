export default function Hero2({ t }) {
  return (
    <div className="flex flex-row flex-wrap justify-start items-center min-h-[60vh] w-[100vw] border gap-2">
      <div className="border w-[300px] h-[200px] ml-10 mr-4" />
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl text-[#324BA6] dark:text-white font-bold py-16 max-w-lg">
            {t("Hero3")}
          </h2>
        </div>
      </div>
    </div>
  );
}
