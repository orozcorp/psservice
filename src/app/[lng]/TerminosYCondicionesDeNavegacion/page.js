"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Terminos() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <div className="flex flex-col flex-nowrap justify-center items-center w-[90%]">
        <Document
          file="https://psserviceimages.s3.us-east-2.amazonaws.com/LEGAL-Terminos+y+Condiciones+POWER+.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="flex flex-row flex-wrap gap-8 justify-center items-center w-full my-8">
          {pageNumber > 1 && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Página Anterior
            </button>
          )}
          <p>
            Page {pageNumber} of {numPages}
          </p>
          {pageNumber < numPages && (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Próxima Página
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
