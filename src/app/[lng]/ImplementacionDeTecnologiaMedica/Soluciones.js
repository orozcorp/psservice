export default function Soluciones({ Icon, title, points, colorChg }) {
  return (
    <div
      className={`flex flex-col flex-nowrap items-center justify-stretch p-8 min-h-[600px] flex-1 text-white text-center ${colorChg}`}
    >
      <div className="mt-32"></div>
      <Icon color="#fff" width="120px" height="120px" />
      <div className="my-8">{title}</div>
      <div>{points}</div>
    </div>
  );
}
