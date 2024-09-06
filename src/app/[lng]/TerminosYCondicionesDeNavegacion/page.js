"use client";

export default function Terminos() {
  return (
    <div className="flex flex-col flex-nowrap justify-center items-center">
      <div className="flex flex-col flex-nowrap justify-center items-center w-[90%] min-h-screen">
        {/* Embedding the PDF using an iframe */}
        <iframe
          src="https://psserviceimages.s3.us-east-2.amazonaws.com/LEGAL-Terminos+y+Condiciones+POWER+.pdf"
          width="100%"
          height="600px"
          className="mt-12"
        />
      </div>
    </div>
  );
}
