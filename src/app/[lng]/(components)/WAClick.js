"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WAClick() {
  return (
    <a
      href="https://wa.me/522371267243?text=Hola%20estoy%20interesado%20en%20PS%20Services"
      target="_blank"
      aria-label="Whatsapp contact"
      onClick={() => sendGTMEvent({ event: "Whatsapp", value: "1" })}
      className="bg-green-700 text-white rounded-full hover:bg-green-800 fixed bottom-3 right-3 p-2 z-50"
    >
      <AiOutlineWhatsApp className="w-8 h-8 hover:w-12 hover:h-12" />
    </a>
  );
}
