import { useTranslation } from "../../i18n";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Conocimiento from "./Conocimiento";
import Contacta from "./Contacta";
import Contacto from "../(components)/Contacto";
import Hero3 from "./Hero3";
export default async function DataCenter({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Monitoreo");
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Conocimiento t={t} />
      {/* <Contacta t={t} /> */}
      <Contacto t={t} />
      <Hero3 t={t} />
    </div>
  );
}
