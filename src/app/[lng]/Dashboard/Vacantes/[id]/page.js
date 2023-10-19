import { format_date, format_money } from "../../../../lib/helpers/formatters";
import { getData } from "../../../../lib/helpers/getData";
import Link from "next/link";
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
      <h1 className="text-2xl font-bold">
        Nombre de Vacante: {vacante.nombreVacante}
      </h1>
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
                  <Link href={val.cv}>CV</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
