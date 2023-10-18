import React from "react";

export default function VacanteData({ apply, setApply, vacanteActive }) {
  return (
    <div className="text-gray-900 flex flex-col flex-nowrap gap-2">
      <div>
        <div className="font-bold">Descripcion</div>
        <div>{vacanteActive?.descripcion}</div>
      </div>
      <div>
        <div className="font-bold">Conocimientos</div>
        <div>{vacanteActive?.conocimientos}</div>
      </div>
      <div>
        <div className="font-bold">Funciones</div>
        <div>{vacanteActive?.funciones}</div>
      </div>
      <div className="flex flex-row flex-wrap gap-2 justify-between">
        <div>
          <div className="font-bold">Horario</div>
          <div>{vacanteActive?.horario}</div>
        </div>
        <div>
          <div className="font-bold">Zona de trabajo</div>
          <div>{vacanteActive?.zonaDeTrabajo}</div>
        </div>
      </div>
      <button
        onClick={() => setApply(true)}
        className="self-start my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Aplicar
      </button>
    </div>
  );
}
