import { useTranslation } from "../i18n";
import Hero from "./(components)/Hero";
import SomosIngenieria from "./(components)/SomosIngenieria";
import Especializacion from "./(components)/Especializacion";
import Soluciones from "./(components)/Soluciones";
import Clientes from "./(components)/Clientes";
import Certificaciones from "./(components)/Certificaciones";
import Aliados from "./(components)/Aliados";
import Unete from "./(components)/Unete";
import Responsabilidad from "./(components)/Responsabilidad";
import Contacto from "./(components)/Contacto";
import WAClick from "./(components)/WAClick";
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Landing");
  return (
    <div className="w-full">
      <WAClick />
      <Hero t={t} />
      <SomosIngenieria t={t} />
      <Especializacion t={t} />
      <Soluciones t={t} />
      <Clientes t={t} />
      <Certificaciones t={t} />
      <Aliados t={t} />
      <Contacto t={t} />
      {/* <Unete t={t} /> */}
      <Responsabilidad t={t} />
    </div>
  );
}
