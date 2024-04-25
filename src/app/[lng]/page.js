import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingHero from "./(components)/LoadingHero";
import Responsabilidad from "./(components)/Responsabilidad";
import Contacto from "./(components)/Contacto";
import WAClick from "./(components)/WAClick";
import PowerLine from "../components/SVG/PowerLine";

// Dynamic imports with a single loading component
const loadable = (importFunc) =>
  dynamic(importFunc, { suspense: true, loading: LoadingHero });

// Components
const Hero = loadable(() => import("./(components)/Hero"));
const SomosIngenieria = loadable(() =>
  import("./(components)/SomosIngenieria")
);
const Especializacion = loadable(() =>
  import("./(components)/Especializacion")
);
const Soluciones = loadable(() => import("./(components)/Soluciones"));
const Clientes = loadable(() => import("./(components)/Clientes"));
const Certificaciones = loadable(() =>
  import("./(components)/Certificaciones")
);
const Aliados = loadable(() => import("./(components)/Aliados"));

export default function Page() {
  return (
    <div className="w-full">
      <WAClick />
      <Suspense fallback={<LoadingHero />}>
        <Hero />
        <SomosIngenieria />
        <PowerLine />
        <Especializacion />
        <Soluciones />
        <Clientes />
        <Certificaciones />
        <Aliados />
        <Contacto />
        <Responsabilidad />
      </Suspense>
    </div>
  );
}
