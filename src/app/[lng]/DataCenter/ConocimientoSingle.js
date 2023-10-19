export default function ConocimientoSingle({ servicio }) {
  const { Icon, service } = servicio;
  return (
    <li className=" font-bold flex flex-row flex-wrap gap-2 items-center my-2">
      {Icon ? (
        <Icon width={20} height={20} />
      ) : (
        <div className="w-[46px] h-[46px] border" />
      )}
      <div className="flex-1">{service}</div>
    </li>
  );
}
