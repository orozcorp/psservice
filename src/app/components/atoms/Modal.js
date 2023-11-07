"use client";
export default function Modal({ title, children, display, setDisplay }) {
  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex items-center justify-center top-[5vh] left-[5vw] lg:left-0 lg:w-full  `}
      style={{ display: display }}
    >
      <div className="relative w-3/4 max-w-2xl max-h-full drop-shadow-2xl shadow-2xl bg-white rounded-lg  overflow-y-auto z-50 ">
        <div className="flex items-start justify-between p-4 border-b rounded-t z-50 ">
          <h3 className="text-xl font-semibold text-gray-900 bg-white ">
            <div className="bg-white">{title}</div>
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent z-50  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            onClick={() => setDisplay("none")}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-6 space-y-6">{children}</div>
      </div>
    </div>
  );
}
