"use client";
import { useState, useEffect } from "react";
import CrearVacante from "./CrearVacante";
import VacanteTbody from "./VacanteTbody";
import { getData } from "../../../lib/helpers/getData";
const QUERY = `
query ObtenerVacantes {
  obtenerVacantes {
    creado
    descripcion
    estatus
    _id
    nombreVacante
    numeroCandidatos
    zonaDeTrabajo
  }
}
`;
export default function Vacantes({}) {
  const [display, setDisplay] = useState("none");
  const [refetch, setRefetch] = useState(true);
  const [vacantes, setVacantes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const query = await getData({
        query: QUERY,
      });
      const vctes = query?.obtenerVacantes || [];
      setVacantes(vctes);
      setRefetch(false);
    }
    fetchData();
  }, [refetch, setRefetch, setVacantes, vacantes]);
  return (
    <>
      <CrearVacante
        display={display}
        setDisplay={setDisplay}
        setRefetch={setRefetch}
      />
      <div className="flex flex-col flex-nowrap w-full justify-center items-center">
        <div className="flex flex-row flex-wrap gap-8 w-full justify-around">
          <h1 className="text-3xl font-bold">Vacantes</h1>
          <button
            onClick={() => setDisplay("flex")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            Agregar Vacante
          </button>
        </div>
        <div className="relative overflow-x-auto my-8">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Descripcion
                </th>
                <th scope="col" className="px-6 py-3">
                  Zona de Trabajo
                </th>
                <th scope="col" className="px-6 py-3">
                  # Candidatos
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha de creación
                </th>
                <th scope="col" className="px-6 py-3">
                  Estatus
                </th>
              </tr>
            </thead>
            <VacanteTbody vacantes={vacantes} />
          </table>
        </div>
      </div>
    </>
  );
}
