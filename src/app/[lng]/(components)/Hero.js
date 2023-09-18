import Image from "next/image";

export default function Hero({ t }) {
  return (
    <div
      className="flex flex-row flex-wrap justify-center"
      style={{ width: "100vw", height: "60vh" }}
    >
      <div className="flex flex-row flex-nowrap w-3/4 gap-16 items-center">
        <Image
          src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
          width={170}
          height={60}
          style={{ width: "170px", height: "60px" }}
          loading="lazy"
          alt="PS service"
        />
        <div className="max-w-2xl">
          <h2 className="text-5xl text-[#324BA6] dark:text-white font-bold py-16">
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
