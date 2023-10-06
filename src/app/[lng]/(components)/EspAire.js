export default function EspAire({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "AireAcondicionado";
  return (
    <div
      className={`${
        activo ? "h-[26rem] duration-1000" : "h-20"
      } w-60 border rounded flex flex-col flex-nowrap items-start justify-end `}
      onClick={() => {
        if (activeState == "AireAcondicionado") {
          setActive("");
        } else {
          setActive("AireAcondicionado");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg ml-4">{title}</div>
      {activo && <div className="ml-4 mb-4 text-sm">{text}</div>}
    </div>
  );
}
