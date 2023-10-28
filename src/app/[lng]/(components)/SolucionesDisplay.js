"use client";
import useWindowSize from "../../components/hooks/useWindowSize";
import SolucionSingle from "./SolucionSingle";
export default function SolucionesDisplay({ Soluciones }) {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  return (
    <>
      {width < 1000 ? (
        <div className="flex flex-row flex-wrap gap-6 w-full justify-between items-center">
          {Soluciones.map((solucion, index) => (
            <SolucionSingle key={index} {...solucion} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full justify-self-center self-center place-self-center my-8">
            {Soluciones.slice(0, 4).map((solucion, index) => (
              <SolucionSingle key={index} {...solucion} />
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full justify-self-center self-center place-self-center my-8">
            {Soluciones.slice(4).map((solucion, index) => (
              <SolucionSingle key={index} {...solucion} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
