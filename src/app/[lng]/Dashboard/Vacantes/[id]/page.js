import { format_date } from "../../../../lib/helpers/formatters";
import { getData } from "../../../../lib/helpers/getData";
import Link from "next/link";
import VacanteData from "./VacanteData";
const QUERY = `
  query ObtenerVacante($obtenerVacanteId: ID!) {
    obtenerVacante(id: $obtenerVacanteId) {
      _id
      candidatos {
        _id
        creado
        cv
        email
        nombre
        telefono
      }
      conocimientos
      creado
      descripcion
      estatus
      funciones
      horario
      nombreVacante
      numeroCandidatos
      sueldo
      zonaDeTrabajo
    }
  }`;
export default async function Vacante({ params }) {
  const { id } = params;
  const query = await getData({
    query: QUERY,
    variables: {
      obtenerVacanteId: id,
    },
  });
  const vacante = query?.obtenerVacante || [];
  return (
    <div className="w-full">
      <VacanteData vacante={vacante} />
      <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr className="text-center">
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Telefono
              </th>
              <th scope="col" className="px-6 py-3">
                CV
              </th>
            </tr>
          </thead>
          <tbody>
            {vacante.candidatos.map((val) => (
              <tr key={val._id} className="text-center">
                <td className="px-6 py-3">{format_date(val.creado)}</td>
                <td className="px-6 py-3">{val.nombre}</td>
                <td className="px-6 py-3">{val.email}</td>
                <td className="px-6 py-3">{val.telefono}</td>
                <td className="px-6 py-3">
                  <Link
                    href={val.cv}
                    className="bg-blue-100 text-blue-800  font-bold mr-2 px-2.5 py-0.5 rounded "
                  >
                    CV
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
