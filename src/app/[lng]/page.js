import { useTranslation } from "../i18n";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./(components)/Hero"));
const SomosIngenieria = dynamic(() => import("./(components)/SomosIngenieria"));
const Especializacion = dynamic(() => import("./(components)/Especializacion"));
const Soluciones = dynamic(() => import("./(components)/Soluciones"));
const Clientes = dynamic(() => import("./(components)/Clientes"));
const Certificaciones = dynamic(() => import("./(components)/Certificaciones"));
const Aliados = dynamic(() => import("./(components)/Aliados"));
const Unete = dynamic(() => import("./(components)/Unete"));
const Responsabilidad = dynamic(() => import("./(components)/Responsabilidad"));
const Contacto = dynamic(() => import("./(components)/Contacto"));
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
