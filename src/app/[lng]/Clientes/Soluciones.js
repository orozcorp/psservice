import Image from "next/image";

export default function Soluciones({ bgImage, title, points }) {
  return (
    <div
      className={`relative flex flex-col flex-nowrap items-center justify-center p-8 min-h-[600px] flex-1 text-white text-center`}
    >
      <Image
        src={bgImage}
        alt="Background Image"
        fill
        quality={100}
        className=" object-cover object-center z-0"
      />
      <div
        className="p-4 z-50 font-bold"
        style={{ backgroundColor: "rgba(39, 39, 42, 0.3)" }}
      >
        <div className="my-8">{title}</div>
        <div>{points}</div>
      </div>
    </div>
  );
}
