import { useState } from "react";
import { format_date } from "../../../lib/helpers/formatters";

export default function DocumentRow({
  document,
  selectedDocuments,
  setSelectedDocuments,
}) {
  const { name, createdAt, estatus, extension } = document;
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (checked) {
      setSelectedDocuments(
        selectedDocuments.filter((doc) => doc._id !== document._id)
      );
    } else {
      setSelectedDocuments([...selectedDocuments, document]);
    }
  };
  return (
    <tr className="bg-white border-b text-center">
      <td>
        <div className="flex flex-row flex-wrap justify-center items-center p-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
          />
        </div>
      </td>
      <td>{name}</td>
      <td>{estatus === "ACTIVO" ? "Público" : estatus}</td>
      <td>{format_date(createdAt)}</td>
      <td>{extension.toUpperCase()}</td>
    </tr>
  );
}
