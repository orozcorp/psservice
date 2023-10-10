import Image from "next/image";

export default function EspAire({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "AireAcondicionado";

  return (
    <div
      className={`relative ${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-full md:w-[33vw]  rounded flex flex-col flex-nowrap items-start justify-end`}
      onClick={() => {
        if (activeState == "AireAcondicionado") {
          setActive("");
        } else {
          setActive("AireAcondicionado");
        }
      }}
    >
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 rounded overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://psserviceimages.s3.us-east-2.amazonaws.com/Landing/AIRE_REAL.jpg"
            alt="Background"
            layout="fill"
            quality={100}
            className="object-cover object-right"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="font-bold mb-4 text-lg ml-4">{title}</div>
        {activo && <div className="ml-4 mb-4 text-sm">{text}</div>}
      </div>
    </div>
  );
}
