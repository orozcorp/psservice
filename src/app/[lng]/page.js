import { useTranslation } from "../i18n";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("./(components)/Hero"));
import SomosIngenieria from "./(components)/SomosIngenieria";
import Especializacion from "./(components)/Especializacion";
import Soluciones from "./(components)/Soluciones";
import Clientes from "./(components)/Clientes";
import Certificaciones from "./(components)/Certificaciones";
import Aliados from "./(components)/Aliados";
import Unete from "./(components)/Unete";
import Responsabilidad from "./(components)/Responsabilidad";
import Contacto from "./(components)/Contacto";
import LoadingHero from "./(components)/LoadingHero";
import WAClick from "./(components)/WAClick";
import PowerLine from "../components/SVG/PowerLine";
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Landing");
  return (
    <div className="w-full">
      <WAClick />
      <Suspense fallback={<LoadingHero />}>
        <Hero t={t} />
      </Suspense>
      <Suspense fallback={<LoadingHero />}>
        <SomosIngenieria t={t} />
      </Suspense>
      <PowerLine />
      <Suspense fallback={<LoadingHero />}>
        <Especializacion t={t} />
      </Suspense>
      <Suspense fallback={<LoadingHero />}>
        <Soluciones t={t} />
      </Suspense>
      <Suspense fallback={<LoadingHero />}>
        <Clientes t={t} />
      </Suspense>
      <Suspense fallback={<LoadingHero />}>
        <Certificaciones t={t} />
      </Suspense>
      <Aliados t={t} />
      <Contacto t={t} />
      <Responsabilidad t={t} />
    </div>
  );
}
