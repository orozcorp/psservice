import { AiOutlineWhatsApp } from "react-icons/ai";
export default function WAClick() {
  return (
    <a
      href="https://wa.me/521522371267243?text=Hola%20estoy%20interesado%20en%20PS%20Services"
      target="_blank"
      aria-label="Whatsapp contact"
      className="bg-green-700 text-white  rounded-full hover:bg-green-800 fixed bottom-3 right-3 p-2 z-40"
    >
      <AiOutlineWhatsApp className="w-8 h-8 hover:w-12 hover:h-12" />
    </a>
  );
}
