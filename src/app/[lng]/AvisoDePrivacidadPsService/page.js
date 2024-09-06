"use client";
import { useState } from "react";

export default function Aviso() {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <div className="flex flex-col flex-nowrap justify-center items-center w-[90%] min-h-screen">
        {/* Embedding the PDF using an iframe */}
        <iframe
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/LEGAL-Aviso+Privacidad+POWER+.pdf"
          width="100%"
          height="600px"
          className="mt-12"
        />
      </div>
    </div>
  );
}
