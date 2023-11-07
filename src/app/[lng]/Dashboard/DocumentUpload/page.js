import Link from "next/link";

import { AiOutlineCloudUpload, AiOutlineBars } from "react-icons/ai";

export default function DocumentUpload() {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <h1 className="text-3xl font-bold my-20">
        ¿Qué deseas hacer el día de hoy?
      </h1>
      <div className="flex flex-wrap flex-row justify-around w-full items-center gap-8">
        <Link
          href="/Dashboard/DocumentUpload/UploadDocument"
          className="text-[#0A2473] bg-[#EBEAEA] hover:bg-[#9C9A9A] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
        >
          Subir un documento
          <AiOutlineCloudUpload className="inline-block ml-6 w-6 h-6" />
        </Link>
        <Link
          href="/Dashboard/DocumentUpload/PublishedDocuments"
          className="text-[#0A2473] bg-[#EBEAEA] hover:bg-[#9C9A9A]  focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
        >
          Documentos Publicados
          <AiOutlineBars className="inline-block ml-6 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
