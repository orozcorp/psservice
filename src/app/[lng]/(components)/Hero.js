import Image from "next/image";

export default function Hero({ t }) {
  return (
    <div
      className="relative flex justify-center items-center min-h-[60vh] w-[100vw]"
      style={{ zIndex: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <Image
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/HERO1.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          quality={100}
        />
      </div>

      {/* Content */}
      <Image
        src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
        width={170}
        height={60}
        className="ml-0 lg:ml-[-11rem]"
        loading="lazy"
        alt="PS service"
      />
      <div className="max-w-2xl">
        <h2 className="text-3xl lg:text-5xl text-[#324BA6] dark:text-white font-bold py-16">
          {t("Hero1")}
        </h2>
        <button className="py-2 px-4 bg-[#5D001D] text-white">
          {t("Experto")}
        </button>
      </div>
    </div>
  );
}
