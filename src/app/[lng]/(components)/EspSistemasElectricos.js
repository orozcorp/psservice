"use client";
import React from "react";

export default function EspSistemasElectricos({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "SistemasElectricos";
  return (
    <div
      className={`${
        activo ? "h-[26rem]" : "h-44"
      } w-[33vw] border rounded bg-[#155E75] border-[#155E75] text-white flex flex-col flex-nowrap items-center justify-end`}
      onClick={() => {
        if (activeState == "SistemasElectricos") {
          setActive("");
        } else {
          setActive("SistemasElectricos");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg">{title}</div>
      {activo && <div className=" mb-4 text-sm">{text}</div>}
    </div>
  );
}
