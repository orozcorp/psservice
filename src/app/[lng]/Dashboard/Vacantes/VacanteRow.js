"use client";
import { format_date, format_qty } from "../../../lib/helpers/formatters";
export default function VacanteRow({ vacante }) {
  const {
    nombreVacante,
    descripcion,
    zonaDeTrabajo,
    numeroCandidatos,
    creado,
    estatus,
  } = vacante;
  return (
    <tr className="text-center border-b ">
      <td className="px-6 py-4">{nombreVacante}</td>
      <td className="px-6 py-4">{descripcion}</td>
      <td className="px-6 py-4">{zonaDeTrabajo}</td>
      <td className="px-6 py-4">{format_qty(numeroCandidatos)}</td>
      <td className="px-6 py-4">{format_date(creado)}</td>
      <td className="px-6 py-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
          {estatus}
        </span>
      </td>
    </tr>
  );
}
