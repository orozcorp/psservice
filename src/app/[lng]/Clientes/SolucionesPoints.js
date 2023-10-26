export default function SolucionesPoints({ Icon, title, points, colorChg }) {
  const solucionesPoints = points.split("•") || [];
  return (
    <div
      className={`flex flex-col flex-nowrap items-center justify-stretch p-8 min-h-[600px] text-white text-center flex-1 ${colorChg}`}
    >
      <div className="mt-32">
        <Icon color="#fff" width="120px" height="120px" />
      </div>
      <div className="my-8 uppercase">{title}</div>
      <ul className="text-center">
        {solucionesPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
