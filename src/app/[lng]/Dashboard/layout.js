import { getServerSession } from "next-auth";
import { authOptions } from "../../utlis/authOptions";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function layout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  return (
    <main className="flex flex-col flex-nowrap w-full justify-start items-center bg-white min-h-screen text-[#3D4C67] ">
      <nav className="bg-gray-50 dark:bg-gray-700 w-full flex flex-row flex-wrap justify-center items-center">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/Dashboard/DocumentUpload"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  ESR
                </Link>
              </li>
              <li>
                <a
                  href="/Dashboard/Vacantes"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Vacantes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-row flex-wrap p-4 w-[90vw] items-start justify-start my-10">
        <div className="flex flex-col flex-nowrap w-full justify-start items-start">
          {children}
        </div>
      </div>
    </main>
  );
}
