import { getServerSession } from "next-auth";
import { authOptions } from "../../utlis/authOptions";
import { redirect } from "next/navigation";
export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  return (
    <main className="flex flex-col flex-nowrap w-full justify-start items-center bg-white min-h-screen text-[#3D4C67] ">
      <div className="flex flex-row flex-wrap p-4 w-[90vw] items-start justify-start my-10">
        <div className="flex flex-col flex-nowrap w-full justify-start items-start">
          {children}
        </div>
      </div>
    </main>
  );
}
