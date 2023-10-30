import Image from "next/image";
import Link from "next/link";
export default function EspAire({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "AireAcondicionado";

  return (
    <div
      className={`relative ${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-full lg:w-[33vw]  rounded flex flex-col flex-nowrap items-center justify-end text-white pb-4`}
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
            src="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/especialidades_AC.jpg"
            alt="Background"
            fill
            quality={100}
            className="object-cover object-right"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="font-bold mb-4 text-lg ml-8">{title}</div>
        {activo && (
          <>
            <div className="mb-4 text-sm px-8">{text}</div>
            <Link
              className="border rounded bg-[#155E75] border-[#155E75] text-white px-6 py-2 mx-8"
              href="/AireAcondicionadosDePrecision"
            >
              Ver más
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
