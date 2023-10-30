"use client";
import { useState } from "react";
import Upload from "../../components/atoms/Upload";
import { postData } from "../../lib/helpers/getData";
const MUTATION = `
  mutation Mutation($crearCandidatoId: ID!, $input: CandidatoInput) {
    crearCandidato(id: $crearCandidatoId, input: $input) {
      code
      data
      message
      success
    }
  }

`;
export default function VacanteForm({ setDisplay, vacanteActive, setApply }) {
  const initial = {
    nombre: "",
    email: "",
    telefono: "",
  };
  const [candidato, setCandidato] = useState(initial);
  const [cv, setCv] = useState("");
  const [percent, setPercent] = useState(0);
  const [document, setDocument] = useState({});
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const disabled =
    percent == 0 ||
    !cv ||
    loading ||
    !candidato.nombre ||
    !candidato.email ||
    !candidato.telefono;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const createCandidato = await postData({
        query: MUTATION,
        variables: {
          crearCandidatoId: vacanteActive?._id,
          input: {
            ...candidato,
            cv,
          },
        },
      });
      setLoading(false);
      setPercent(0);
      setDocument({
        name: "",
        extension: "",
      });
      setCv("");
      setReset(true);
      setApply("thankyou");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <form className="text-gray-800" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label
          htmlFor="nombre"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          value={candidato.nombre}
          onChange={(e) =>
            setCandidato({ ...candidato, nombre: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          value={candidato.email}
          onChange={(e) =>
            setCandidato({ ...candidato, email: e.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="telefono"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Telefono
        </label>
        <input
          type="text"
          id="telefono"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          value={candidato.telefono}
          onChange={(e) =>
            setCandidato({ ...candidato, telefono: e.target.value })
          }
        />
      </div>
      <Upload
        title="CV"
        setUrl={setCv}
        percent={percent}
        setPercent={setPercent}
        setDocument={setDocument}
        reset={reset}
        setReset={setReset}
      />
      <div className="flex flex-row flex-wrap w-full justify-between gap-8">
        <button
          onClick={() => setApply("info")}
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Atras
        </button>
        <button
          disabled={disabled}
          className={`my-4 text-white ${
            disabled ? "cursor-not-allowed bg-blue-400" : "bg-blue-700"
          }  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 `}
        >
          Empezar aplicación
        </button>
      </div>
    </form>
  );
}
