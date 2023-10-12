import React from "react";
import UploadSide from "../UploadDocument/UploadSide";
import { getData } from "../../../../lib/helpers/getData";
import DocumentTable from "./DocumentTable";
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

export default async function PublishedDocuments() {
  const query = await getData({
    query: QUERY,
  });
  const initialDocuments = query?.getDocuments || [];
  return (
    <>
      <div className="border border-[#324BA6] p-8 w-full mb-10">
        {initialDocuments.length < 1 && <h2>Sin documentos</h2>}
        {initialDocuments.length > 0 && (
          <DocumentTable initialDocuments={initialDocuments} />
        )}
      </div>
      <UploadSide />
    </>
  );
}
