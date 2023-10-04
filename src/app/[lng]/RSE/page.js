import { useTranslation } from "../../i18n";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Respetamos from "./Respetamos";
import Conocimiento from "./Conocimiento";
export default async function RSE({ params: { lng } }) {
  const { t } = await useTranslation(lng, "RSE");
  return (
    <div className="w-full mb-4">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Respetamos t={t} />
      <Conocimiento t={t} lng={lng} documentos={[]} />
    </div>
  );
}
