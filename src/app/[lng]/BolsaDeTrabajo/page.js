import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./Hero"));
const Somos = dynamic(() => import("./Somos"));
const VacanteMain = dynamic(() => import("./VacanteMain"));
import { getData } from "../../lib/helpers/getData";

const QUERY = `
query ObtenerVacantes {
  obtenerVacantes {
    creado

    estatus
    _id
    nombreVacante
      descripcion
    conocimientos
    funciones
    horario
    zonaDeTrabajo
  }
}
`;

export default async function Reclutamiento() {
  const query = await getData({
    query: QUERY,
  });
  const vacantes = query?.obtenerVacantes || [];
  return (
    <div className="w-full">
      <Hero />
      <Somos />
      <VacanteMain vacantes={vacantes} />
    </div>
  );
}
