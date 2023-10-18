"use client";
import VacanteRow from "./VacanteRow";

export default function VacanteTbody({ vacantes }) {
  return (
    <tbody>
      {vacantes.map((vacante) => (
        <VacanteRow key={vacante._id} vacante={vacante} />
      ))}
    </tbody>
  );
}
