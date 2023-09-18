import { useTranslation } from "../i18n";
import Hero from "./(components)/Hero";
import SomosIngenieria from "./(components)/SomosIngenieria";
import Especializacion from "./(components)/Especializacion";
import Soluciones from "./(components)/Soluciones";
import Clientes from "./(components)/Clientes";
import Certificaciones from "./(components)/Certificaciones";
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Landing");
  return (
    <div className="w-full">
      <Hero t={t} />
      <SomosIngenieria t={t} />
      <Especializacion t={t} />
      <Soluciones t={t} />
      <Clientes t={t} />
      <Certificaciones t={t} />
    </div>
  );
}
