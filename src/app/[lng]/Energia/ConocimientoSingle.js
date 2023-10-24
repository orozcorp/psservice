export default function ConocimientoSingle({ servicio }) {
  const { icon: Icon, service } = servicio;
  return (
    <li className=" font-bold flex flex-row flex-wrap gap-4 items-center my-4">
      {Icon ? (
        <Icon width={40} height={40} />
      ) : (
        <div className="w-[46px] h-[46px] border" />
      )}
      <div className="flex-1">{service}</div>
    </li>
  );
}
