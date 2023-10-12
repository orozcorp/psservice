import { format_date } from "../../../../lib/helpers/formatters";
export default function LastDocument({ lastDocument }) {
  const { name, createdAt, extension, estatus } = lastDocument;
  return (
    <div className="mb-20 w-full">
      <h2 className="font-bold">Último archivo subido al sistema</h2>
      <div className="bg-[#E0E0E0] px-4 rounded py-1.5 flex flex-row flex-wrap justify-between items-center w-full gap-4">
        <div>{name}</div>
        <div>{estatus === "ACTIVO" ? "Público" : estatus}</div>
        <div>{format_date(createdAt)}</div>
        <div>{extension?.toUpperCase()}</div>
      </div>
    </div>
  );
}
