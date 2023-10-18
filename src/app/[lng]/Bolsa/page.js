import Hero from "./Hero";
import Somos from "./Somos";
import VacanteMain from "./VacanteMain";
import { useTranslation } from "../../i18n";
export default async function Reclutamiento({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Bolsa");
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <VacanteMain t={t} />
    </div>
  );
}
