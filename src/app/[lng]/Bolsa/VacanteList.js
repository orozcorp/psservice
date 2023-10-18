"use client";
import { useState } from "react";
import VacanteSingle from "./VacanteSingle";
import VacanteModal from "./VacanteModal";
export default function VacanteList({ vacantes }) {
  const [vacanteActive, setVacanteActive] = useState({});
  const [display, setDisplay] = useState("none");
  return (
    <>
      <VacanteModal
        display={display}
        setDisplay={setDisplay}
        vacanteActive={vacanteActive}
      />
      <div className="p-4 my-4 rounded bg-gradient-to-b from-[#C0D0EC] to-[#DDDDDD] text-[#3F3F3F] w-[80%]">
        {vacantes.map((vacante) => (
          <VacanteSingle
            key={vacante._id}
            vacante={vacante}
            setVacanteActive={setVacanteActive}
            setDisplay={setDisplay}
          />
        ))}
      </div>
    </>
  );
}
