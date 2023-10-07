export default function Hero({ t }) {
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-[100vw] border">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
        <div className="max-w-2xl">
          <h2 className="text-3xl lg:text-5xl text-[#0A2473] dark:text-white font-bold py-16">
            {t("Hero1")}
          </h2>
          <button className="py-2 px-4 bg-[#5D001D] text-white rounded-lg">
            {t("Experto")}
          </button>
        </div>
      </div>
    </div>
  );
}
