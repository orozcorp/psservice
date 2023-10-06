import Link from "next/link";
import { AiOutlineExport } from "react-icons/ai";

export default function ConocimientoSingle({ documento, lng }) {
  const { name, url } = documento;
  return (
    <li className=" font-bold flex flex-row flex-wrap gap-2 items-center my-2">
      <Link
        href={url}
        className="bg-[#324BA6] text-white px-2.5 rounded py-1.5 mr-4"
        alt="name"
      >
        <AiOutlineExport className="w-4 h-4" />
      </Link>
      <Link href={url} className="flex-1">
        {name}
      </Link>
    </li>
  );
}
