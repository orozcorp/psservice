export default function Soluciones({ Icon, title, points, colorChg }) {
  const solucionesPoints = points.split("•") || [];
  return (
    <div
      className={`flex flex-col flex-nowrap items-center justify-center p-8 min-h-[600px] text-white text-center flex-1 ${colorChg}`}
    >
      <Icon color="#fff" width="120px" height="120px" />
      <div className="my-8">{title}</div>
      <ul className="text-center">
        {solucionesPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
