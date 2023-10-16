import ContactoForm from "./ContactoForm";
import { AiFillPhone, AiOutlineMenu } from "react-icons/ai";
export default function Contacto({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center items-center my-8  bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-3xl py-8 "
        style={{ width: "95vw", minHeight: "40vh" }}
      >
        <div className="flex flex-col flex-nowrap p-8 flex-1">
          <div className="text-3xl font-bold">{t("Contacto")}</div>
          <div className="text-xl mt-4">{t("ContactoText")}</div>
          <ContactoForm />
        </div>
        <div className="flex flex-col flex-nowrap flex-1 justify-center items-center gap-4">
          <button
            type="button"
            className="flex flex-row flex-wrap gap-4 min-w-[16rem] justify-between items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            {t("ContactoBtnEmergencia")}
            <AiFillPhone className="inline-block ml-2 rotate-90 w-6 h-6" />
          </button>
          <button
            type="button"
            className="flex flex-row flex-wrap gap-4 min-w-[16rem] justify-between items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {t("ContactoCatalogo")}
            <AiOutlineMenu className="inline-block ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
