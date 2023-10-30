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
  langToChange,
  changeLanguage,
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
              <Link
                onClick={setAllFalse}
                href={`/${lng}/ImplementacionDeDataCenter`}
              >
                {t("Sistemas")}
              </Link>
              <Link
                onClick={setAllFalse}
                href={`/${lng}/IngenieriaEnSistemasElectricos`}
              >
                {t("Energia")}
              </Link>
              <Link
                onClick={setAllFalse}
                href={`/${lng}/AireAcondicionadosDePrecision`}
              >
                {t("Aire")}
              </Link>
              <Link
                onClick={setAllFalse}
                href={`/${lng}/MonitoreoYControlDeSeguridad`}
              >
                {t("Monitoreo")}
              </Link>
              <Link
                onClick={setAllFalse}
                href={`/${lng}/FabricacionDeGabinetesYComponentes`}
              >
                {t("Fabricacion")}
              </Link>
              <Link
                onClick={setAllFalse}
                href={`/${lng}/ImplementacionDeTecnologiaMedica`}
              >
                {t("Data")}
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
              <Link
                onClick={setAllFalse}
                href={`/${lng}/SoporteDeSistemasDeMisionCritica`}
              >
                {t("Soporte")}
              </Link>
            </div>
          )}
        </div>
        <div className=" text-white text-3xl">
          <Link
            onClick={() => setShowMenu(!showMenu)}
            href={`/${lng}/ClientesSatisfechosPsService`}
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
          <Link
            onClick={() => setShowMenu(!showMenu)}
            href={`/${lng}/EmpresaSocialmenteResponsable`}
          >
            {t("RSE")}
          </Link>
        </div>
        <div className=" text-white text-3xl">
          <Link
            onClick={() => setShowMenu(!showMenu)}
            href={`/${lng}/BolsaDeTrabajo`}
          >
            {t("Bolsa")}
          </Link>
        </div>
        <button onClick={changeLanguage} className="uppercase">
          {langToChange}
        </button>
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
