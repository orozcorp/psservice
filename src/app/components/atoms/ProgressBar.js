export default function ProgressBar({ completed }) {
  return (
    <div className="my-2">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 ">Progreso</span>
        <span className="text-sm font-medium text-blue-700 ">{completed}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${completed}%` }}
        ></div>
      </div>
    </div>
  );
}
