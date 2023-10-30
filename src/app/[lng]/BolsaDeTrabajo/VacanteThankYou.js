"use client";
export default function VacanteThankYou({ setDisplay, setApply }) {
  return (
    <div className="flex flex-col flex-nowrap text-gray-800">
      <div>Gracias por tu información, nos pondremos en contacto</div>
      <button
        className="my-4 self-start focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        onClick={() => {
          setDisplay("none");
          setApply("info");
        }}
      >
        Cerrar
      </button>
    </div>
  );
}
