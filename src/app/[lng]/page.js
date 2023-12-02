import { useTranslation } from "../i18n";
import dynamic from "next/dynamic";
import LoadingHero from "./(components)/LoadingHero";
const Hero = dynamic(() => import("./(components)/Hero"), {
  loading: () => <LoadingHero />,
});
const SomosIngenieria = dynamic(
  () => import("./(components)/SomosIngenieria"),
  {
    loading: () => <LoadingHero />,
  }
);
const Especializacion = dynamic(
  () => import("./(components)/Especializacion"),
  {
    loading: () => <LoadingHero />,
  }
);
const Soluciones = dynamic(() => import("./(components)/Soluciones"), {
  loading: () => <LoadingHero />,
});
const Clientes = dynamic(() => import("./(components)/Clientes"), {
  loading: () => <LoadingHero />,
});
const Certificaciones = dynamic(
  () => import("./(components)/Certificaciones"),
  {
    loading: () => <LoadingHero />,
  }
);
const Aliados = dynamic(() => import("./(components)/Aliados"), {
  loading: () => <LoadingHero />,
});
import Unete from "./(components)/Unete";
import Responsabilidad from "./(components)/Responsabilidad";
import Contacto from "./(components)/Contacto";

import WAClick from "./(components)/WAClick";
import PowerLine from "../components/SVG/PowerLine";
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Landing");
  return (
    <div className="w-full">
      <WAClick />
      <Hero t={t} />
      <SomosIngenieria t={t} />
      <PowerLine />
      <Especializacion t={t} />
      <Soluciones t={t} />
      <Clientes t={t} />
      <Certificaciones t={t} />
      <Aliados t={t} />
      <Contacto t={t} />
      <Responsabilidad t={t} />
    </div>
  );
}
