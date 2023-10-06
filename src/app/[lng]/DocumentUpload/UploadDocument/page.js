import { getData } from "../../../lib/helpers/getData";
import UploadSide from "./UploadSide";
import LastDocument from "./LastDocument";
// const QUERY = `
//   query GetLastDocument {
//     getLastDocument {
//       _id
//       createdAt
//       estatus
//       extension
//       name
//       url
//     }
//   }
// `;

export default async function UploadDocument() {
  // const query = await getData({
  //   query: QUERY,
  // });
  // const lastDocument = query?.getLastDocument;
  const lastDocument = null;
  return (
    <div className="flex flex-col flex-nowrap justify-center items-start w-full h-full mt-10">
      {lastDocument && <LastDocument lastDocument={lastDocument} />}
      <UploadSide />
    </div>
  );
}
