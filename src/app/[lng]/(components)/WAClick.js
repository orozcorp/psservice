import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";
export default function WAClick() {
  return (
    <Link
      href="https://wa.me/521522371267243?text=Hola%20estoy%20interesado%20en%20PS%20Services"
      className="bg-green-700 text-white  rounded-full hover:bg-green-800 fixed bottom-3 right-3 p-2 z-50"
    >
      <AiOutlineWhatsApp className="w-8 h-8 hover:w-12 hover:h-12" />
    </Link>
  );
}
