import Image from "next/image";
import Link from "next/link";

export default function EspDataCenter({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "dataCenter";
  return (
    <div
      className={`
        ${
          activo
            ? "relative w-full items-start pl-10 duration-1000"
            : "relative w-full md:w-[20vw]  items-center"
        }
       h-[26rem]  rounded flex flex-col flex-nowrap justify-end pb-8`}
      onClick={() => {
        if (activeState == "dataCenter") {
          setActive("");
        } else {
          setActive("dataCenter");
        }
      }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/DATACENTER/Hero.jpg"
            alt="Background"
            fill
            quality={100}
            className="object-cover object-left"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="font-bold mb-4 text-lg">{title}</div>
        {activo && (
          <>
            <div className="mb-4 text-sm">{text}</div>
            <Link
              className="border rounded bg-[#155E75] border-[#155E75] text-white px-6 py-2"
              href="/DataCenter"
            >
              Ver más
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
