import { getCsrfToken } from "next-auth/react";
import { AiOutlineSend } from "react-icons/ai";
export default async function SignIn(context) {
  const csrfToken = await getCsrfToken(context);
  return (
    <div className="bg-[#FBFBFB] min-h-[60vh] text-[#3D4C67] flex flex-col flex-nowrap items-center justify-center w-full">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:w-3/4 xl:w-3/4 gap-16 ">
        <div className="w-[276px] h-[233px] border" />
        <div className="flex flex-col flex-nowrap gap-16">
          <h1 className="text-2xl font-bold">
            Bienvenido al módulo de administración De ESR{" "}
          </h1>
          <form
            method="post"
            action="/api/auth/signin/email"
            className="flex-1 flex flex-row flex-wrap items-center justify-start gap-4"
          >
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="flex flex-row flex-nowrap items-center gap-4">
              <label className="text-[#3D4C67] font-bold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Direccion de correo"
                className="bg-gray-50 border border-gray-300 text-[#3D4C67] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5"
              />
            </div>
            <button type="submit" className="rounded bg-[#324BA6] text-white">
              <AiOutlineSend className="w-12 h-12 rotate-[-35deg] px-2 py-1 -translate-y-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
