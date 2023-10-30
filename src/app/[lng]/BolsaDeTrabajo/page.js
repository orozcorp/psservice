import Hero from "./Hero";
import Somos from "./Somos";
import VacanteMain from "./VacanteMain";
import { useTranslation } from "../../i18n";
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

export default async function Reclutamiento({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Bolsa");
  const query = await getData({
    query: QUERY,
  });
  const vacantes = query?.obtenerVacantes || [];
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <VacanteMain t={t} vacantes={vacantes} />
    </div>
  );
}
