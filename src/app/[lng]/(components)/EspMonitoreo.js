import Link from "next/link";

export default function EspMonitoreo({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "Monitoreo";
  return (
    <div
      className={`${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-full lg:w-[33vw]  rounded flex flex-col flex-nowrap items-center justify-end pb-4 bg-[#5D001D] text-white`}
      onClick={() => {
        if (activeState == "Monitoreo") {
          setActive("");
        } else {
          setActive("Monitoreo");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg ">{title}</div>
      {activo && (
        <>
          <div className="mb-4 text-sm px-8">{text}</div>
          <Link
            className=" rounded bg-[#155E75] border-[#155E75] text-white px-6 py-2"
            href="/MonitoreoYControlDeSeguridad"
          >
            Ver más
          </Link>
        </>
      )}
    </div>
  );
}
