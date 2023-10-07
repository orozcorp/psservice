import ISO_14001RSE from "../../components/SVG/Certificaciones/ISO_14001RSE";
import HeroBgImage from "../../components/atoms/HeroBgImage";
import Image from "next/image";

export default function Hero2({ t }) {
  return (
    <div
      className="relative flex justify-start items-center min-h-[60vh] w-[100vw]"
      style={{ zIndex: 1 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <HeroBgImage
          lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/HERO2_DARK.jpg"
          darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/OTHER/RSE/HERO2_DARK.jpg"
        />
      </div>

      {/* Content */}
      <ISO_14001RSE width={300} height={200} />
      <div className="max-w-2xl">
        <h2 className="text-3xl lg:text-5xl text-[#002772] dark:text-white font-bold py-16">
          {t("Hero1")}
        </h2>
        <button className="py-2 px-4 bg-[#5D001D] text-white rounded-lg">
          {t("Experto")}
        </button>
      </div>
    </div>
  );
}
