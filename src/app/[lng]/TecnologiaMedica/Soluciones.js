export default function Soluciones({ Icon, title, points, colorChg }) {
  return (
    <div
      className={`flex flex-col flex-nowrap items-center justify-center p-8 min-h-[600px] flex-1 ${colorChg}`}
    >
      <Icon color="#fff" width="120px" height="120px" />
      <div className="my-8">{title}</div>
      <div>{points}</div>
    </div>
  );
}
