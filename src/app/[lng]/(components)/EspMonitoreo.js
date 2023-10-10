export default function EspMonitoreo({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "Monitoreo";
  return (
    <div
      className={`${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-full md:w-[33vw] border rounded flex flex-col flex-nowrap items-start justify-end `}
      onClick={() => {
        if (activeState == "Monitoreo") {
          setActive("");
        } else {
          setActive("Monitoreo");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg ml-4">{title}</div>
      {activo && <div className="ml-4 mb-4 text-sm">{text}</div>}
    </div>
  );
}
