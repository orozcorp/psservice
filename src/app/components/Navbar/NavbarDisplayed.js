"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
export default function NavbarDisplayed({
  t,
  lng,
  showMenu,
  setShowMenu,
  session,
}) {
  const [showEspecialidadesDropdown, setShowEspecialidadesDropdown] =
    useState(false);
  const [showServiciosDropdown, setShowServiciosDropdown] = useState(false);
  const setAllFalse = () => {
    setShowEspecialidadesDropdown(false);
    setShowServiciosDropdown(false);
    setShowMenu(!showMenu);
  };
  return (
    <div className="h-screen bg-[#23283C] dark:bg-[#0A2473]">
      <div className="m-3 mt-7 flex flex-col flex-nowrap justify-start content-center items-start pl-8 gap-6">
        <ThemeSwitcher />
        <div className=" text-white text-3xl">
          <Link onClick={() => setShowMenu(!showMenu)} href={`/${lng}`}>
            {t("Inicio")}
          </Link>
        </div>
        {/* Especialidades Dropdown */}
        <div className="text-left text-3xl text-white flex flex-col flex-nowrap justify-center items-start">
          <button
            className="flex flex-row flex-wrap gap-4 justify-center items-center"
            onClick={() => {
              setShowEspecialidadesDropdown(!showEspecialidadesDropdown);
              setShowServiciosDropdown(false);
            }}
          >
            {t("Especialidades")}
            {showEspecialidadesDropdown ? (
              <AiFillCaretUp className="inline-block" />
            ) : (
              <AiFillCaretDown className="inline-block" />
            )}
          </button>
          {showEspecialidadesDropdown && (
            <div className="mt-2 p-4   text-white flex flex-col gap-2 w-full justify-center items-start">
              <Link onClick={setAllFalse} href={`/${lng}/DataCenter`}>
                {t("Sistemas")}
              </Link>
              <Link onClick={setAllFalse} href={`/${lng}/Energia`}>
                {t("Energia")}
              </Link>
              <Link onClick={setAllFalse} href={`/${lng}/AiresAcondicionados`}>
                {t("Aire")}
              </Link>
              <Link onClick={setAllFalse} href={`/${lng}/Monitoreo`}>
                {t("Monitoreo")}
              </Link>
            </div>
          )}
        </div>

        {/* Servicios Dropdown */}
        <div className="text-left text-3xl text-white flex flex-col flex-nowrap justify-start items-start">
          <button
            className="flex flex-row flex-wrap gap-4 justify-center items-center"
            onClick={() => {
              setShowEspecialidadesDropdown(false);
              setShowServiciosDropdown(!showServiciosDropdown);
            }}
          >
            {t("Servicios")}
            {showServiciosDropdown ? (
              <AiFillCaretUp className="inline-block" />
            ) : (
              <AiFillCaretDown className="inline-block" />
            )}
          </button>
          {showServiciosDropdown && (
            <div className="mt-2 p-4 text-left  text-white flex flex-col gap-2 w-full justify-center items-start">
              <Link onClick={setAllFalse} href={`/${lng}/Soporte`}>
                {t("Soporte")}
              </Link>
              <Link onClick={setAllFalse} href={`/${lng}/Fabricacion`}>
                {t("Fabricacion")}
              </Link>
              <Link onClick={setAllFalse} href={`/${lng}/TecnologiaMedica`}>
                {t("Data")}
              </Link>
            </div>
          )}
        </div>
        <div className=" text-white text-3xl">
          <Link
            onClick={() => setShowMenu(!showMenu)}
            href={`/${lng}/Clientes`}
          >
            {t("Clientes")}
          </Link>
        </div>
        <div className=" text-white text-3xl">
          <Link
            onClick={() => setShowMenu(!showMenu)}
            href={`/${lng}/#Aliados`}
          >
            {t("Aliados")}
          </Link>
        </div>
        <div className=" text-white text-3xl">
          <Link onClick={() => setShowMenu(!showMenu)} href={`/${lng}/RSE`}>
            {t("RSE")}
          </Link>
        </div>
        <div className=" text-white text-3xl">
          <Link onClick={() => setShowMenu(!showMenu)} href={`/${lng}/Bolsa`}>
            {t("Bolsa")}
          </Link>
        </div>
        {session && (
          <div className=" text-white text-3xl">
            <Link
              onClick={() => setShowMenu(!showMenu)}
              href={`/${lng}/Dashboard`}
            >
              {t("Dashboard")}
            </Link>
          </div>
        )}
        {!session && (
          <div className=" text-white text-3xl">
            <Link
              onClick={() => setShowMenu(!showMenu)}
              href="/api/auth/signin"
            >
              {t("LogIn")}
            </Link>
          </div>
        )}
        {session && (
          <div className=" text-white text-3xl">
            <button onClick={() => signOut()}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
}
