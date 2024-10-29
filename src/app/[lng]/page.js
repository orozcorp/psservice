import dynamic from "next/dynamic";
import Responsabilidad from "./(components)/Responsabilidad";
import Contacto from "./(components)/Contacto";
import WAClick from "./(components)/WAClick";
import PowerLine from "../components/SVG/PowerLine";

// Components
const Hero = dynamic(() => import("./(components)/Hero"));
const SomosIngenieria = dynamic(() => import("./(components)/SomosIngenieria"));
const Aliados = dynamic(() => import("./(components)/Aliados"));
const Especializacion = dynamic(() => import("./(components)/Especializacion"));
const Soluciones = dynamic(() => import("./(components)/Soluciones"));
const Clientes = dynamic(() => import("./(components)/Clientes"));
const Certificaciones = dynamic(() => import("./(components)/Certificaciones"));

export default function Page() {
  return (
    <>
      <WAClick />
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
    </>
  );
}
