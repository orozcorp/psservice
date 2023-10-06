import { useTranslation } from "../../i18n";
import Hero from "./Hero";
import Somos from "./Somos";
import Hero2 from "./Hero2";
import Respetamos from "./Respetamos";
import Conocimiento from "./Conocimiento";
import { getData } from "../../lib/helpers/getData";
// const QUERY = `
// query GetDocuments {
//   getDocuments {
//     _id
//     createdAt
//     estatus
//     extension
//     name
//     url
//   }
// }
// `;
export default async function RSE({ params: { lng } }) {
  const { t } = await useTranslation(lng, "RSE");
  // const query = await getData({
  //   query: QUERY,
  // });
  // const documentos = query?.getDocuments || [];
  const documentos = [];
  return (
    <div className="w-full mb-96">
      <Hero t={t} />
      <Somos t={t} />
      <Hero2 t={t} />
      <Respetamos t={t} />
      <Conocimiento t={t} lng={lng} documentos={documentos} />
    </div>
  );
}
