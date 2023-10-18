"use client";
import { useState } from "react";
import Upload from "../../components/atoms/Upload";
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
  const disabled =
    percent == 0 ||
    !cv ||
    !candidato.nombre ||
    !candidato.email ||
    !candidato.telefono;
  return (
    <form className="text-gray-800">
      <div class="mb-2">
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
      <div class="mb-2">
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
      <div class="mb-2">
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
      <button
        disabled={disabled}
        className={`my-4 text-white ${
          disabled ? "cursor-not-allowed bg-blue-400" : "bg-blue-700"
        }  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 `}
      >
        Empezar aplicación
      </button>
    </form>
  );
}
