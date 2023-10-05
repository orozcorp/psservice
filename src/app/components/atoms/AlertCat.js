import React from "react";

export default function Alert({ color, title, data }) {
  console.log(data);
  return (
    <div
      className={`p-4 mb-4 w-full text-sm text-${color}-800 rounded-lg bg-${color}-100 border border-[#324BA6]`}
      role="alert"
    >
      <span className=" font-bold">{title}</span>
      <div className="bg-[#C0D0EC] py-2 my-2 text-[#76777A] font-bold px-2">
        {data}
      </div>
    </div>
  );
}
