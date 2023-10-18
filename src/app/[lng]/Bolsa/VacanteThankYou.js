"use client";
export default function VacanteThankYou({ setDisplay }) {
  return (
    <div className="flex flex-col flex-nowrap">
      <div>Gracias por tu información, nos pondremos en contacto</div>
      <button
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
