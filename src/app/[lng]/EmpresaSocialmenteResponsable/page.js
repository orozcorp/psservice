import { useTranslation } from "../../i18n";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("./Hero"));
const Somos = dynamic(() => import("./Somos"));
const Hero2 = dynamic(() => import("./Hero2"));
const Conocimiento = dynamic(() => import("./Conocimiento"));
const Respetamos = dynamic(() => import("./Respetamos"));
import { getData } from "../../lib/helpers/getData";
const QUERY = `
query GetDocuments {
  getDocuments {
    _id
    createdAt
    estatus
    extension
    name
    url
  }
}
`;
export default async function RSE({ params: { lng } }) {
  const { t } = await useTranslation(lng, "RSE");
  const query = await getData({
    query: QUERY,
  });
  const documentos = query?.getDocuments || [];
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Respetamos t={t} />
      <Conocimiento t={t} lng={lng} documentos={documentos} />
    </div>
  );
}
