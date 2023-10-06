"use client";

export default function EspDataCenter({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "dataCenter";
  return (
    <div
      className={`
        ${
          activo
            ? "w-full items-start pl-10 duration-1000"
            : "w-60 ml-0 md:ml-[-19rem] items-center"
        }
       h-[26rem] border rounded  flex flex-col flex-nowrap  justify-end`}
      onClick={() => {
        if (activeState == "dataCenter") {
          setActive("");
        } else {
          setActive("dataCenter");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg">{title}</div>
      {activo && <div className=" mb-4 text-sm">{text}</div>}
    </div>
  );
}
