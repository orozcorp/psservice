"use client";
import { format_date, format_money } from "../../../../lib/helpers/formatters";
import { useState } from "react";
import VacanteEdit from "./VacanteEdit";
import { AiOutlineEdit } from "react-icons/ai";
export default function VacanteData({ vacante }) {
  const [edit, setEdit] = useState(false);
  return (
    <>
      {edit ? (
        <VacanteEdit vacante={vacante} />
      ) : (
        <>
          <div className="flex flex-row flex-wrap gap-4 my-4 w-full justify-between">
            <h1 className="text-2xl font-bold">
              Nombre de Vacante: {vacante.nombreVacante}
            </h1>
            <button
              onClick={() => setEdit(!edit)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              <AiOutlineEdit className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-row flex-wrap gap-4 my-4 w-full justify-between">
            <p>
              <b>Fecha creacion: </b>
              {format_date(vacante.creado)}
            </p>
            <p>
              <b>Estatus: </b>
              {vacante.estatus}
            </p>
            <p>
              <b># de Candidatos:</b> {vacante.numeroCandidatos}
            </p>
            <p>
              <b>Sueldo: </b>
              {format_money(vacante.sueldo)}
            </p>
            <p>
              <b>Zona de trabajo:</b> {vacante.zonaDeTrabajo}
            </p>
            <p>
              <b>Horario:</b> {vacante.horario}
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-8 justify-between w-full">
            <div className="my-4 max-w-md">
              <b>Descripcion</b>
              <p>{vacante.descripcion}</p>
            </div>
            <div className="my-4 max-w-md">
              <b>Conocimientos</b>
              <p>{vacante.conocimientos}</p>
            </div>
            <div className="my-4 max-w-md">
              <b>Funciones</b>
              <p>{vacante.funciones}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
