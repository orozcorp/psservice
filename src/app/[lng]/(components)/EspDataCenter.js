import Image from "next/image";
import Link from "next/link";

export default function EspDataCenter({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const isActive = activeState === "dataCenter";

  const toggleActive = () => {
    setActive(isActive ? "" : "dataCenter");
  };

  return (
    <div
      className={`${
        isActive
          ? "relative w-full items-start pl-10 duration-1000"
          : "relative w-full lg:w-[20vw] items-center"
      } h-[26rem] rounded flex flex-col justify-end pb-8`}
      onClick={toggleActive}
      role="button"
      aria-expanded={isActive}
    >
      <div className="absolute inset-0 rounded overflow-hidden">
        <Image
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/DATACENTER/HeroV2.jpg"
          alt="View of a data center's server racks"
          fill
          quality={50}
          className="object-cover object-left"
        />
      </div>

      <div className="relative z-10 text-white">
        <div className="font-bold mb-4 text-lg">{title}</div>
        {isActive && (
          <>
            <div className="mb-4 text-sm">{text}</div>
            <Link
              href="/ImplementacionDeDataCenter"
              passHref
              className="border rounded bg-[#155E75] border-[#155E75] text-white px-6 py-2"
            >
              Ver más
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
