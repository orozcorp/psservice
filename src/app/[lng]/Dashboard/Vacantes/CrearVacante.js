"use client";
import { useState } from "react";
import { postData } from "../../../lib/helpers/getData";
import Modal from "../../../components/atoms/Modal";
import Alert from "../../../components/atoms/Alert";
const MUTATION = `
  mutation CrearVacante($input: VacanteInput) {
    crearVacante(input: $input) {
      code
      data
      message
      success
    }
  }
`;

export default function CrearVacante({ display, setDisplay, setRefetch }) {
  const initial = {
    nombreVacante: "",
    sueldo: "",
    descripcion: "",
    conocimientos: "",
    funciones: "",
    horario: "",
    zonaDeTrabajo: "",
  };
  const [vacante, setVacante] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const inserted = await postData({
        query: MUTATION,
        variables: {
          input: { ...vacante, sueldo: Number(vacante.sueldo) },
        },
      });
      setRefetch(true);
      setLoading(false);
      setVacante(initial);
      setDisplay("none");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <Modal title="Crear Vacante" display={display} setDisplay={setDisplay}>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="nombreVacante"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nombre de la Vacante
          </label>
          <input
            type="text"
            id="nombreVacante"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            value={vacante.nombreVacante}
            onChange={(e) =>
              setVacante({ ...vacante, nombreVacante: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-4 my-2">
          <div>
            <label
              htmlFor="sueldo"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Sueldo
            </label>
            <input
              type="number"
              id="sueldo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              value={vacante.sueldo}
              onChange={(e) =>
                setVacante({ ...vacante, sueldo: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="horario"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Horario
            </label>
            <input
              type="text"
              id="horario"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              value={vacante.horario}
              onChange={(e) =>
                setVacante({ ...vacante, horario: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="zonaDeTrabajo"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Zona de Trabajo
            </label>
            <input
              type="text"
              id="zonaDeTrabajo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              value={vacante.zonaDeTrabajo}
              onChange={(e) =>
                setVacante({ ...vacante, zonaDeTrabajo: e.target.value })
              }
            />
          </div>
        </div>
        <div className="my-2">
          <label
            htmlFor="descripcion"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Descripcion"
            required
            value={vacante.descripcion}
            onChange={(e) =>
              setVacante({ ...vacante, descripcion: e.target.value })
            }
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="conocimientos"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Conocimientos
          </label>
          <textarea
            id="conocimientos"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Conocimientos"
            required
            value={vacante.conocimientos}
            onChange={(e) =>
              setVacante({ ...vacante, conocimientos: e.target.value })
            }
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="funciones"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Funciones
          </label>
          <textarea
            id="funciones"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Conocimientos"
            required
            value={vacante.funciones}
            onChange={(e) =>
              setVacante({ ...vacante, funciones: e.target.value })
            }
          />
        </div>
        <button
          disabled={loading}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          {loading ? "Guardando" : "Guardar"}
        </button>
      </form>
      {error && <Alert color="red" type="Error" description={error} />}
    </Modal>
  );
}
