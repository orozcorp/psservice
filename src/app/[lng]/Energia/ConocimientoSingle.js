import Image from "next/image";

export default function ConocimientoSingle({ servicio }) {
  const { icon, service } = servicio;
  return (
    <li className=" font-bold flex flex-row flex-wrap gap-2 items-center my-2">
      {icon ? (
        <Image src={icon} height={46} width={46} alt="service" />
      ) : (
        <div className="w-[46px] h-[46px] border" />
      )}
      <div className="flex-1">{service}</div>
    </li>
  );
}
