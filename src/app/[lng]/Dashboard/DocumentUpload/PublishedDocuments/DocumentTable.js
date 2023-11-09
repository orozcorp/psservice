"use client";
import { useState, useEffect } from "react";
import DocumentRow from "./DocumentRow";
import { format_date } from "../../../../lib/helpers/formatters";
import { AiOutlineDelete } from "react-icons/ai";
import { postData, getData } from "../../../../lib/helpers/getData";
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
const MUTATION = `
  mutation Mutation($ids: [ID!]) {
    deleteDocument(ids: $ids) {
      code
      data
      message
      success
    }
  }
`;
export default function DocumentTable({ initialDocuments }) {
  const [documents, setDocuments] = useState(initialDocuments);
  const [sortCriteria, setSortCriteria] = useState(null);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchDocuments = async () => {
    const query = await getData({
      query: QUERY,
    });
    setDocuments(query?.getDocuments || []);
  };
  useEffect(() => {
    if (sortCriteria) {
      const sortedDocs = [...documents].sort((a, b) => {
        if (a[sortCriteria] < b[sortCriteria]) return -1;
        if (a[sortCriteria] > b[sortCriteria]) return 1;
        return 0;
      });
      setDocuments(sortedDocs);
    }
  }, [documents, sortCriteria]);
  const handleDelete = async () => {
    setLoading(true);
    if (selectedDocuments.length === 0) return null;
    try {
      const deletedDocuments = await postData({
        query: MUTATION,
        variables: {
          ids: selectedDocuments.map((document) => document._id),
        },
      });
      setLoading(false);
      setSelectedDocuments([]);
      fetchDocuments();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-20  w-fit">
        <table className="w-fit text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Selecciona para borrar
              </th>
              <th scope="col" className="px-6 py-3">
                <div
                  className="flex items-center"
                  onClick={() => {
                    setSortCriteria("name");
                  }}
                >
                  Nombre del documento
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Estado</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div
                  className="flex items-center"
                  onClick={() => {
                    setSortCriteria("createdAt");
                  }}
                >
                  Fecha de actualización
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </div>
              </th>
              <th scope="col">
                <div
                  className="flex items-center"
                  onClick={() => {
                    setSortCriteria("extension");
                  }}
                >
                  Extensión
                  <svg
                    className="w-3 h-3 ml-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <DocumentRow
                key={document._id}
                document={document}
                selectedDocuments={selectedDocuments}
                setSelectedDocuments={setSelectedDocuments}
              />
            ))}
          </tbody>
        </table>
      </div>
      {selectedDocuments.length > 0 && (
        <div className="flex flex-col flex-nowrap justify-end border border-gray-200 px-4 py-2 rounded">
          <div className="flex flex-col flex-nowrap gap-2">
            {selectedDocuments.map((document) => (
              <div
                key={document._id}
                className="border border-gray-600 p-2 rounded"
              >{`${document.name} - ${document.extension} - ${format_date(
                document.createdAt
              )}`}</div>
            ))}
          </div>
          <button
            className="my-8 rounded px-2 py-2 flex flex-row flex-wrap items-center justify-center gap-4 bg-[#EBEAEA]"
            onClick={handleDelete}
            disabled={loading}
          >
            Borrar archivos
            <div className="bg-[#A63232] text-white rounded p-2">
              <AiOutlineDelete className="w-6 h-6" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
