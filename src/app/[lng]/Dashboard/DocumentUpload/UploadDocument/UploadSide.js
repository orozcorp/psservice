"use client";
import { useState, useEffect } from "react";
import Upload from "../../../../components/atoms/Upload";
import { AiOutlineCloudUpload, AiOutlineBars } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { postData } from "../../../../lib/helpers/getData";
import Alert from "../../../../components/atoms/Alert";
import AlertCat from "../../../../components/atoms/AlertCat";
const MUTATION = `
  mutation CreateDocument($document: InputDocument) {
    createDocument(document: $document) {
      code
      data
      message
      success
    }
  }
`;
export default function UploadSide() {
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(false);
  const disabled = percent !== 100 || loading;
  const [error, setError] = useState("");
  const [document, setDocument] = useState({
    name: "",
    extension: "",
  });
  const [result, setResult] = useState("");
  const [reset, setReset] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult("");
    if (!url) return null;
    setLoading(true);
    try {
      const createDocument = await postData({
        query: MUTATION,
        variables: {
          document: {
            url: url,
            ...document,
          },
        },
      });
      setResult(createDocument?.createDocument?.data);
      setLoading(false);
      setPercent(0);
      setDocument({
        name: "",
        extension: "",
      });
      setUrl("");
      setReset(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  useEffect(() => {
    if (result)
      setTimeout(() => {
        setResult("");
      }, 3000);
  }, [result, setResult]);
  return (
    <>
      {result && (
        <AlertCat
          color="red"
          title="Archivo cargado exitosamente"
          data={result}
        />
      )}
      <div className="flex flex-wrap flex-row w-full justify-center items-center gap-4">
        <form
          className="flex flex-row flex-wrap gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <Upload
            title="SUBIR UN NUEVO ARCHIVO"
            setUrl={setUrl}
            percent={percent}
            setPercent={setPercent}
            setDocument={setDocument}
            reset={reset}
            setReset={setReset}
          />
          <button
            disabled={disabled}
            className={`mt-8  ${
              disabled
                ? "bg-[#9C9A9A] text-white"
                : "bg-[#EBEAEA] text-[#0A2473]"
            }  hover:bg-[#9C9A9A] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
          >
            Subir un documento
            <AiOutlineCloudUpload className="inline-block ml-6 w-6 h-6 text-white bg-[#48A632] rounded" />
          </button>
        </form>
        <Link
          href="/en/DocumentUpload/PublishedDocuments"
          className="mt-8 bg-[#EBEAEA] text-[#0A2473] hover:bg-[#9C9A9A] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center"
        >
          Documentos publicados
          <AiOutlineBars className="inline-block ml-6 w-6 h-6 text-white bg-[#324BA6] rounded" />
        </Link>
        <button
          onClick={signOut}
          className="mt-8 bg-[#EBEAEA] text-[#0A2473] hover:bg-[#9C9A9A] focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Salir de administrador
          <FiLogOut className="inline-block ml-6 w-6 h-6 text-white bg-[#A63232] rounded mx-4 " />
        </button>
      </div>
      {error && <Alert color="red" type="Error" description={error} />}
    </>
  );
}
