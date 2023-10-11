import Link from "next/link";

export default function EspMonitoreo({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "Monitoreo";
  return (
    <div
      className={`${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-full md:w-[33vw] border rounded flex flex-col flex-nowrap items-center justify-end pb-4`}
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
  );
}
