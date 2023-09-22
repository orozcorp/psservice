import Image from "next/image";

export default function Hero({ t }) {
  return (
    <div className="flex justify-center items-center h-[60vh] w-[100vw]">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
        <Image
          src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
          width={170}
          height={60}
          style={{
            width: "170px",
            height: "60px",
          }}
          className="ml-0 md:ml-[-11rem]"
          loading="lazy"
          alt="PS service"
        />
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl text-[#324BA6] dark:text-white font-bold py-16">
            {t("Hero1")}
          </h2>
          <button className="py-2 px-4 bg-[#5D001D] text-white">
            {t("Experto")}
          </button>
        </div>
      </div>
    </div>
  );
}
