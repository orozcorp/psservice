export default function VacanteSingle({
  vacante,
  setVacanteActive,
  setDisplay,
}) {
  return (
    <div
      className="my-2 px-4 hover:bg-[#799FE6] hover:rounded"
      onClick={() => {
        setVacanteActive(vacante);
        setDisplay("block");
      }}
    >
      {vacante.nombreVacante}
    </div>
  );
}
